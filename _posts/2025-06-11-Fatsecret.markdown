---
layout: post
title: VinkerTrack - Pelacak Nutrisi Personal
description: Aplikasi Android untuk pelacakan nutrisi harian terintegrasi dengan USDA Food Data Central API
date: 2025-06-11
categories: Project
tags: [Android, Java, SQLite, USDA-API, Retrofit, Material-Design, MVVM, Nutrition-Tracker, Mobile-App, Health-Tech]
image : /assets/img/fatsecret/login.png
---

# VinkerTrack - Pelacak Nutrisi Personal 🍎📱

**[📱 Unduh APK](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/releases)** •
**[📖 Dokumentasi](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/wiki)** •
**[🐛 Laporkan Masalah](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/issues)**

---

## 🎯 Ringkasan

**VinkerTrack** adalah aplikasi mobile Android yang dirancang untuk membantu pengguna melacak dan mengelola asupan nutrisi harian mereka dengan akurat dan efisien. Aplikasi ini mengintegrasikan data nutrisi dari **USDA Food Data Central API** untuk menyediakan informasi terpercaya dari ribuan bahan makanan.

### 💡 Keunggulan Utama

✅ **Akurat**: Data nutrisi disediakan oleh USDA Food Data Central
✅ **Personal**: Perhitungan berdasarkan profil individu pengguna
✅ **Mudah Digunakan**: Antarmuka intuitif dengan Material Design
✅ **Komprehensif**: Pelacakan lengkap untuk semua waktu makan

---

## ✨ Fitur

### 🔐 Sistem Autentikasi
- Registrasi dengan validasi email & password
- Login aman dengan manajemen sesi
- Manajemen profil yang komprehensif

### 👤 Profil Personal
- Input data pribadi (berat badan, tinggi badan, usia, jenis kelamin)
- 5 tingkat aktivitas harian
- Perhitungan otomatis kebutuhan nutrisi

### 🔍 Database Makanan
- Pencarian real-time menggunakan USDA Food Data Central API
- Database nutrisi resmi dari pemerintah AS
- Informasi detail per 100g

### 🍽️ Pencatatan Makanan
- 4 kategori waktu makan
- Input porsi dalam gram
- Perhitungan nutrisi real-time

### 📊 Analitik Cerdas
- Perhitungan BMR & TDEE
- Penyesuaian kalori berdasarkan tujuan
- Optimasi distribusi makro

### 🎨 Pengalaman Pengguna
- Mode gelap otomatis
- UI Material Design
- Tata letak responsif

---

## 🚀 Memulai

### 📋 Persyaratan
- **Android 5.0** (API 21) atau lebih tinggi
- **Koneksi internet** untuk mengakses USDA API
- **Minimal 50MB ruang penyimpanan**

### ⚡ Langkah Instalasi

**1. Unduh & Instal**

- 📱 Unduh APK dari halaman Release
- 🔧 Aktifkan "Instal dari Sumber Tidak Dikenal" jika diperlukan
- 📲 Instal aplikasi VinkerTrack


**2. Pengaturan Awal**

- 👤 Daftar akun baru atau login
- 📝 Lengkapi profil pribadi Anda
- 🎯 Atur target berat badan dan tingkat aktivitas
- ✅ Mulai melacak nutrisi harian!


**3. Penggunaan Harian**

- 🔍 Cari makanan dari database USDA
- ⚖️ Input berat makanan dalam gram
- 📊 Pantau progres nutrisi harian
- 📈 Tinjau riwayat dan tren


---

## 🛠️ Arsitektur Teknis

### 🏗️ Struktur Aplikasi

<pre>
  Aplikasi Android VinkerTrack
  ├── 🔐 Lapisan Autentikasi
  │   ├── Registrasi & Login Pengguna
  │   └── Manajemen Sesi
  ├── 💾 Lapisan Data
  │   ├── Database SQLite (5 tabel)
  │   ├── Integrasi USDA API
  │   └── Repositori Data
  ├── 🧮 Logika Bisnis
  │   ├── Kalkulator Nutrisi
  │   ├── Algoritma BMR/TDEE
  │   └── Distribusi Makro
  └── 🎨 Lapisan Presentasi
      ├── Arsitektur MVVM
      ├── UI Material Design
      └── Mode Gelap Otomatis
</pre>

### 📊 Skema Database

**Ringkasan Tabel Inti:**

| Tabel          | Tujuan                        | Field Utama                         |
|----------------|-------------------------------|-------------------------------------|
| users          | Autentikasi pengguna          | id, email, password, created_at     |
| user_profiles  | Data pribadi & target         | weight, height, age, activity_level |
| ingredients    | Database makanan USDA         | fdc_id, name, nutrition_per_100g    |
| food_logs      | Pelacakan makanan harian      | date, meal_time, total_nutrition    |
| food_log_items | Catatan makanan individual    | weight_grams, calculated_nutrition  |

### 🌐 Integrasi USDA API

<pre>
  // Pencarian makanan real-time dengan USDA Food Data Central
  Query Pencarian → USDA API → Data Nutrisi → Cache Lokal
  // Data nutrisi akurat untuk 300.000+ item makanan
  // Respon cepat menggunakan OkHttp & Retrofit2
</pre>

### 🧮 Mesin Perhitungan Nutrisi

**Perhitungan BMR (Persamaan Mifflin-St Jeor):**
- Pria: `BMR = 10×berat + 6,25×tinggi - 5×usia + 5`
- Wanita: `BMR = 10×berat + 6,25×tinggi - 5×usia - 161`

