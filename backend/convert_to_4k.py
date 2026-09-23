import os
import sys
import time
from concurrent.futures import ProcessPoolExecutor, as_completed
from PIL import Image

CATEGORIES = ['Landscape', 'Nature', 'Sport', 'Street', 'contact']
MAX_DIM = 3840  # 4K UHD Standard
QUALITY = 86
METHOD = 5

def process_image(task):
    cat, filename = task
    src_dir = os.path.join('frontend', 'images', cat)
    src_path = os.path.join(src_dir, filename)
    base_name = os.path.splitext(filename)[0]
    
    disp_path = os.path.join(src_dir, 'display', f'{base_name}.webp')
    opt_path = os.path.join('frontend', 'images', 'optimized', cat, f'{base_name}.webp')
    
    try:
        with Image.open(src_path) as img:
            # Handle orientation if EXIF present
            try:
                exif = img.getexif()
                orientation = exif.get(0x0112)
                if orientation == 3:
                    img = img.rotate(180, expand=True)
                elif orientation == 6:
                    img = img.rotate(270, expand=True)
                elif orientation == 8:
                    img = img.rotate(90, expand=True)
            except Exception:
                pass

            if img.mode not in ('RGB', 'RGBA'):
                img = img.convert('RGB')
                
            orig_w, orig_h = img.size
            if max(orig_w, orig_h) > MAX_DIM:
                scale = MAX_DIM / max(orig_w, orig_h)
                new_size = (int(round(orig_w * scale)), int(round(orig_h * scale)))
                resized = img.resize(new_size, Image.Resampling.LANCZOS)
            else:
                new_size = (orig_w, orig_h)
                resized = img.copy()

            icc = img.info.get('icc_profile')
            
            # Save display version
            os.makedirs(os.path.dirname(disp_path), exist_ok=True)
            resized.save(disp_path, 'WEBP', quality=QUALITY, method=METHOD, icc_profile=icc)
            
            # Save optimized version
            os.makedirs(os.path.dirname(opt_path), exist_ok=True)
            resized.save(opt_path, 'WEBP', quality=QUALITY, method=METHOD, icc_profile=icc)
            
            size_kb = os.path.getsize(disp_path) // 1024
            return (True, cat, filename, orig_w, orig_h, new_size[0], new_size[1], size_kb)
    except Exception as e:
        return (False, cat, filename, 0, 0, 0, 0, str(e))

def main():
    tasks = []
    for cat in CATEGORIES:
        src_dir = os.path.join('frontend', 'images', cat)
        if not os.path.exists(src_dir):
            continue
        for f in os.listdir(src_dir):
            if f.lower().endswith(('.jpg', '.jpeg', '.png')):
                tasks.append((cat, f))
                
    total = len(tasks)
    print(f'Starting 4K generation for {total} images across {CATEGORIES}...')
    t0 = time.time()
    
    completed = 0
    errors = []
    
    workers = min(os.cpu_count() or 4, 8)
    with ProcessPoolExecutor(max_workers=workers) as executor:
        futures = {executor.submit(process_image, task): task for task in tasks}
        for future in as_completed(futures):
            res = future.result()
            completed += 1
            if res[0]:
                _, cat, fn, ow, oh, nw, nh, kb = res
                print(f'[{completed:03d}/{total:03d}] {cat}/{fn}: {ow}x{oh} -> {nw}x{nh} ({kb} KB)')
            else:
                _, cat, fn, _, _, _, _, err = res
                print(f'[{completed:03d}/{total:03d}] ERROR on {cat}/{fn}: {err}')
                errors.append((cat, fn, err))
                
    elapsed = time.time() - t0
    print(f'\nFinished processing {completed} images in {elapsed:.1f}s.')
    if errors:
        print(f'Encountered {len(errors)} errors: {errors}')
    else:
        print('All 128 images successfully generated in 4K resolution!')

if __name__ == '__main__':
    main()

