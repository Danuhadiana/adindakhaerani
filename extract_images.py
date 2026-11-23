import pymupdf
import os

doc = pymupdf.open(r'C:\Users\USER\.gemini\antigravity\brain\e3004159-270e-4a75-b4af-b7e9b0087f3b\.user_uploaded\media_1795464230547_1be57283.pdf')
img_dir = r'c:\laragon\www\adindakhaerani\client\public\images'
os.makedirs(img_dir, exist_ok=True)

count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        filename = f'page{page_num+1}_img{img_idx+1}.{ext}'
        filepath = os.path.join(img_dir, filename)
        with open(filepath, 'wb') as f:
            f.write(image_bytes)
        print(f'Extracted: {filename} ({len(image_bytes)} bytes, {w}x{h})')
        count += 1

print(f'\nTotal images extracted: {count}')
