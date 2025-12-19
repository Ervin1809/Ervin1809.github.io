---
layout: post
title: "Peningkatan Sistem Deteksi Kejang VSVIG: Studi Komparatif RTMPose dan OpenPose"
description: "Deteksi kejang otomatis menggunakan computer vision dengan perbandingan RTMPose dan OpenPose untuk sistem pemantauan pasien yang lebih andal"
date: 2025-10-27
categories: Project
tags: [deteksi-kejang, RTMPose, OpenPose, machine-learning, computer-vision, kesehatan, deep-learning, VSVIG, graph-neural-network]
image: /assets/img/RSIC/VSVIG.png
author: M. Ervin
---

# Peningkatan Sistem Deteksi Kejang VSVIG: Studi Komparatif RTMPose dan OpenPose

![VSVIG System](/assets/img/RSIC/VSVIG.png)
*Sistem Deteksi Kejang VSVIG - Arsitektur dan Implementasi*

---

**Penulis:** M. Ervin (H071231050)  
**Afiliasi:** Departemen Sistem Informasi, Universitas Hasanuddin  
**Kontak:** ervinm23h@student.unhas.ac.id  
**Konferensi:** Research Symposium on Informatics and Computing (RSIC) 2025

**Kata Kunci:** Deteksi Kejang, Kerangka Kerja VSVIG, RTMPose, OpenPose, Deep Learning, Graph Neural Networks

---

## Abstrak

Deteksi kejang otomatis menggunakan computer vision merupakan hal yang esensial untuk pemantauan pasien secara berkelanjutan dan intervensi medis yang tepat waktu. Namun, kerangka kerja yang ada seperti VSVIG yang mengandalkan arsitektur OpenPose, seringkali mengalami ketidakstabilan performa dan bias klasifikasi.

Penelitian ini bertujuan untuk meningkatkan sistem deteksi VSVIG dengan mengevaluasi **RTMPose** sebagai alternatif superior berkinerja tinggi untuk menggantikan OpenPose baseline. Dengan menggunakan pendekatan eksperimental kuantitatif, penelitian ini menganalisis pergeseran performa melalui Confusion Matrix, Kurva ROC, dan metrik stabilitas pelatihan.

Hasil penelitian menunjukkan bahwa implementasi RTMPose secara signifikan meningkatkan sistem, mencapai **akurasi global sebesar 80,88%** dibandingkan dengan baseline yang hanya **74,79%**. Analisis kritis mengungkapkan bahwa integrasi OpenPose sebelumnya mengalami overfitting yang parah, mencatat **spesifisitas sebesar 0,00%** dengan mengklasifikasikan salah semua gerakan normal sebagai kejang. Sebaliknya, integrasi RTMPose yang diusulkan menunjukkan generalisasi yang kuat dengan dinamika pelatihan yang stabil, mencapai **spesifisitas sebesar 41,99%** dan **sensitivitas sebesar 93,99%**.

Dapat disimpulkan bahwa penggantian OpenPose dengan RTMPose secara efektif mengatasi bias kelas dalam kerangka kerja VSVIG, menawarkan solusi yang lebih andal dan layak secara klinis untuk pemantauan kejang otomatis.

---

## 1. Pendahuluan

Epilepsi memengaruhi lebih dari 50 juta orang di seluruh dunia dengan risiko kritis berupa Sudden Unexpected Death in Epilepsy (SUDEP). Deteksi kejang berbasis computer vision menawarkan alternatif pemantauan tanpa kontak menggunakan **VSViG (Vision-based Spatiotemporal Graph Neural Network)**. Namun, implementasi existing yang menggunakan **OpenPose** mengalami masalah keypoint jitter yang menyebabkan tingginya false positive.

Penelitian ini mengusulkan integrasi **RTMPose**, model estimasi pose top-down yang lebih stabil, untuk menggantikan OpenPose dalam sistem VSViG. Tujuannya meningkatkan akurasi klasifikasi dengan mengurangi false positive tanpa mengorbankan sensitivitas deteksi kejang.

---

## 2. Tinjauan Pustaka

### 2.1 Model Ekstraksi Fitur

**OpenPose (Baseline):** Pendekatan bottom-up yang mendeteksi semua keypoint sekaligus menggunakan Part Affinity Fields. Kelemahan: rentan mengalami keypoint jitter yang menciptakan noise gerakan palsu.

**RTMPose (Usulan):** Pendekatan top-down berkinerja tinggi menggunakan YOLOX untuk deteksi bounding box, kemudian SimCC untuk estimasi pose dengan presisi tinggi. Keunggulan: stabilitas lebih tinggi dan tahan noise.

### 2.2 Model Klasifikasi VSViG

VSViG menggunakan ST-ViG (Spatiotemporal Vision Graph Neural Network) yang memodelkan tubuh sebagai graf dengan sendi sebagai node dan tulang sebagai edge. Memproses data melalui konvolusi graf spasial (analisis postur) dan konvolusi temporal (analisis gerakan 30 frame).

$$\text{Feature}_{\text{new}} = \text{ReLU}( \text{Conv}_{\text{temporal}}( \text{Conv}_{\text{spatial}}( \text{Graph} ) ) )$$

### 2.3 Gap Penelitian

VSViG original menggunakan OpenPose yang di-fine-tune khusus untuk dataset mereka. Masalahnya: (1) model "menghafal" dataset spesifik sehingga kurang generalisasi, (2) OpenPose standar menghasilkan jitter yang diinterpretasikan VSViG sebagai kejang, menyebabkan spesifisitas rendah.

