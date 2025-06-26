---
layout: default
title: Data Mining - Model Prediksi
description: Pengembangan Model Prediksi Harga Sewa Kos Di Makassar
date: 2025-06-13
categories: Project
tags: [Python, XGBoost Regressor, Scikit-Learn, Geopy, Matplotlib, Seaborn, Selenium, Pandas, Numpy]
---

# Pengembangan Model Prediksi Harga Sewa Kos di Makassar Menggunakan Teknik Data Mining

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Deskripsi Proyek

Proyek ini mengembangkan model prediksi harga sewa kos di Kota Makassar menggunakan teknik data mining dan machine learning. Model ini bertujuan untuk membantu pemilik properti dalam menetapkan harga sewa yang objektif dan kompetitif berdasarkan analisis data.

### 🎯 Tujuan Penelitian
- Mengidentifikasi faktor-faktor yang mempengaruhi harga sewa kos di Makassar
- Membangun model prediksi yang akurat menggunakan teknik data mining
- Mengembangkan prototipe alat bantu keputusan untuk pemilik properti

## 🏆 Hasil Utama

- **Model Terbaik**: XGBoost Regressor
- **Mean Absolute Error (MAE)**: Rp 219.420
- **R-squared (R²)**: 0.606 (60.6% variasi harga dapat dijelaskan)
- **Faktor Penentu Utama**: AC, Kloset Duduk, Tipe Campur, Lokasi

## 📊 Dataset

- **Sumber Data**: Web scraping dari Mamikos.com
- **Jumlah Data Awal**: 1,162 listing
- **Data Final**: 562 listing unik (setelah pembersihan duplikasi)
- **Cakupan**: Seluruh Kota Makassar

### Fitur Dataset:
- Harga sewa bulanan
- Lokasi (kecamatan)
- Tipe kos (putra, putri, campur)
- Fasilitas yang tersedia
- Jarak ke kampus-kampus utama

## 🛠️ Teknologi yang Digunakan

### Bahasa Pemrograman
- **Python 3.8+**

### Library Utama
```python
# Data Manipulation & Analysis
pandas
numpy

# Machine Learning
scikit-learn
xgboost

# Geospatial Analysis
geopy

# Web Scraping
selenium

# Visualization
matplotlib
seaborn
```

## 📁 Struktur Proyek

```
kos-price-prediction/
│
├── data/
│   ├── raw/                    # Data mentah hasil scraping
│   ├── processed/              # Data yang sudah diproses
│   └── final/                  # Data final untuk modeling
│
├── notebooks/
│   ├── 01_data_collection.ipynb      # Web scraping
│   ├── 02_data_preprocessing.ipynb   # Preprocessing & EDA
│   ├── 03_feature_engineering.ipynb # Feature engineering
│   ├── 04_modeling.ipynb            # Model development
│   └── 05_evaluation.ipynb          # Model evaluation
│
├── src/
│   ├── data_collection.py      # Script web scraping
│   ├── preprocessing.py        # Data preprocessing
│   ├── feature_engineering.py  # Feature engineering
│   ├── models.py              # Model definitions
│   └── utils.py               # Utility functions
│
├── models/
│   ├── xgboost_model.pkl      # Model XGBoost terbaik
│   └── random_forest_model.pkl # Model Random Forest
│
├── dashboard/                  # Prototype dashboard
│   ├── app.py                 # Main dashboard application
│   └── static/                # Static files
│
├── requirements.txt           # Dependencies
├── README.md                 # Documentation
└── LICENSE                   # License file
```

## 📈 Metodologi

### 1. Pengumpulan Data
- Web scraping otomatis menggunakan Selenium
- Ekstraksi dari platform Mamikos.com
- Pengumpulan 1,162 listing awal

### 2. Preprocessing Data
- Pembersihan duplikasi data
- Penanganan missing values
- Konversi tipe data

### 3. Feature Engineering
- **Encoding Fasilitas**: MultiLabelBinarizer untuk fitur fasilitas
- **Encoding Tipe Kos**: One-Hot Encoding untuk kategori tipe kos
- **Fitur Spasial**: Perhitungan jarak Haversine ke kampus-kampus utama

### 4. Penanganan Outlier
- Metode Interquartile Range (IQR)
- Batas atas = Q3 + 1.5 × IQR
- Peningkatan signifikan performa setelah penanganan outlier

### 5. Model Development
- **Random Forest Regressor**
- **XGBoost Regressor** (Model Terbaik)
- Split data: 80% training, 20% testing

## 📊 Hasil Evaluasi

| Model | MAE (Rupiah) | RMSE (Rupiah) | R-squared |
|-------|--------------|---------------|-----------|
| Random Forest | 238,753 | 332,766 | 0.531 |
| **XGBoost** | **219,420** | **302,442** | **0.606** |

## 🔍 Feature Importance

Berdasarkan analisis XGBoost, 10 faktor teratas yang mempengaruhi harga:

1. **AC** (0.607) - Faktor dominan
2. **Kloset Duduk** (0.090)
3. **Tipe Kos Campur** (0.053)
4. **Lokasi Ujung Pandang** (0.041)
5. **WiFi**
6. **Akses 24 Jam**
7. **Kamar Mandi Dalam**
8. **Jarak ke Kampus**
9. **Kasur**
10. **Lokasi Rappocini**

## 🎯 Implikasi Praktis

### Untuk Pemilik Properti:
- Alat bantu penetapan harga objektif
- Panduan investasi fasilitas berdasarkan data
- Mengurangi risiko overpricing/underpricing

### Untuk Penelitian Lanjutan:
- Baseline model untuk pengembangan lebih lanjut
- Framework yang dapat diadaptasi untuk kota lain

## 🔮 Pengembangan Masa Depan

- [ ] Web scraping data yang lebih detail (luas kamar, foto properti)
- [ ] Dashboard interaktif dengan analisis SHAP
- [ ] Implementasi model Neural Network (MLP)
- [ ] Optimasi hyperparameter lebih ekstensif
- [ ] Integrasi data real-time dan analisis tren temporal

## 👥 Tim Peneliti

- **Muh. Tegar Adyaksa** - *Universitas Hasanuddin*
- **Athifah Nur Rahman MD** - *Universitas Hasanuddin*
- **M. Ervin** - *Universitas Hasanuddin*
- **Cholyn Sharon Enos** - *Universitas Hasanuddin*
- **Imam Ahmad Mirza** - *Universitas Hasanuddin*

## 🙏 Acknowledgments

Terima kasih kepada:
- **Dr. Eng. Supri Bin Hj. Amir, S.Si., M.Eng.**
- **Octavian, S.Si., M.Kom.**

Dosen pengampu mata kuliah Data Mining, Universitas Hasanuddin.

## 📚 Referensi

1. Al Hanif, F. I., et al. (2023). "The Effect of Campus Existence on Boarding House Rental Prices"
2. Christian, Y., & Herman (2023). "Rental Price Prediction of Boarding Houses in Batam City"
3. Fitri, E. (2023). "Analisis Perbandingan Metode Regresi untuk Prediksi Harga Rumah"
4. Wisnuadhi, B., & Setiawan, I. (2021). "Rekomendasi Fitur yang Mempengaruhi Harga Sewa"

---
