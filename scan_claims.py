import os
import re
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

exclude_dirs = {'node_modules', '.next', '.git'}

patterns = {
    'stat_numbers': re.compile(r'(\b12\+\s*years|\b3,?850\+|\b1,?200\+|\b4\.9[56]?|\b150\+\s*reviews|\b240\s*reviews|\b385\s*reviews)', re.I),
    'prices': re.compile(r'(₹\s*\d+|from\s*₹|starting\s*at\s*₹|\blowPrice\b|\bhighPrice\b|\b15\s*to\s*180|\bpriceRange\b)', re.I),
    'offers_20': re.compile(r'20%|flat\s*20', re.I),
    'warranty_numbers': re.compile(r'(\b5\s*to\s*10\s*years?|\b5-to-10|\b10-year|\b10\s*years?\s*warranty)', re.I),
}

hits = {}
for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.ts', '.tsx', '.json', '.md', '.html')):
            fp = os.path.join(root, file)
            try:
                with open(fp, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    for idx, line in enumerate(lines):
                        for p_name, pat in patterns.items():
                            if pat.search(line):
                                if fp not in hits:
                                    hits[fp] = []
                                hits[fp].append((idx + 1, p_name, line.strip()[:100]))
            except:
                pass

print(f"Total files with claims/pricing/offer matches: {len(hits)}")
for fp, matches in sorted(hits.items()):
    print(f"=== {fp} ({len(matches)} matches) ===")
    for l_no, p_name, snippet in matches[:5]:
        print(f"  L{l_no} [{p_name}]: {snippet}")
    if len(matches) > 5:
        print(f"  ... and {len(matches)-5} more")
