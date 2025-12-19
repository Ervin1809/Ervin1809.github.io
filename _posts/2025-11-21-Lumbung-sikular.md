---
layout: post
title: Lumbung Sirkular - API Ekonomi Sirkular
description: API REST untuk transformasi digital dalam ekonomi sirkular yang menghubungkan produsen limbah industri dengan pengolah limbah
date: 2025-11-21
categories: Project
tags: [Python, FastAPI, SQLModel, SQLite, JWT, API, Full-Stack, Circular-Economy, Sustainability, B2B]
image: /assets/img/lumbung-sikular/login.png
---

# Lumbung Sirkular - API Ekonomi Sirkular ♻️🌍

---

## 📋 Deskripsi Proyek

**Lumbung Sirkular** adalah Antarmuka Pemrograman Aplikasi (API) REST yang dirancang untuk mendukung transformasi digital dalam ekonomi sirkular. API ini berfungsi sebagai jembatan antar-bisnis yang menghubungkan penghasil limbah industri (Produsen) dengan pengolah limbah (Pendaur Ulang), dilengkapi dengan fitur pelacakan transaksi dan kalkulasi dampak lingkungan secara waktu nyata melalui **Dasbor Dampak**.

> 🏆 Dibuat untuk **Kompetisi Pengembangan Web UINIC 7.0 #2025**  
> 📌 **Tema:** "Membangun Solusi Web Berkelanjutan untuk Mendorong Transformasi Digital"

### 🎯 Tujuan Proyek
- Menjembatani hubungan antar-bisnis antara produsen dan pengolah limbah
- Meningkatkan transparansi dalam rantai pasok daur ulang
- Memberikan dampak nyata dalam pelacakan jejak lingkungan
- Mendukung ekonomi sirkular yang berkelanjutan

---

## 🛠️ Teknologi yang Digunakan

### 🔧 **Backend dan Framework**
- **Framework**: FastAPI (Berkinerja tinggi dengan dukungan asinkron)
- **ORM Basis Data**: SQLModel (SQLAlchemy + Pydantic)
- **Mesin Basis Data**: SQLite (Pengembangan)
- **Bahasa Pemrograman**: Python 3.9 atau lebih tinggi

### 🔐 **Keamanan dan Autentikasi**
- **Sistem Autentikasi**: JWT (Token Web JSON)
- **Enkripsi Kata Sandi**: Hashing Bcrypt
- **Kontrol Akses Berbasis Peran**: Produsen dan Pendaur Ulang

### 📚 **Dokumentasi API**
- **Swagger UI**: Dokumentasi interaktif yang dibuat secara otomatis
- **ReDoc**: Dokumentasi alternatif dengan tampilan responsif

---

## ✨ Fitur Unggulan

### 🌍 **1. Pelacak Dampak Waktu Nyata**
Berbeda dengan pasar daring pada umumnya, Lumbung Sirkular menghitung metrik keberlanjutan seperti "Total Kilogram Terolah" dan "Estimasi Jejak Karbon yang Berkurang" secara otomatis berdasarkan data transaksi yang telah diselesaikan.

![Dashboard Impact](/assets/img/lumbung-sikular/dashboard.png)
*Dasbor untuk melacak dampak lingkungan secara waktu nyata*

### 🔗 **2. Ketertelusuran Menyeluruh**
Setiap limbah memiliki status perjalanan yang jelas: `tersedia` → `dipesan` → `selesai`. Sistem ini memastikan transparansi dalam rantai pasok daur ulang dari produsen hingga pengolah.

![Katalog Limbah](/assets/img/lumbung-sikular/katalog.png)
*Katalog limbah dengan status yang jelas dan terperinci*

### 🏢 **3. Pasar Terfokus Antar-Bisnis**
Dirancang khusus untuk volume besar seperti limbah industri dan restoran yang memberikan dampak lingkungan lebih signifikan dibandingkan limbah rumah tangga eceran.

![Halaman Recycler](/assets/img/lumbung-sikular/homeRcy.png)
*Tampilan halaman untuk pendaur ulang dalam menjelajah katalog limbah*

---

## 📸 Tangkapan Layar