**Posisi Penelitian:** Menyempurnakan VSViG dengan mengganti OpenPose (mata rantai terlemah) dengan RTMPose untuk mencapai performa lebih baik dengan alarm palsu lebih rendah.

---

## 3. Metodologi

### 3.1 Dataset

Dataset dari **Zhejiang University Hospital EMU**: 14 pasien, 33 kejadian kejang. Dikategorikan menjadi 3 fase: Interictal (Normal), Pre-ictal (Transisi), Ictal (Kejang). Partisi: 70% training, 15% validasi, 15% testing.

### 3.2 Pipeline Penelitian

1. **Segmentasi Video**: Memotong video berkelanjutan berdasarkan timestamp anotasi klinis
2. **Ekstraksi Fitur**: 
   - **RTMPose**: Deteksi 18 keypoint anatomis → ekstraksi patch visual di sekitar setiap sendi
   - **OpenPose**: Baseline untuk perbandingan
3. **Pelatihan Model**: VSViG dengan custom Sliding Window Data Loader (30-frame clips, stride 15) dan Lazy Loading untuk efisiensi memori
4. **Evaluasi**: Confusion Matrix, Sensitivitas, Spesifisitas, Akurasi

### 3.3 Konfigurasi

- **Hardware**: Intel Core i7, NVIDIA RTX, 16GB RAM
- **Framework**: PyTorch, MMPose
- **Training**: MSELoss, Adam Optimizer, 30 epochs

### 3.4 Metrik Evaluasi

$$\text{Sensitivity} = \frac{TP}{TP + FN}, \quad \text{Specificity} = \frac{TN}{TN + FP}, \quad \text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$

---

## 4. Hasil dan Pembahasan

### 4.1 Hasil Penelitian

![Confusion Matrices](/assets/img/RSIC/Confusion_matrix.png)
![Performance Comparison](/assets/img/RSIC/Perbandingan_performa.png)
![ROC Curve](/assets/img/RSIC/ROC.png)

| **Metrik** | **RTMPose** | **OpenPose** |
|------------|-------------|---------------|
| Akurasi (%) | **80,88** | 74,79 |
| Sensitivitas (%) | 93,99 | **100,00** |
| Spesifisitas (%) | **41,99** | **0,00** |
| Stabilitas | Stabil | Fluktuatif |

### 4.2 Pembahasan

**Kegagalan OpenPose:** Spesifisitas 0% menunjukkan *majority class overfitting* - model memprediksi semua data sebagai kejang karena high-frequency jitter pada keypoint membingungkan classifier VSViG.

**Keunggulan RTMPose:** (1) Representasi berbasis token menyaring noise, (2) Self-attention fokus pada pola diskriminatif, (3) Backbone transformer lebih tahan ketidakseimbangan data. Peningkatan spesifisitas dari 0% ke 41,99% mengurangi alarm palsu dan meningkatkan kepercayaan klinis.

**Keterbatasan:** Spesifisitas 41,99% masih moderat; dataset imbalance (5:1); perlu validasi lintas rumah sakit.

---

## 5. Kesimpulan

RTMPose berhasil menggantikan OpenPose dalam sistem VSViG dengan peningkatan signifikan:

1. **Akurasi meningkat** dari 74,79% menjadi 80,88%
2. **Spesifisitas meningkat drastis** dari 0% menjadi 41,99%, mengatasi *majority class overfitting* OpenPose
3. **Trade-off sensitivitas** (100% → 93,99%) dapat diterima secara klinis karena mengurangi alarm palsu

Penelitian memvalidasi bahwa ketidakstabilan keypoint OpenPose menyebabkan overfitting, dan arsitektur transformer RTMPose memberikan fitur lebih stabil untuk klasifikasi kejang.

---

## 6. Rekomendasi

1. **Mengatasi Data Imbalance**: Implementasi SMOTE/ADASYN, class weighting, dan ekspansi dataset gerakan normal
2. **Optimisasi Hyperparameter**: Grid search untuk learning rate, batch size, graph layers, dropout rate
3. **Validasi Real-World**: Testing lintas rumah sakit, deployment pada edge devices, dan evaluasi dengan neurolog

### 6.3 Real-World Testing

To validate the system's clinical viability:

- **Cross-Hospital Validation**: Test the model on epilepsy datasets from different hospitals to assess generalization.
- **Real-Time Deployment**: Implement the system on edge devices (e.g., Jetson Nano, Raspberry Pi) and evaluate real-time performance in simulated clinical environments.
- **Clinician Feedback**: Conduct user studies with neurologists to assess system usability, trust, and integration into clinical workflows.

---

---

## 7. Referensi

[1] World Health Organization (2024). *Epilepsy Fact Sheet*.  
[2] Nashef, L., et al. (2012). "Sudden unexpected death in epilepsy." *Epilepsia*, 53(6).  
[3] Kaleem, M., et al. (2023). "Automated Seizure Detection Using VSViG." *IEEE TNSRE*.  
[4] Cao, Z., et al. (2017). "OpenPose." *CVPR*.  
[5] Jiang, T., et al. (2023). "RTMPose." *arXiv:2303.07399*.  
[6] Yu, W., et al. (2022). "Vision GNN." *NeurIPS*, 35.

---

*Penelitian ini merupakan bagian dari mata kuliah RSIC 2025, Universitas Hasanuddin. Dataset: Zhejiang University Hospital EMU.*

---
