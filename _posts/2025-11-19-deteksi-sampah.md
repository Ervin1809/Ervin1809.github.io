---
layout: post
title: "Peningkatan Deteksi Objek Kecil dalam Manajemen Sampah: Arsitektur YOLOv8 yang Dimodifikasi dengan P2 High-Resolution Head"
description: "Deteksi sampah otomatis menggunakan YOLOv8s-P2 untuk meningkatkan sensitivitas terhadap objek kecil dan tertutup dalam sistem Waste-to-Energy"
date: 2025-11-19
categories: Project
tags: [YOLOv8, deteksi-sampah, small-object-detection, deep-learning, computer-vision, waste-management, P2-head]
image: /assets/img/deepLearning/sampahDeteksi.png
author: M. Ervin
---

# Peningkatan Deteksi Objek Kecil dalam Manajemen Sampah: Arsitektur YOLOv8 yang Dimodifikasi dengan P2 High-Resolution Head

![Waste Detection System](/assets/img/deepLearning/sampahDeteksi.png)
*Sistem Deteksi Sampah YOLOv8s-P2 untuk Klasifikasi Organik dan Anorganik*

---

**Penulis:** M. Ervin (H071231050)  
**Afiliasi:** Departemen Sistem Informasi, Universitas Hasanuddin  
**Kontak:** ervinm23h@student.unhas.ac.id  
**Konferensi:** Research Symposium on Informatics and Computing (RSIC) 2025

**Kata Kunci:** YOLOv8, Deteksi Sampah, Small Object Detection, P2 Head, Deep Learning, Waste Management

---

## Abstrak

Akumulasi sampah yang cepat memerlukan sistem penyortiran otomatis yang efisien. Namun, model deteksi objek standar sering gagal mengidentifikasi sampah kecil, terkompresi, atau tertumpuk, menghasilkan missed detection yang signifikan (recall rendah). Penelitian ini mengusulkan **YOLOv8s-P2**, arsitektur modifikasi yang mengintegrasikan P2 detection head beresolusi tinggi (Stride 4) untuk meningkatkan sensitivitas terhadap target kecil dan terdeformasi. 

Menggunakan dataset menantang dari Roboflow dengan 4 kelas sampah, model dilatih untuk memaksimalkan ekstraksi fitur dari lapisan backbone tingkat rendah. Hasil eksperimen menunjukkan performa luar biasa dengan **Mean Average Precision (mAP50) sebesar 97,8%** dan **Recall sebesar 94,3%**. Khususnya, model mencapai recall sempurna (100%) untuk kelas sulit seperti botol anorganik terkompresi dan kulit buah organik. Temuan ini mengonfirmasi bahwa modifikasi P2-Head secara efektif mengatasi tantangan oklusi, menawarkan solusi robust untuk klasifikasi sampah real-time.

---

## 1. Pendahuluan

Pertumbuhan eksponensial limbah sampah menimbulkan tantangan lingkungan kritis secara global, khususnya di negara berkembang seperti Indonesia. Manajemen sampah yang efektif semakin bergantung pada pemisahan material yang presisi antara kategori organik dan anorganik - fundamental untuk proses downstream seperti Waste-to-Energy (WTE).

Penelitian terkini menunjukkan bahwa sistem deteksi otomatis menggunakan algoritma seperti YOLOv8 dapat menyederhanakan proses penyortiran ini, menawarkan alternatif yang robust terhadap tenaga kerja manual yang tidak efisien dan berbahaya. Namun, meskipun ada kemajuan dalam lightweight architectures (YOLOv8 Nano), teknik optimisasi (quantization), dan evolusi ke YOLO11, **keterbatasan kritis tetap ada**: ketidakmampuan mendeteksi objek kecil dan item dengan oklusi parah.

Dalam tumpukan sampah dunia nyata, item sering terkompresi, terdeformasi, atau tertutup sebagian. Arsitektur YOLO standar yang mengandalkan detection heads pada resolusi rendah (P3, P4, P5 dengan stride 8, 16, 32) sering gagal menangkap fitur fine-grained yang diperlukan. Ini menghasilkan **Recall rendah** - porsi signifikan sampah tidak terdeteksi.

