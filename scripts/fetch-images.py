import os
import re
import time
import urllib.request
from PIL import Image

SRC = 'src/data/images.ts'
OUT = 'public/img'
MAX_W = 1280
QUALITY = 82

with open(SRC, encoding='utf-8') as f:
    content = f.read()

keys = re.findall(r'^  (\w+): \{$', content, re.M)
srcs = re.findall(r"src: '([^']+)'", content)
credits = re.findall(r"creditUrl: '([^']+)'", content)
assert len(keys) == len(srcs) == len(credits), (len(keys), len(srcs), len(credits))

os.makedirs(OUT, exist_ok=True)
os.makedirs('tmp/img-dl', exist_ok=True)

total_in = 0
total_out = 0
lines = []
for key, url, credit in zip(keys, srcs, credits):
    if url.startswith('./'):
        print(f'skip (local): {key}')
        continue
    tmp = f'tmp/img-dl/{key}.bin'
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'djo-school-project/1.0'})
            with urllib.request.urlopen(req, timeout=60) as r, open(tmp, 'wb') as f:
                f.write(r.read())
            break
        except Exception as e:
            print(f'retry {key}: {e}')
            time.sleep(2)
    else:
        raise SystemExit(f'FAILED: {key} {url}')
    total_in += os.path.getsize(tmp)
    with Image.open(tmp) as im:
        im = im.convert('RGB')
        im.thumbnail((MAX_W, MAX_W))
        out = f'{OUT}/{key}.webp'
        im.save(out, 'WEBP', quality=QUALITY, method=6)
    size = os.path.getsize(out)
    total_out += size
    lines.append(f'{key} {url} -> {credit}')
    print(f'{key}: {size // 1024} KB')

with open(f'{OUT}/sources.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines) + '\n')

print(f'keys: {len(keys)}, in: {total_in // 1024} KB, webp: {total_out // 1024} KB')
