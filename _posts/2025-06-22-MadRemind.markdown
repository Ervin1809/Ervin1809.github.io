---
layout: post
title: MedRemind - Aplikasi Pengingat Minum Obat
description: Aplikasi mobile untuk membantu pengguna mengingat jadwal minum obat dengan notifikasi otomatis
date: 2025-06-22
categories: Project
tags: [Android, Java, SQLite, MVC, Mobile-App, Healthcare, Medicine-Reminder, Notification, Health-Tech]
image : /assets/img/medRemind/home.png
---

# MedRemind - Aplikasi Pengingat Minum Obat 💊📱

**[📱 Unduh APK](https://github.com/Ervin1809/Project-Mobile-MedRemind/releases)** •
**[📖 Dokumentasi](https://github.com/Ervin1809/Project-Mobile-MedRemind/wiki)** •
**[🐛 Laporkan Masalah](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)**

---

## 📱 Tentang MedRemind

**MedRemind** adalah aplikasi mobile yang dirancang untuk membantu pengguna mengingat jadwal minum obat secara lebih teratur dan tepat waktu. Aplikasi ini menyediakan notifikasi otomatis sesuai dengan jadwal yang telah ditetapkan, mencegah terlewatnya dosis obat, terutama bagi pengguna dengan rejimen pengobatan yang kompleks.

### 🎯 Masalah yang Diatasi

✅ **Kelupaan**: Notifikasi otomatis mencegah lupa minum obat
✅ **Manajemen Stok**: Memantau persediaan obat dan pengingat isi ulang
✅ **Jadwal Kompleks**: Penjadwalan dosis yang fleksibel dan mudah
✅ **Kepatuhan Pengobatan**: Melacak asupan obat untuk meningkatkan kepatuhan

---

## 👥 Pengguna Target

### 🎯 Pengguna Utama

**👴 Lansia**
- Memerlukan pengingat untuk rutinitas minum obat
- Antarmuka yang sederhana dan mudah digunakan

**🏥 Pasien Penyakit Kronis**
- Jadwal obat rutin yang kompleks
- Pengelolaan beberapa jenis obat

**🩹 Pasien Pasca Operasi**
- Kepatuhan terhadap regimen pengobatan
- Jadwal pengobatan sementara

### 🤝 Pengguna Sekunder

**👨‍👩‍👧‍👦 Pengasuh dan Keluarga**
- Membantu mengelola obat untuk orang lain
- Kemampuan pemantauan jarak jauh

**👤 Pengguna Umum**
- Mengorganisir pengobatan dengan lebih efisien
- Manajemen kesehatan preventif

---

## ✨ Fitur Utama

### 💊 **Input Data Obat**
- Menambahkan obat baru dengan informasi lengkap
- Menyimpan nama obat, deskripsi, dan instruksi penggunaan
- Basis data obat yang terstruktur

### ⚖️ **Manajemen Dosis, Stok, dan Isi Ulang**
- Pengaturan jadwal dosis (harian, mingguan, kustom)
- Memantau sisa stok obat
- Pengingat isi ulang otomatis saat stok menipis
- Konfigurasi dosis yang fleksibel

### 🔔 **Pengingat Otomatis**
- Notifikasi tepat waktu untuk jadwal minum obat
- Konfirmasi "Sudah Diminum" untuk pelacakan
- Sistem notifikasi cerdas
- Suara pengingat yang dapat disesuaikan

### ⚙️ **Fitur Tambahan**
- Menghapus atau mereset data obat
- Manajemen profil pengguna
- Mode gelap dan terang
- Cadangkan dan pulihkan data

---

## 🛠️ Teknologi yang Digunakan

### 📱 **Platform dan Bahasa**
- **Platform**: Android 6.0+ (API 23+)
- **Bahasa Pemrograman**: Java
- **IDE**: Android Studio

### 🏗️ **Arsitektur dan Basis Data**
- **Arsitektur**: Model-View-Controller (MVC)
- **Basis Data**: SQLite (Penyimpanan Lokal)
- **Pola**: Komponen Android Natif

### 🔧 **Pendekatan Pengembangan**
- **Framework**: Android Natif (Tanpa framework eksternal)
- **Desain**: Panduan Material Design
- **Notifikasi**: Android Notification Manager
- **Penyimpanan**: Shared Preferences + SQLite

---

## 👨‍💻 **Teknologi**

**Platform:** Android 6.0+ (API 21+)
**Bahasa:** Java
**Basis Data:** SQLite
**Arsitektur:** Pola MVC
**Desain:** Material Design

---

## 🔗 **Tautan**

- 📱 [Unduh APK](https://github.com/Ervin1809/Project-Mobile-MedRemind/releases)
- 🔗 [Kode Sumber](https://github.com/Ervin1809/Project-Mobile-MedRemind)
- 📚 [Dokumentasi](https://github.com/Ervin1809/Project-Mobile-MedRemind/wiki)

---

## 📱 Tangkapan Layar dan Demo

### 🏠 Beranda dan Dasbor

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/medRemind/home.png" alt="Main Dashboard" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Dasbor Utama</strong> - Ringkasan obat harian dan pengingat</p>
  </div>
  <div>
    <img src="/assets/img/medRemind/obatDetail.png" alt="Medicine Details" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Detail Obat</strong> - Informasi obat dan dosis yang lengkap</p>
  </div>
</div>

---

### 💊 Manajemen Obat

<div style="margin-bottom: 30px;">
  <img src="/assets/img/medRemind/addObat.png" alt="Add Medicine" style="width: 100%; max-width: 400px; display: block; margin: 0 auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
  <p style="text-align: center; font-style: italic; color: #666;"><strong>Tambah Obat</strong> - Formulir input obat yang sederhana</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/medRemind/addObatHarian.png" alt="Daily Schedule" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Jadwal Harian</strong> - Atur pengingat obat harian</p>
  </div>
  <div>
    <img src="/assets/img/medRemind/addObatMingguan.png" alt="Weekly Schedule" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Jadwal Mingguan</strong> - Konfigurasi jadwal obat mingguan</p>
  </div>
</div>

---

### 👤 Profil dan Pengaturan

<div style="margin-bottom: 30px;">
  <img src="/assets/img/medRemind/profile.png" alt="User Profile" style="width: 100%; max-width: 400px; display: block; margin: 0 auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
  <p style="text-align: center; font-style: italic; color: #666;"><strong>Profil Pengguna</strong> - Informasi pribadi dan preferensi aplikasi</p>
</div>

---

## 💻 Untuk Pengembang

### 🔧 **Pengaturan Pengembangan**

Klon repositori:
`git clone https://github.com/Ervin1809/Project-Mobile-MedRemind.git`
`cd Project-Mobile-MedRemind`

Buka dengan Android Studio:
File → Open → Pilih folder proyek
Tunggu sinkronisasi Gradle selesai

Bangun dan Jalankan:
`./gradlew assembleDebug`
`./gradlew installDebug`

---## 📈 Status Proyek

### ✅ **Fitur yang Telah Diimplementasikan**
- [x] Manajemen Basis Data Obat
- [x] Sistem Notifikasi Cerdas
- [x] Konfigurasi Dosis dan Jadwal
- [x] Pemantauan Stok dan Peringatan Isi Ulang
- [x] Manajemen Profil Pengguna
- [x] Dukungan Tema Gelap/Terang
- [x] Konfirmasi Asupan Obat
- [x] Penyimpanan Lokal SQLite

### 🚧 **Peningkatan di Masa Depan**

**Fase 1 - Peningkatan Inti**
- [ ] Peringatan Interaksi Obat
- [ ] Analitik Riwayat Dosis
- [ ] Ekspor Laporan Kesehatan
- [ ] Cadangan dan Sinkronisasi Cloud

**Fase 2 - Fitur Lanjutan**
- [ ] Pemindai Kode Batang Obat
- [ ] Integrasi Dokter/Apotek
- [ ] Pemantauan Anggota Keluarga
- [ ] Dukungan Multi-bahasa

**Fase 3 - Fitur Cerdas**
- [ ] Wawasan Kepatuhan Bertenaga AI
- [ ] Integrasi Perangkat yang Dapat Dipakai
- [ ] Dukungan Perintah Suara
- [ ] Integrasi Telemedisin

---

## 👨‍💻 Tim Pengembang

### 🎯 **Tim Pengembangan**

| Nama | NIM | GitHub |
|------|------------|--------|
| **M. Ervin** | H071231050 | [@Ervin1809](https://github.com/Ervin1809) |
| **Frisilia Kiki** | H071231003 | [@frisiliakiki](https://github.com/frisiliakiki) |
| **Muhammad Dirga Dian Nugraha** | H071231039 | [@dirganugrah](https://github.com/dirganugrah) |
| **Jevon Ivander Thomas** | H071231067 | [@jevonivander](https://github.com/jevonivander) |
| **Imam Ahmad Mirza** | H071231082 | [@imamamirza](https://github.com/imamamirza) |

## 📞 Dukungan dan Kontak

### Dapatkan Bantuan

**[🐛 Laporan Bug](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)** •
**[💡 Permintaan Fitur](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues/new)** •
**[📖 Wiki](https://github.com/Ervin1809/Project-Mobile-MedRemind/wiki)**

### Tautan Proyek

- **Repositori**: [Proyek MedRemind](https://github.com/Ervin1809/Project-Mobile-MedRemind)
- **Rilis**: [Unduh APK](https://github.com/Ervin1809/Project-Mobile-MedRemind/releases)
- **Issues**: [Laporkan Masalah](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](https://github.com/Ervin1809/Project-Mobile-MedRemind/blob/main/LICENSE) untuk detailnya.

---

**Dibuat dengan ❤️ oleh Tim MedRemind**

*Membantu orang menjaga kepatuhan pengobatan yang lebih baik melalui pengingat cerdas*

⭐ **[Beri bintang proyek ini](https://github.com/Ervin1809/Project-Mobile-MedRemind)** jika Anda merasa berguna!

---

*Terakhir diperbarui: 22 Juni 2025*