**Pengali Aktivitas:**
- Sedenter: `1,2x` (olahraga minimal)
- Ringan: `1,375x` (olahraga ringan 1-3x/minggu)
- Sedang: `1,55x` (olahraga sedang 3-5x/minggu)
- Aktif: `1,725x` (olahraga berat 6-7x/minggu)
- Sangat Aktif: `1,9x` (sangat berat + pekerjaan fisik)

**Distribusi Makro:**
- Protein: `25%` dari kalori harian
- Karbohidrat: `45%` dari kalori harian
- Lemak: `30%` dari kalori harian

---

## 📱 Tangkapan Layar & Demo

### 🔐 Autentikasi

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/fatsecret/login.png" alt="Layar Login" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Layar Login</strong> - Autentikasi pengguna dengan email & password</p>
  </div>
  <div>
    <img src="/assets/img/fatsecret/regis.png" alt="Layar Registrasi" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Layar Registrasi</strong> - Pendaftaran pengguna baru dengan validasi</p>
  </div>
</div>

---

### 🔍 Pencarian Makanan & Database

<div style="margin-bottom: 30px;">
  <img src="/assets/img/fatsecret/search.png" alt="Antarmuka Pencarian Makanan" style="width: 100%; max-width: 400px; display: block; margin: 0 auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
  <p style="text-align: center; font-style: italic; color: #666;"><strong>Antarmuka Pencarian Makanan</strong> - Pencarian real-time dari USDA Food Data Central</p>
</div>

---

### 👤 Manajemen Profil Pengguna

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/fatsecret/profile1.png" alt="Pengaturan Profil" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Pengaturan Profil</strong> - Input data pribadi & target kesehatan</p>
  </div>
  <div>
    <img src="/assets/img/fatsecret/profile2.png" alt="Detail Profil" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Detail Profil</strong> - Hasil perhitungan BMR/TDEE</p>
  </div>
</div>

---

### 📊 Dashboard Beranda & Analitik

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/fatsecret/home1.png" alt="Dashboard Utama" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Dashboard Utama</strong> - Ringkasan nutrisi harian</p>
  </div>
  <div>
    <img src="/assets/img/fatsecret/home2.png" alt="Pelacakan Nutrisi" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Pelacakan Nutrisi</strong> - Pelacakan makro detail</p>
  </div>
</div>

### ✨ Fitur Unggulan
- **🔐 Autentikasi Aman**: Validasi email & enkripsi password
- **🔍 Pencarian Makanan Cerdas**: Akses ke 300.000+ item makanan dari database USDA
- **👤 Profil Personal**: Target nutrisi yang disesuaikan berdasarkan tujuan individual
- **📊 Analitik Real-time**: Perhitungan BMR, TDEE, dan distribusi makro
- **🍽️ Pencatatan Makanan**: Lacak sarapan, makan siang, makan malam, dan camilan
- **🌙 Mode Gelap Otomatis**: Pergantian tema mulus berdasarkan preferensi sistem

---

## 💻 Untuk Pengembang

### 🔧 Pengaturan Pengembangan

<pre>
  # Clone repositori
  git clone https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025.git
  cd Project-Fatsecret-AndrodiStudio-2025

  # Buka dengan Android Studio
  # File → Open → Pilih folder proyek
  # Tunggu Gradle sync selesai

  # Konfigurasi USDA API Key
  # Edit: app/src/main/java/com/example/fatsecret/data/network/ApiConfig.java
  # Ganti YOUR_API_KEY dengan API key USDA Anda

  # Build & Run
  ./gradlew assembleDebug
  ./gradlew installDebug
</pre>

### 🧪 Pengujian

<pre>
  # Unit test
  ./gradlew test

  # Instrumented test
  ./gradlew connectedAndroidTest
</pre>

---

## 📈 Status Proyek

### ✅ Fitur yang Telah Selesai
- [x] Sistem Autentikasi Pengguna
- [x] Manajemen Profil Personal
- [x] Integrasi Pencarian Makanan USDA
- [x] Perhitungan Nutrisi Harian
- [x] Sistem Pencatatan Makanan
- [x] Mode Gelap Otomatis
- [x] Implementasi Database SQLite
- [x] Mesin Perhitungan BMR/TDEE

### 🚧 Rencana Pengembangan

**Fase 1 - Peningkatan**
- [ ] Dashboard Analitik Lanjutan
- [ ] Laporan Mingguan/Bulanan
- [ ] Sistem Makanan Favorit
- [ ] Pemindaian Barcode

**Fase 2 - Pengalaman Pengguna**
- [ ] Perencanaan Makanan
- [ ] Pembuat Resep
- [ ] Fitur Sosial
- [ ] Notifikasi Push

**Fase 3 - Lanjutan**
- [ ] Rekomendasi Makanan AI
- [ ] Integrasi Pelacak Kebugaran
- [ ] Dukungan Multi-bahasa

---

## 📞 Dukungan & Kontak

### Dapatkan Bantuan

**[🐛 Laporan Bug](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/issues)** •
**[💡 Permintaan Fitur](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/issues/new)** •
**[📖 Wiki](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/wiki)**

### Pengembang

**Ervin1809** - *Pengembang Utama*

- GitHub: [@Ervin1809](https://github.com/Ervin1809)
- Repositori: [Proyek VinkerTrack](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025)


---

**Dibuat dengan ❤️ oleh [Ervin1809](https://github.com/Ervin1809)**

*Membantu orang mencapai tujuan kesehatan mereka melalui pelacakan nutrisi yang akurat*

⭐ **[Beri bintang untuk proyek ini](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025)** jika Anda merasa bermanfaat!

---

*Terakhir diperbarui: 26 Juni 2025*