### 🔐 **Masuk dan Pendaftaran**
![Login Page](/assets/img/lumbung-sikular/login.png)
*Halaman masuk dengan sistem autentikasi Token Web JSON*

![Register Page](/assets/img/lumbung-sikular/register.png)
*Halaman pendaftaran dengan pilihan peran sebagai Produsen atau Pendaur Ulang*

---

## ⚙️ Instalasi dan Penggunaan

### 📦 **Prasyarat**
- Python versi 3.9 atau lebih tinggi
- pip (pengelola paket Python)
- Git (sistem kontrol versi)

### 🚀 **Langkah-langkah Instalasi**

#### **1. Masuk ke Direktori Backend**
```bash
cd backend
```

#### **2. Buat dan Aktifkan Lingkungan Virtual**

**Untuk Windows:**
```bash
python -m venv venv
.\venv\Scripts\activate
```

**Untuk macOS atau Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

> 💡 **Catatan:** Jika berhasil mengaktifkan lingkungan virtual, akan muncul tulisan `(venv)` di awal baris terminal Anda

#### **3. Instal Paket Dependensi**
```bash
pip install -r requirements.txt
```

#### **4. Menjalankan Server**
```bash
uvicorn app.main:app --reload
```

✅ Server akan berjalan di alamat: `http://127.0.0.1:8000`  
📚 Dokumentasi API dapat diakses di: `http://127.0.0.1:8000/docs`

---

## 🤝 Panduan Pengembangan Kolaboratif

Untuk menjaga kestabilan kode di cabang utama (`main`), **hindari melakukan push langsung ke main**. Gunakan alur kerja Git berikut:

### **1. Mengambil Kode Terbaru**
```bash
git checkout main
git pull origin main
```

### **2. Membuat Cabang Baru**
Gunakan penamaan yang jelas dan deskriptif seperti: `backend`, `frontend`, atau `fitur/nama-fitur`
```bash
git checkout -b backend
```

### **3. Melakukan Perubahan dan Commit**
Setelah selesai melakukan perubahan kode:
```bash
git add .
git commit -m "Menambahkan tabel pengguna dan limbah"
```

### **4. Mengunggah ke Cabang Anda**
```bash
git push -u origin backend
```

### **5. Membuat Permintaan Penarikan (Pull Request)**
- Buka repositori di GitHub
- Buat **Permintaan Penarikan** dari cabang Anda ke cabang `main`
- Minta rekan tim untuk melakukan tinjauan kode sebelum penggabungan

---

## 🛡️ Keamanan dan Pengabaian Berkas

Berkas `.gitignore` telah dikonfigurasi untuk mencegah berkas-berkas sensitif terunggah ke repositori:

<pre>
# Lingkungan Virtual
venv/
env/
.venv/
sirkular_env/