Untuk mengatasi ini, penelitian ini mengusulkan **YOLOv8s-P2**, yang mengintegrasikan detection head keempat pada layer P2 (Stride 4). Ini memaksa model untuk memprioritaskan feature maps beresolusi tinggi dari layer C2 backbone, memastikan sistem memperhatikan target kecil yang terdeformasi yang biasanya difilter sebagai "noise" oleh arsitektur standar.

---

## 2. Metodologi

### 2.1 Kerangka Penelitian

Metodologi berfokus pada evaluasi dampak arsitektur P2 Head terhadap deteksi sampah. Workflow terdiri dari akuisisi data dari repositori publik, integrasi langsung arsitektur P2, dan pipeline training standar dengan preprocessing otomatis.

![Research Framework](/assets/img/deepLearning/flowchart.png)
*Alur kerja metodologi penelitian dari akuisisi data hingga evaluasi model*

### 2.2 Dataset

Dataset bersumber dari **Roboflow Universe** - koleksi menantang dari citra sampah yang dipilih khusus karena berisi item bertumpuk dan terkompresi. Dataset terdiri dari 4 kelas:

1. Anorganic-Bottle
2. Anorganic-Mask  
3. Organic-Fruit
4. Organic-Peel

Dataset digunakan dalam distribusi mentahnya tanpa re-balancing manual untuk mensimulasikan skenario deployment dunia nyata. Split: 80% training, 20% validasi.

![Dataset Labels](/assets/img/deepLearning/val_batch0_labels.jpg)
*Contoh ground truth labels dari dataset validasi menunjukkan 4 kelas sampah*

### 2.3 Arsitektur YOLOv8s-P2

YOLOv8s standar menggunakan konfigurasi 3-head (P3, P4, P5) dengan stride 8, 16, 32. Desain ini sering melewatkan detail pixel-level yang diperlukan untuk klasifikasi sampah terkompresi.

**Modifikasi:** Kami menambahkan **P2 High-Resolution Head** yang terhubung langsung ke layer C2 dari CSPDarknet backbone. Modul Detect akhir dikonfigurasi ulang untuk menerima 4 input: P2 (Stride 4), P3, P4, dan P5. Ini mengurangi minimum detection stride menjadi 4 piksel, memaksa model memprioritaskan fitur fine-grained dan detail tekstur yang diabaikan model standar.

### 2.4 Training Setup

- **Input**: Gambar otomatis di-resize ke 640×640 piksel
- **Augmentasi**: Mosaic, scale jitter, flipping (on-the-fly)
- **Hyperparameters**: 100 epochs, Batch Size 16, SGD Optimizer
- **Hardware**: Workstation lokal dengan GPU acceleration

### 2.5 Metrik Evaluasi

Metrik utama adalah **Recall** (sensitivitas terhadap objek kecil/tertutup) dan **mAP@50**. Kami juga menggunakan **Confusion Matrix** untuk analisis misklasifikasi per-kelas.

---

## 3. Hasil dan Pembahasan

### 3.1 Performa Kuantitatif

Model YOLOv8s-P2 menunjukkan performa kuantitatif luar biasa:

| **Kelas** | **Precision** | **Recall** | **mAP50** | **mAP50-95** |
|-----------|---------------|------------|-----------|--------------|
| **Semua Kelas** | **0.977** | **0.943** | **0.978** | **0.846** |
| Anorganic-Bottle | 0.984 | **1.000** | 0.995 | 0.860 |
| Anorganic-Mask | 0.956 | 0.890 | 0.934 | 0.713 |
| Organic-Fruit | 1.000 | 0.882 | 0.989 | 0.948 |
| Organic-Peel | 0.967 | **1.000** | 0.995 | 0.863 |

Metrik ini mengindikasikan peningkatan substansial dibanding model lightweight baseline yang biasanya struggle dengan recall di lingkungan kompleks.

### 3.2 Stabilitas Training

