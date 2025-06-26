---
layout: default
title: MedRemind - Aplikasi Pengingat Obat
description: Mobile application untuk membantu pengguna mengingat jadwal konsumsi obat dengan notifikasi otomatis
date: 2025-06-22
categories: Project
tags: [Android, Java, SQLite, MVC, Mobile-App, Healthcare, Medicine-Reminder, Notification, Health-Tech]
---

# MedRemind - Aplikasi Pengingat Obat 💊📱

![Android](https://img.shields.io/badge/Platform-Android-green.svg)
![Java](https://img.shields.io/badge/Language-Java-orange.svg)
![SQLite](https://img.shields.io/badge/Database-SQLite-blue.svg)
![MVC](https://img.shields.io/badge/Architecture-MVC-purple.svg)
![Healthcare](https://img.shields.io/badge/Domain-Healthcare-red.svg)

**[📱 Download APK](https://github.com/Ervin1809/Project-Mobile-MedRemind/releases)** •
**[📖 Documentation](https://github.com/Ervin1809/Project-Mobile-MedRemind/wiki)** •
**[🐛 Report Issues](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)**

---

## 📱 Tentang MedRemind

**MedRemind** adalah aplikasi mobile yang dirancang untuk membantu pengguna mengingat jadwal konsumsi obat dengan lebih teratur dan tepat waktu. Aplikasi ini menyediakan notifikasi otomatis sesuai jadwal yang telah ditentukan, sehingga dapat mencegah kelupaan dalam minum obat yang sering terjadi, terutama pada pengguna yang memiliki jadwal konsumsi obat yang kompleks.

### 🎯 Masalah yang Diselesaikan

✅ **Kelupaan Minum Obat**: Notifikasi otomatis mencegah terlewatnya jadwal
✅ **Manajemen Stok**: Monitoring persediaan obat dan pengingat refill
✅ **Jadwal Kompleks**: Pengaturan dosis yang fleksibel dan mudah
✅ **Kepatuhan Pengobatan**: Tracking konsumsi untuk meningkatkan adherence

---

## 👥 Target Pengguna

### 🎯 Primary Users

**👴 Lansia**
- Memerlukan pengingat untuk rutinitas pengobatan
- Interface sederhana dan mudah digunakan

**🏥 Penderita Penyakit Kronis**
- Jadwal pengobatan rutin yang kompleks
- Multiple medications management

**🩹 Pasien Post-Operasi**
- Kepatuhan terhadap rejimen pengobatan
- Temporary medication schedules

### 🤝 Secondary Users

**👨‍👩‍👧‍👦 Pengasuh & Keluarga**
- Membantu mengelola pengobatan orang lain
- Remote monitoring capabilities

**👤 Pengguna Umum**
- Mengatur pengobatan lebih terorganisir
- Preventive health management

---

## ✨ Fitur Utama

### 💊 **Input Data Obat**
- Menambahkan obat baru dengan informasi lengkap
- Menyimpan nama obat, deskripsi, dan instruksi penggunaan
- Database obat yang terstruktur

### ⚖️ **Atur Dosis, Stok & Refill**
- Pengaturan jadwal dosis (harian, mingguan, kustom)
- Monitoring stok obat yang tersisa
- Pengingat otomatis untuk refill ketika stok menipis
- Flexible dosage configurations

### 🔔 **Pengingat Otomatis**
- Notifikasi tepat waktu untuk jadwal minum obat
- Konfirmasi "Sudah Minum" untuk tracking
- Smart notification system
- Customizable reminder sounds

### ⚙️ **Fitur Tambahan**
- Menghapus atau reset data obat
- Manajemen profil pengguna
- Mode gelap dan light theme
- Backup dan restore data

---

## 🛠️ Teknologi yang Digunakan

### 📱 **Platform & Language**
- **Platform**: Android 6.0+ (API 23+)
- **Language**: Java
- **IDE**: Android Studio

### 🏗️ **Architecture & Database**
- **Architecture**: Model-View-Controller (MVC)
- **Database**: SQLite (Local Storage)
- **Pattern**: Native Android Components

### 🔧 **Development Approach**
- **Framework**: Native Android (No external frameworks)
- **Design**: Material Design Guidelines
- **Notifications**: Android Notification Manager
- **Storage**: Shared Preferences + SQLite

---

## 🚀 Cara Menginstal dan Menjalankan

### 📋 **Persyaratan Sistem**
- **OS**: Android 6.0 (Marshmallow) atau lebih tinggi
- **Storage**: Minimal 100MB ruang penyimpanan bebas
- **Permissions**: Notification access, Storage access
- **Internet**: Optional (untuk fitur tertentu)

### ⚡ **Langkah Instalasi**

**1. Download APK**
```bash
# Clone repository
git clone https://github.com/Ervin1809/Project-Mobile-MedRemind.git

# Atau download langsung
# Kunjungi: https://github.com/Ervin1809/Project-Mobile-MedRemind/releases
```

**2. Instalasi**
```
📱 Buka file APK yang telah diunduh
🔐 Izinkan instalasi dari sumber tidak dikenal
📲 Ikuti petunjuk instalasi di layar
✅ Tunggu hingga instalasi selesai
```

**3. Konfigurasi Awal**
```
🚀 Buka aplikasi MedRemind
👤 Buat akun atau masuk sebagai tamu
🔔 Berikan izin notifikasi ketika diminta
⚙️ Selesaikan pengaturan profil awal
```

**4. Menambahkan Obat Pertama**
```
➕ Pilih navigation "addObat"
📝 Isi informasi obat yang diperlukan
⏰ Atur jadwal pengingat
💾 Simpan dan aktifkan pengingat
```

---

## 📱 Screenshots & Demo

### 🏠 Home & Dashboard

<table style="border-spacing: 15px; border-collapse: separate;">
<tr>
<td align="center">
<img src="/assets/img/home.png" alt="Dashboard" width="200"><br>
<b>Main Dashboard</b><br>
Daily medication overview and reminders
</td>
<td align="center">
<img src="/assets/img/obatDetail.png" alt="Medicine Details" width="200"><br>
<b>Medicine Details</b><br>
Detailed medicine information and dosage
</td>
</tr>
</table>

### 💊 Medicine Management

<table style="border-spacing: 15px;">
<tr>
<td align="center">
  <img src="/assets/img/addObat.png" alt="Add Medicine" width="200"><br>
  <b>Add Medicine</b><br>
  Simple medicine entry form
</td>
<td align="center">
  <img src="/assets/img/addObatHarian.png" alt="Daily Schedule" width="200"><br>
  <b>Daily Schedule</b><br>
  Set daily medication reminders
</td>
<td align="center">
  <img src="/assets/img/addObatMingguan.png" alt="Weekly Schedule" width="200"><br>
  <b>Weekly Schedule</b><br>
  Configure weekly medication schedule
</td>
</tr>
</table>

### 👤 Profile & Settings

<table>
<tr>
<td align="center">
<img src="/assets/img/profile.png" alt="Profile" width="200"><br>
<b>User Profile</b><br>
Personal information and app preferences
</td>
</tr>
</table>

---

## 💻 For Developers

### 🔧 **Development Setup**

```bash
# Clone repository
git clone https://github.com/Ervin1809/Project-Mobile-MedRemind.git
cd Project-Mobile-MedRemind

# Open with Android Studio
# File → Open → Select project folder
# Wait for Gradle sync to complete

# Build & Run
./gradlew assembleDebug
./gradlew installDebug
```

---

## 📈 Project Status

### ✅ **Implemented Features**
- [x] Medicine Database Management
- [x] Smart Notification System
- [x] Dosage & Schedule Configuration
- [x] Stock Monitoring & Refill Alerts
- [x] User Profile Management
- [x] Dark/Light Theme Support
- [x] Medicine Taking Confirmation
- [x] SQLite Local Storage

### 🚧 **Future Enhancements**

**Phase 1 - Core Improvements**
- [ ] Medicine Interaction Warnings
- [ ] Dosage History Analytics
- [ ] Export Health Reports
- [ ] Cloud Backup & Sync

**Phase 2 - Advanced Features**
- [ ] Barcode Medicine Scanner
- [ ] Doctor/Pharmacy Integration
- [ ] Family Member Monitoring
- [ ] Multi-language Support

**Phase 3 - Smart Features**
- [ ] AI-powered Adherence Insights
- [ ] Wearable Device Integration
- [ ] Voice Commands Support
- [ ] Telemedicine Integration

---

## 👨‍💻 Tim Pengembang

### 🎯 **Development Team**

| Name | Student ID | GitHub |
|------|------------|--------|
| **M. Ervin** | H071231050 | [@Ervin1809](https://github.com/Ervin1809) |
| **Frisilia Kiki** | H071231003 | [@frisiliakiki](https://github.com/frisiliakiki) |
| **Muhammad Dirga Dian Nugraha** | H071231039 | [@dirganugrah](https://github.com/dirganugrah) |
| **Jevon Ivander Thomas** | H071231067 | [@jevonivander](https://github.com/jevonivander) |
| **Imam Ahmad Mirza** | H071231082 | [@imamamirza](https://github.com/imamamirza) |

## 📞 Support & Contact

### Get Help

**[🐛 Bug Reports](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)** •
**[💡 Feature Requests](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues/new)** •
**[📖 Wiki](https://github.com/Ervin1809/Project-Mobile-MedRemind/wiki)**

### Project Links

- **Repository**: [MedRemind Project](https://github.com/Ervin1809/Project-Mobile-MedRemind)
- **Releases**: [Download APK](https://github.com/Ervin1809/Project-Mobile-MedRemind/releases)
- **Issues**: [Report Problems](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)

---

## 📄 Lisensi

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Ervin1809/Project-Mobile-MedRemind/blob/main/LICENSE) file for details.

---

**Made with ❤️ by Team MedRemind**

*Helping people maintain better medication adherence through smart reminders*

⭐ **[Star this project](https://github.com/Ervin1809/Project-Mobile-MedRemind)** if you find it useful!

---

*Last updated: June 22, 2025*