# Basis Data Lokal
*.db
*.sqlite3
backend/*.db

# Berkas Cache Python
__pycache__/
*.pyc
.env
</pre>

---

## 🔌 Dokumentasi API

Dokumentasi API dapat diakses secara interaktif melalui antarmuka Swagger UI di alamat: `http://127.0.0.1:8000/docs`

### 🔐 **A. Autentikasi (`/auth`)**

| Metode | Titik Akhir | Deskripsi |
|--------|-------------|-----------|
| `POST` | `/auth/register` | Mendaftarkan akun baru (Pilih peran: `produsen` atau `pendaur-ulang`) |
| `POST` | `/auth/login` | Masuk ke sistem dan mendapatkan **Token JWT** |

### 📦 **B. Pengelolaan Limbah (`/wastes`)**

| Metode | Titik Akhir | Deskripsi | Hak Akses |
|--------|-------------|-----------|-----------|
| `POST` | `/wastes/` | Mengunggah data limbah baru | Produsen |
| `GET` | `/wastes/` | Melihat katalog limbah yang tersedia | Publik |
| `GET` | `/wastes/me` | Melihat daftar limbah milik saya | Produsen |

**Contoh Isi Permintaan untuk Mengunggah Limbah:**

```json
{
  "title": "Minyak Jelantah 20 Liter",
  "category": "Minyak",
  "weight": 20.5,
  "price": 50000,
  "description": "Bekas penggorengan ayam, telah disaring dan siap didaur ulang."
}
```

### 💼 **C. Transaksi dan Dasbor Dampak (`/transactions`)**

| Metode | Titik Akhir | Deskripsi | Hak Akses |
|--------|-------------|-----------|-----------|
| `POST` | `/transactions/book/{id}` | Melakukan pemesanan limbah | Pendaur Ulang |
| `PATCH` | `/transactions/{id}/complete` | Mengonfirmasi penerimaan barang | Pendaur Ulang |
| `GET` | `/transactions/impact/me` | **Melihat Dasbor Dampak Lingkungan** | Semua Pengguna |

**Contoh Respons Dasbor Dampak:**

```json
{
  "user_name": "Bank Sampah Jaya",
  "role": "pendaur-ulang",
  "total_waste_managed_kg": 150.5,
  "co2_emissions_prevented_kg": 75.25,
  "message": "Data ini valid dan diperbarui secara waktu nyata berdasarkan transaksi yang telah diselesaikan."
}
```

---

## 📊 Struktur Basis Data

### **1. Tabel Pengguna (Users)**
Menyimpan data pengguna dengan sistem Kontrol Akses Berbasis Peran (RBAC).

**Atribut Utama:**
- `id`: Kunci utama (primary key)
- `email`: Alamat surel pengguna (bersifat unik)
- `password`: Kata sandi yang dienkripsi menggunakan Bcrypt
- `role`: Menentukan peran pengguna sebagai **Produsen** (Penghasil Limbah) atau **Pendaur Ulang** (Pengolah Limbah)
- `name`: Nama lengkap pengguna
- `created_at`: Waktu pembuatan akun

### **2. Tabel Limbah (Wastes)**
Katalog limbah yang tersedia dalam sistem.

**Atribut Utama:**
- `id`: Kunci utama (primary key)
- `title`: Judul atau nama limbah
- `category`: Kategori limbah (Minyak, Plastik, Organik, dan lain-lain)
- `weight`: Berat limbah dalam kilogram (sangat penting untuk perhitungan dampak lingkungan)
- `price`: Harga limbah dalam rupiah
- `status`: Status ketersediaan limbah (`tersedia`, `dipesan`, `selesai`)
- `producer_id`: Kunci asing (foreign key) yang merujuk ke tabel Users
- `description`: Deskripsi rinci tentang limbah

### **3. Tabel Transaksi (Transactions)**
Mencatat riwayat transaksi dan perpindahan limbah dari produsen ke pendaur ulang.

**Atribut Utama:**
- `id`: Kunci utama (primary key)
- `waste_id`: Kunci asing (foreign key) yang merujuk ke tabel Wastes
- `recycler_id`: Kunci asing (foreign key) yang merujuk ke tabel Users (pendaur ulang)
- `booking_date`: Tanggal pemesanan
- `completion_date`: Tanggal penyelesaian transaksi
- `status`: Status transaksi

> 📈 Data dari tabel Transaksi menjadi sumber utama untuk perhitungan **Dasbor Dampak** yang menampilkan metrik keberlanjutan secara waktu nyata.

---

## 🎯 Kesimpulan

**Lumbung Sirkular** merupakan solusi aplikasi web berkelanjutan yang mendukung transformasi digital dalam ekonomi sirkular. Dengan menghubungkan produsen dan pengolah limbah melalui platform antar-bisnis yang transparan, sistem ini tidak hanya memfasilitasi transaksi, tetapi juga memberikan dampak nyata terhadap pelacakan jejak lingkungan.

### 🌟 **Dampak dan Manfaat Proyek**
- ♻️ Mendukung ekonomi sirkular yang berkelanjutan
- 🌍 Mengurangi dampak negatif terhadap lingkungan melalui daur ulang yang terorganisir
- 📊 Transparansi penuh dalam rantai pasok limbah dari hulu ke hilir
- 🤝 Memfasilitasi kolaborasi efektif antara produsen dan pengolah limbah
- 📈 Menyediakan data dampak lingkungan yang terukur dan dapat dipertanggungjawabkan

---

*Membangun Solusi Web Berkelanjutan untuk Mendorong Transformasi Digital* 🌍♻️
