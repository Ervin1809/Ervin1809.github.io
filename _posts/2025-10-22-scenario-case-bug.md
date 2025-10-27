---
layout: post # atau 'page', 'default', tergantung tema Jekyll Anda
title: "Test Scenario, Test Case, dan Bug Report"
date: 2025-10-27 # Ganti dengan tanggal Anda
categories: [tugas, kuliah, rpl]
tags: [testing, scenario, test case, bug report, kelompok 4]
author: Kelompok 4
image : /assets/img/ppt4/slide-2-anggota.png
---

# Test Scenario, Test Case, dan Bug Report

![Foto Anggota Kelompok 4](/assets/img/ppt4/slide-2-anggota.png)

<!-- * H071231006 - SISY RAMADHANI
* H071231024 - ILHAM KURNIAWAN
* H071231031 - MUH. NAUFAL FAHRI SALIM
* H071231041 - A. TASDIK BIJAKSANA
* H071231053 - FATHAN WIBOWO
* H071231070 - KEZIA DEWANTI PUTRI AYU TAPPI
* H071231082 - IMAM AHMAD MIRZA
* H071231084 - KHALIKA TSABITAH MALIK -->

---

## Overview

Test scenario, test case, dan bug report adalah tiga elemen penting dalam proses *Software Quality Assurance (SQA)*.

1.  **Test Scenario:**
    Gambaran umum apa yang diuji untuk memastikan fungsi aplikasi sesuai kebutuhan.
2.  **Test Case:**
    Langkah detail pengujian, termasuk input, proses, dan hasil yang diharapkan.
3.  **Bug Report:**
    Laporan kesalahan aplikasi, berisi detail masalah, cara mereproduksi, dan hasil aktual.

---

## 01. Test Scenario

**Test Scenario** adalah sebuah gambaran umum (*high-level*) tentang apa yang perlu diuji.

* Ini adalah fungsionalitas *end-to-end* yang perlu divalidasi.
* Fokusnya lebih pada **"Apa yang diuji?"** (*What to test?*) daripada "Bagaimana cara mengujinya?" (*How to test?*).
* **Analogi:** Test Scenario adalah **Daftar Isi** dari sebuah buku.

### Contoh Format Test Scenario (Aplikasi Login)

| Scenario ID | Scenario Name | Test Case ID |
| :--- | :--- | :--- |
| SC-001 | Verifikasi Fungsionalitas Login | TC-001, TC-002, TC-003 |
| SC-002 | Verifikasi Tombol "Lupa Password" | TC-004 |

---

## 02. Test Case

**Test Case** adalah sebuah dokumen yang berisi serangkaian langkah (*step-by-step*) yang sangat detail untuk mengeksekusi pengujian.

* Setiap Test Case dirancang untuk memverifikasi satu perilaku spesifik dari sebuah fungsionalitas.
* Fokusnya lebih rinci dan menjawab **"Bagaimana cara mengujinya?"** (*How to test?*).
* **Analogi:** Jika Test Scenario adalah "Daftar Isi", maka Test Case adalah **Buku Panduannya** (isi dari setiap bab).

### Contoh Format Test Case (TC-001)

Bagian ini mendeskripsikan metadata dari Test Case:

| Atribut | Keterangan |
| :--- | :--- |
| **Test Case ID** | TC-001 |
| **Test Scenario ID**| SC-001 (Merujuk ke "Verifikasi Fungsionalitas Login") |
| **Test Title** | Login dengan username dan password valid |
| **Pre-condition** | User berada di halaman login dan memiliki akun |

Bagian ini merinci langkah-langkah pengujiannya:

| Step | Test Data | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| 1. Input username | `user_valid` | Username terisi | | |
| 2. Input password | `pass_valid` | Password terisi | | |
| 3. Klik tombol "Login" | - | User berhasil login & diarahkan ke Dashboard | | |

---

## 03. Bug Report

![Diagram alur Bug Life Cycle](/assets/img/ppt4/bug-life-cycle.png)
**Bug Report** adalah laporan rinci tentang masalah (*bug*) yang ditemukan selama proses pengujian.

