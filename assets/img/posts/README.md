# Image Assets untuk Posts

Folder ini berisi gambar-gambar untuk blog posts.

## Struktur Folder

```
/assets/img/posts/
├── [nama-post]/           # Folder untuk setiap post (opsional)
│   ├── hero.jpg          # Gambar utama
│   ├── screenshot-1.png  # Screenshot tambahan
│   └── ...
└── default-project.svg    # Gambar default (di parent)
```

## Cara Menggunakan

### 1. Menambahkan gambar ke post

Di front-matter post Anda (`.md` file), tambahkan property `image`:

```yaml
---
layout: post
title: "Judul Post Anda"
date: 2025-10-27
image: /assets/img/posts/nama-post/hero.jpg
categories: [project, web]
tags: [react, javascript]
---
```

### 2. Ukuran gambar yang disarankan

- **Dimensi ideal**: 800x400px (ratio 2:1)
- **Format**: JPG, PNG, atau WebP
- **Ukuran file**: Maksimal 500KB untuk performa optimal

### 3. Naming convention

Gunakan nama file yang deskriptif dengan huruf kecil dan tanda strip:
- ✅ Good: `hero-image.jpg`, `screenshot-dashboard.png`
- ❌ Avoid: `IMG_1234.jpg`, `Untitled.png`

## Tips

1. **Compress gambar** sebelum upload untuk mempercepat loading
2. **Gunakan alt text** yang deskriptif untuk accessibility
3. **Organize by project** - buat subfolder untuk setiap project/post yang besar
4. **Fallback**: Jika tidak ada image di front-matter, akan otomatis pakai `/assets/img/default-project.svg`

## Tools untuk Compress

- [TinyPNG](https://tinypng.com/) - Online image compressor
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app untuk batch optimization
