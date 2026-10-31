const { spawn, execSync } = require('child_process');
const http = require('http');

const PORT = 3005;
const BASE = `http://localhost:${PORT}`;

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    function check() {
      http.get(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve();
        } else {
          retry();
        }
      }).on('error', retry);
    }
    function retry() {
      if (Date.now() - start > timeoutMs) {
        reject(new Error('Timeout waiting for server'));
      } else {
        setTimeout(check, 500);
      }
    }
    check();
  });
}

function auditUrl(url, preset = 'mobile') {
  const flags = preset === 'desktop' ? '--preset=desktop' : '';
  const cmd = `lighthouse "${url}" --output=json ${flags} --chrome-flags="--headless --no-sandbox --disable-gpu" --quiet`;
  let output = '';
  try {
    output = execSync(cmd, { stdio: ['pipe', 'pipe', 'pipe'], maxBuffer: 25 * 1024 * 1024 }).toString();
  } catch (err) {
    if (err.stdout) {
      output = err.stdout.toString();
    } else {
      throw err;
    }
  }

  const jsonStart = output.indexOf('{');
  if (jsonStart === -1) throw new Error('No JSON found in output');
  const jsonStr = output.slice(jsonStart);
  const data = JSON.parse(jsonStr);

  return {
    perf: Math.round((data.categories.performance?.score || 0) * 100),
    a11y: Math.round((data.categories.accessibility?.score || 0) * 100),
    bp: Math.round((data.categories['best-practices']?.score || 0) * 100),
    seo: Math.round((data.categories.seo?.score || 0) * 100),
  };
}

async function run() {
  console.log(`Starting Next.js production server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    stdio: 'ignore',
    shell: true,
  });

  try {
    await waitForServer(BASE);
    console.log('Next.js server is ready!\n');

    const pages = [
      { name: 'Home (/)', path: '/' },
      { name: 'Service (/services/balcony-safety-nets)', path: '/services/balcony-safety-nets' },
      { name: 'Area (/areas/koramangala)', path: '/areas/koramangala' },
      { name: 'Contact (/contact)', path: '/contact' },
    ];

    const results = [];

    for (const page of pages) {
      const targetUrl = `${BASE}${page.path}`;
      console.log(`Auditing ${page.name}...`);
      
      console.log(`  -> Running Mobile audit...`);
      const mobileScores = auditUrl(targetUrl, 'mobile');
      console.log(`     Mobile: Perf ${mobileScores.perf} | A11y ${mobileScores.a11y} | BP ${mobileScores.bp} | SEO ${mobileScores.seo}`);

      console.log(`  -> Running Desktop audit...`);
      const desktopScores = auditUrl(targetUrl, 'desktop');
      console.log(`     Desktop: Perf ${desktopScores.perf} | A11y ${desktopScores.a11y} | BP ${desktopScores.bp} | SEO ${desktopScores.seo}`);

      results.push({
        page: page.name,
        mobile: mobileScores,
        desktop: desktopScores,
      });
    }

    console.log('\n' + '='.repeat(75));
    console.log('FINAL LIGHTHOUSE AUDIT SCORES');
    console.log('='.repeat(75));
    console.log('Page                                        | Mode    | Perf | A11y | BP  | SEO ');
    console.log('-'.repeat(75));
    results.forEach(r => {
      console.log(`${r.page.padEnd(43)} | Mobile  | ${String(r.mobile.perf).padStart(4)} | ${String(r.mobile.a11y).padStart(4)} | ${String(r.mobile.bp).padStart(3)} | ${String(r.mobile.seo).padStart(3)} `);
      console.log(`${r.page.padEnd(43)} | Desktop | ${String(r.desktop.perf).padStart(4)} | ${String(r.desktop.a11y).padStart(4)} | ${String(r.desktop.bp).padStart(3)} | ${String(r.desktop.seo).padStart(3)} `);
      console.log('-'.repeat(75));
    });
    console.log('='.repeat(75));

  } finally {
    console.log('Stopping local test server...');
    if (process.platform === 'win32') {
      try {
        execSync(`taskkill /F /T /PID ${server.pid}`);
      } catch (e) {}
    } else {
      server.kill();
    }
  }
}

run().catch(console.error);