* **Tujuan:** Memberikan informasi yang jelas kepada developer agar mereka dapat memahami, mereproduksi, dan memperbaiki *bug* tersebut.
* **Komponen Utama:**
    * **Bug Title:** Judul yang singkat dan jelas.
    * **Description/Steps to Reproduce:** Langkah-langkah untuk memunculkan *bug* kembali.
    * **Severity:** Seberapa besar dampak *bug* tersebut.
    * **Priority:** Seberapa cepat *bug* tersebut harus diperbaiki.

### Bug Life Cycle

Siklus hidup *bug* adalah serangkaian status yang dilalui *bug* dari pertama kali ditemukan hingga berhasil ditutup.


* **New:** *Bug* baru dilaporkan oleh tester.
* **Assigned:** *Bug* ditugaskan ke developer.
* **Open:** Developer mulai menganalisis dan memperbaiki *bug*.
* **Fixed:** Developer telah selesai memperbaiki *bug*.
* **Retest:** Tester menguji ulang apakah *bug* sudah benar-benar hilang.
* **Reopened:** Jika *bug* masih ada, status dikembalikan (Reopened) dan ditugaskan lagi ke developer.
* **Closed:** Jika *bug* sudah terkonfirmasi hilang, status ditutup.

---

## Perbedaan Severity & Priority

### Severity (Keparahan)
* Mengukur **seberapa besar dampak** *bug* terhadap fungsionalitas aplikasi.
* Ditentukan oleh **Tester/QA**.
* **Fokus:** Dampak teknis dan fungsional.
* **Kategori Severity:**
    * **Critical (Blocker):** Aplikasi *crash*, *freeze*, atau data hilang. Fungsionalitas utama tidak bisa digunakan sama sekali.
    * **Major (High):** Fungsionalitas utama tidak berjalan sebagaimana mestinya, tapi ada *workaround* (jalan lain).
    * **Medium:** Fungsionalitas minor tidak berjalan, atau ada masalah UI/UX yang mengganggu.
    * **Low:** Masalah kosmetik (salah ketik/typo, warna tidak sesuai) atau *bug* yang dampaknya sangat kecil.

### Priority (Prioritas)
* Mengukur **seberapa cepat *bug*** tersebut harus diperbaiki.
* Ditentukan oleh **Project Manager/Product Owner**.
* **Fokus:** Dampak bisnis dan urgensi rilis.
* **Kategori Priority:**
    * **P1 - Urgent:** Harus segera diperbaiki, seringkali dalam 24 jam. Menghalangi rilis.
    * **P2 - High:** *Bug* kritis yang harus masuk dalam *sprint* atau rilis berikutnya.
    * **P3 - Medium:** *Bug* yang bisa diperbaiki di siklus rilis berikutnya. Tidak memengaruhi fungsionalitas inti.
    * **P4 - Low:** *Bug* minor atau kosmetik yang bisa diperbaiki kapan saja jika ada waktu.

---

## Contoh Format Bug Report (Aplikasi BMI)

Ini adalah contoh pengisian Bug Report berdasarkan skenario aplikasi BMI.

| Atribut | Keterangan |
| :--- | :--- |
| **Bug Title** | Perhitungan BMI salah saat input berat 60kg dan tinggi 170cm |
| **Bug ID** | BMI-001 |
| **Step to reproduce** | 1. Buka aplikasi BMI<br>2. Masukkan Berat = 60<br>3. Masukkan Tinggi = 170<br>4. Klik tombol "Hitung" |
| **Actual Result** | Hasil BMI = 12.5 |
| **Expected Result** | Hasil BMI seharusnya = 20.8 |
| **Build Number** | Version 1.0.0 |
| **Severity** | **Major (High)** (Karena fungsionalitas inti, yaitu perhitungan, salah) |
| **Priority** | **P2 - High** (Harus segera diperbaiki sebelum rilis) |
| **Assignee** | Developer |
| **Reporter** | SQA (Software Quality Assurance) |
| **Reported on** | 31-08-2025 |
| **Testing on** | Android |

---

## Cara Menghindari Bug

1.  **Pahami Persyaratan**
    Pastikan semua persyaratan dipahami dengan jelas oleh seluruh tim.
2.  **Unit Testing**
    Lakukan pengujian unit untuk mendeteksi *bug* di tahap awal pengembangan.
3.  **Code Review**
    Minta pengembang lain meninjau kode untuk menemukan kesalahan.
4.  **Rencana Pengujian**
    Membuat Test Plan, Test Scenario, dan Test Case yang komprehensif.

---

## Terima Kasih