Proses training menunjukkan konvergensi stabil tanpa tanda overfitting. Box Loss dan Classification Loss menurun konsisten, sementara metrik mAP meningkat signifikan dan stabil sekitar epoch ke-90.

![Training Results](/assets/img/deepLearning/results.png)
*Kurva training menunjukkan konvergensi Box Loss dan peningkatan mAP selama 100 epochs*

### 3.3 Analisis Error (Confusion Matrix)

Confusion Matrix menunjukkan misklasifikasi minimal antara kelas organik dan anorganik. Error minor teramati terutama antara tekstur yang secara visual mirip di background kompleks, tetapi density diagonal keseluruhan mengonfirmasi kapabilitas diskriminasi model yang robust.

![Confusion Matrix](/assets/img/deepLearning/confusion_matrix.png)
*Confusion Matrix menampilkan akurasi klasifikasi yang tinggi di seluruh 4 kelas dengan minimal error*

### 3.4 Analisis Kualitatif

Hasil kualitatif mengonfirmasi efektivitas P2 Head:

![Prediction Results 1](/assets/img/deepLearning/val_batch0_pred.jpg)
*Hasil prediksi batch 1: Model berhasil mendeteksi botol terkompresi dan kulit buah yang bertumpuk*

![Prediction Results 2](/assets/img/deepLearning/val_batch1_pred.jpg)
*Hasil prediksi batch 2: Deteksi robust pada berbagai kondisi pencahayaan dan oklusi*

- **Deteksi Objek Kecil**: Model berhasil mendeteksi debris kecil yang menempati <5% area frame
- **Handling Oklusi**: Item yang tumpang tindih (misal kulit di bawah botol) dibatasi dengan benar dengan confidence score tinggi
- **Ketahanan Deformasi**: Botol terkompresi yang kehilangan bentuk silinder original tetap diidentifikasi dengan 100% Recall

---

## 4. Kesimpulan

Penelitian ini mengatasi keterbatasan kritis model deteksi objek standar dalam mengidentifikasi item sampah kecil dan tertutup. Dengan merekayasa ulang arsitektur YOLOv8s untuk menyertakan **P2 High-Resolution Head**, kami berhasil menggeser fokus model ke ekstraksi fitur fine-grained.

Hasil eksperimen memvalidasi efektivitas pendekatan ini: mAP50 **97,8%** dan Recall **94,3%**. Khususnya, model menunjukkan ketahanan luar biasa dalam menangani objek terdeformasi, mencapai **100% Recall** untuk kelas menantang seperti botol anorganik terkompresi dan kulit organik flat.

Temuan ini mengonfirmasi bahwa memproses feature maps pada stride lebih rendah (Stride 4) esensial untuk mengatasi fenomena "missed detection" dalam tumpukan sampah padat. Konsekuensinya, YOLOv8s-P2 yang diusulkan menawarkan solusi presisi tinggi yang viable untuk sistem penyortiran Waste-to-Energy otomatis.

**Penelitian Masa Depan:** Fokus pada penerapan teknik quantization untuk deploy arsitektur ini pada edge devices seperti Raspberry Pi tanpa mengorbankan sensitivitas deteksi superior.

---

## Referensi

[1] Y. Arvio, et al. (2025). "Implementation of YOLO V8 Algorithm in Organic and Anorganic Waste Detection." *Jurnal E-Komtek*, 9(1).

[2] D. Vieria, et al. (2024). "Enhancing Waste Classification with YOLOv8 Models." *Procedia Computer Science*, 245.

[3] I. Shukhratov, et al. (2024). "Optical detection of plastic waste through computer vision." *Intelligent Systems with Applications*, 22.

[4] N. Marwah & A. Chowanda (2025). "A study of YOLOv11s for household waste detection." *Procedia Computer Science*, 269.

[5] B. Chen, et al. (2025). "An Improved YOLOv8 Approach for Small Target Detection of Rice Spikelet." *arXiv:2507.20506*.

---

*Penelitian ini merupakan bagian dari mata kuliah RSIC 2025, Universitas Hasanuddin. Dataset: Roboflow Universe.*

---
