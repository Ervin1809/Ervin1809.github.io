---
layout: post
title: Data Mining - Model Prediksi
description: Pengembangan Model Prediksi Harga Sewa Kost di Makassar
date: 2025-06-13
categories: Project
tags: [Python, XGBoost Regressor, Scikit-Learn, Geopy, Matplotlib, Seaborn, Selenium, Pandas, Numpy]
image: /assets/img/dataMining/dataMining.png
---

# Pengembangan Model Prediksi Harga Sewa Kost di Makassar Menggunakan Teknik Data Mining

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)

## 📋 Deskripsi Proyek

Proyek ini mengembangkan model prediksi harga sewa kost di Kota Makassar menggunakan teknik data mining dan pembelajaran mesin. Model ini bertujuan untuk membantu pemilik properti menetapkan harga sewa yang objektif dan kompetitif berdasarkan analisis data.

### 🎯 Tujuan Penelitian
- Mengidentifikasi faktor-faktor yang mempengaruhi harga sewa kost di Makassar
- Membangun model prediksi yang akurat menggunakan teknik data mining
- Mengembangkan prototipe alat pendukung keputusan bagi pemilik properti

## 🏆 Hasil Utama

- **Model Terbaik:** XGBoost Regressor
- **Mean Absolute Error (MAE):** Rp 219.420
- **R-squared (R²):** 0,606 (60,6% varians harga dapat dijelaskan)
- **Penentu Utama:** AC, Toilet Duduk, Tipe Campur, Lokasi

## 📊 Dataset

- **Sumber Data:** Web scraping dari Mamikos.com
- **Jumlah Data Awal:** 1.162 listing
- **Data Akhir:** 562 listing unik (setelah deduplikasi)
- **Cakupan:** Seluruh kecamatan di Kota Makassar

### Fitur Dataset:
- Harga sewa bulanan
- Lokasi (kecamatan)
- Tipe kost (putra, putri, campur)
- Fasilitas yang tersedia
- Jarak ke kampus utama

## 🛠️ Teknologi yang Digunakan

### Bahasa Pemrograman
- **Python 3.8+**

### Library Utama
<pre>
# Manipulasi & Analisis Data
pandas
numpy

# Pembelajaran Mesin
scikit-learn
xgboost

# Analisis Geospasial
geopy

# Web Scraping
selenium

# Visualisasi
matplotlib
seaborn
</pre>

## 📁 Struktur Proyek

<pre>
kos-price-prediction/
│
├── data/
│   ├── raw/                    # Data mentah hasil scraping
│   ├── processed/              # Data yang telah diproses
│   └── final/                  # Data akhir untuk pemodelan
│
├── notebooks/
│   ├── 01_data_collection.ipynb      # Web scraping
│   ├── 02_data_preprocessing.ipynb   # Preprocessing & EDA
│   ├── 03_feature_engineering.ipynb  # Rekayasa fitur
│   ├── 04_modeling.ipynb             # Pengembangan model
│   └── 05_evaluation.ipynb           # Evaluasi model
│
├── src/
│   ├── data_collection.py      # Skrip web scraping
│   ├── preprocessing.py        # Preprocessing data
│   ├── feature_engineering.py  # Rekayasa fitur
│   ├── models.py               # Definisi model
│   └── utils.py                # Fungsi utilitas
│
├── models/
│   ├── xgboost_model.pkl       # Model XGBoost terbaik
│   └── random_forest_model.pkl # Model Random Forest
│
├── dashboard/                  # Prototipe dashboard
│   ├── app.py                  # Aplikasi dashboard utama
│   └── static/                 # Berkas statis
│
├── requirements.txt            # Dependensi
├── README.md                   # Dokumentasi
└── LICENSE                     # Berkas lisensi
</pre>

## 📈 Metodologi

### 1. Pengumpulan Data
- Web scraping otomatis menggunakan Selenium
- Ekstraksi dari platform Mamikos.com
- Mengumpulkan 1.162 listing awal

### 2. Preprocessing Data
- Penghapusan duplikat
- Penanganan nilai yang hilang
- Konversi tipe data

### 3. Rekayasa Fitur
- **Encoding Fasilitas:** MultiLabelBinarizer untuk fitur fasilitas
- **Encoding Tipe Kost:** One-Hot Encoding untuk kategori tipe
- **Fitur Spasial:** Perhitungan jarak Haversine ke kampus utama

### 4. Penanganan Outlier
- Metode Interquartile Range (IQR)
- Batas atas = Q3 + 1,5 × IQR
- Peningkatan performa signifikan setelah penanganan outlier

### 5. Pengembangan Model
- **Random Forest Regressor**
- **XGBoost Regressor** (Model Terbaik)
- Pembagian data: 80% pelatihan, 20% pengujian

## 📊 Hasil Evaluasi

| Model           | MAE (Rupiah) | RMSE (Rupiah) | R-squared |
|-----------------|--------------|---------------|-----------|
| Random Forest   | 238.753      | 332.766       | 0,531     |
| **XGBoost**     | **219.420**  | **302.442**   | **0,606** |

## 🔍 Kepentingan Fitur

Berdasarkan analisis XGBoost, 10 faktor teratas yang mempengaruhi harga sewa adalah:

1. **AC** (0,607) - Faktor dominan
2. **Toilet Duduk** (0,090)
3. **Tipe Kost Campur** (0,053)
4. **Lokasi Ujung Pandang** (0,041)
5. **WiFi**
6. **Akses 24 Jam**
7. **Kamar Mandi Dalam**
8. **Jarak ke Kampus**
9. **Kasur**
10. **Lokasi Rappocini**

## 🎯 Implikasi Praktis

### Bagi Pemilik Properti:
- Alat pendukung keputusan penetapan harga yang objektif
- Panduan investasi fasilitas berbasis data
- Mengurangi risiko penetapan harga terlalu tinggi/rendah

### Untuk Penelitian Lanjutan:
- Model dasar untuk pengembangan masa depan
- Kerangka kerja yang dapat diadaptasi untuk kota lain

## 🔮 Pengembangan Masa Depan

- [ ] Web scraping yang lebih detail (ukuran kamar, foto properti)
- [ ] Dashboard interaktif dengan analisis SHAP
- [ ] Implementasi model Neural Network (MLP)
- [ ] Optimasi hyperparameter yang lebih ekstensif
- [ ] Integrasi data waktu nyata dan analisis tren temporal

## 👥 Tim Peneliti

- **Muh. Tegar Adyaksa** - *Universitas Hasanuddin*
- **Athifah Nur Rahman MD** - *Universitas Hasanuddin*
- **M. Ervin** - *Universitas Hasanuddin*
- **Cholyn Sharon Enos** - *Universitas Hasanuddin*
- **Imam Ahmad Mirza** - *Universitas Hasanuddin*

## 🙏 Ucapan Terima Kasih

Terima kasih kepada:
- **Dr. Eng. Supri Bin Hj. Amir, S.Si., M.Eng.**
- **Octavian, S.Si., M.Kom.**

Dosen mata kuliah Data Mining, Universitas Hasanuddin.

## 📚 Referensi

1. Al Hanif, F. I., et al. (2023). "Pengaruh Keberadaan Kampus terhadap Harga Sewa Kost"
2. Christian, Y., & Herman (2023). "Prediksi Harga Sewa Kost di Kota Batam"
3. Fitri, E. (2023). "Analisis Komparatif Metode Regresi untuk Prediksi Harga Rumah"
4. Wisnuadhi, B., & Setiawan, I. (2021). "Rekomendasi Fitur yang Mempengaruhi Harga Sewa"

---
