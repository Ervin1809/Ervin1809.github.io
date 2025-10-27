---
layout: post # atau 'page', 'default', tergantung tema Jekyll Anda
title: "Testing Plan (Rencana Pengujian)"
date: 2025-10-27 # Ganti dengan tanggal Anda
categories: [tugas, kuliah, rpl]
tags: [testing, plan, sdcl, kelompok 3]
author: Kelompok 3
image : /assets/img/ppt3/slide-2-anggota.png
---

# Tetsing Plan

![Testing Plan](/assets/img/ppt3/slide-2-anggota.png)


---

## Apa Itu Testing Plan?

**Testing Plan (Rencana Pengujian)** adalah dokumen panduan yang menjelaskan bagaimana proses pengujian perangkat lunak akan dilakukan.

Di dalamnya memuat:
* Ruang lingkup pengujian,
* Strategi/metodologi yang dipakai,
* Sumber daya (tim, alat, data uji),
* Serta jadwal pelaksanaan.

Dokumen ini berfungsi sebagai acuan resmi bagi tim penguji agar kegiatan pengujian lebih terarah dan konsisten.

---

## Tujuan Testing Plan

* Menyediakan gambaran yang jelas tentang apa saja yang akan diuji dan bagaimana pengujiannya.
* Mengidentifikasi sumber daya yang diperlukan (orang, *tools*, lingkungan).
* Menjadi dasar komunikasi antara tim penguji, developer, manajer proyek, dan stakeholder.
* Mengatur jadwal dan estimasi waktu yang dibutuhkan.
* Mengidentifikasi dan memitigasi risiko yang mungkin muncul selama proses pengujian.

---

## Ruang Lingkup (Scope) Testing Plan

![Ilustrasi Ruang Lingkup](/assets/img/ppt3/scope-testing.png)

Ruang lingkup pengujian mendefinisikan batasan dari apa yang akan diuji dan apa yang *tidak* akan diuji.

### Features to be tested (Fitur yang akan diuji)
* Bagian ini merinci semua fungsionalitas, modul, atau fitur spesifik dari perangkat lunak yang akan menjadi target pengujian.
* **Contoh:** Fitur Login, Halaman Registrasi, Modul Keranjang Belanja, Proses Pembayaran.

### Features not to be tested (Fitur yang tidak akan diuji)
* Mendefinisikan dengan jelas fitur atau fungsionalitas yang sengaja dikecualikan dari siklus pengujian ini.
* **Tujuan:** Mengelola ekspektasi dan fokus sumber daya.
* **Alasan Pengecualian (Contoh):**
    * Fitur belum selesai dikembangkan.
    * Fitur dari pihak ketiga yang dianggap stabil.
    * Fitur dengan prioritas rendah dan akan diuji di rilis berikutnya.

---

## Pendekatan Pengujian (Test Approach)

Pendekatan pengujian adalah strategi tingkat tinggi yang akan digunakan untuk menguji aplikasi. Ini menjelaskan metodologi dan teknik yang akan diterapkan.

![Ilustrasi Pendekatan Pengujian](/assets/img/ppt3/test-approach.png)

* **Tujuan Pengujian:** Apa yang ingin dicapai dari pengujian ini? (Misalnya: validasi fungsionalitas, kinerja, atau keamanan).
* **Tipe Pengujian:** Jenis pengujian apa yang akan dilakukan? (Contoh: *Functional Testing, Performance Testing, Usability Testing, Security Testing*).
* **Metode Pengujian:** Bagaimana cara mengujinya? (Contoh: *Manual Testing, Automated Testing, atau kombinasi keduanya*).
* **Teknik Pengujian:** Teknik spesifik apa yang digunakan? (Contoh: *Black Box, White Box, Equivalence Partitioning, Boundary Value Analysis*).

---

## Item Pass/Fail Criteria

Kriteria ini menetapkan standar yang jelas dan terukur untuk menentukan apakah suatu *test item* (misalnya, fitur, modul, atau *test case*) telah **lulus** atau **gagal** dalam pengujian. Kriteria ini memastikan evaluasi yang objektif dan konsisten.

### Pass Criteria (Kriteria Lulus)
* Semua *test case* utama berjalan sesuai harapan.
* Tidak ada *defect* atau *bug* kritis yang ditemukan.
* Fungsi atau fitur bekerja sesuai dengan spesifikasi yang telah ditentukan.

### Fail Criteria (Kriteria Gagal)
* Satu atau lebih *test case* gagal.
* Ditemukan *defect* kritis atau mayor yang menghambat fungsionalitas inti.
* Perilaku aplikasi tidak sesuai dengan spesifikasi.

---

## Komponen Penting Lainnya dalam Testing Plan

### 1. Suspension Criteria & Resumption Requirements
* **Suspension Criteria (Kriteria Penangguhan):** Menentukan kondisi kapan pengujian harus dihentikan sementara.
    * **Contoh:** Jika ditemukan *bug* "Blocker" yang menghalangi pengujian fitur-fitur lain.
* **Resumption Requirements (Syarat Melanjutkan):** Menjelaskan apa yang harus dipenuhi sebelum pengujian dapat dilanjutkan.
    * **Contoh:** *Bug* "Blocker" tersebut telah diperbaiki (*fixed*) dan diverifikasi oleh tim QA.

### 2. Test Deliverables
Dokumen atau artefak yang dihasilkan selama dan setelah proses pengujian.
* **Contoh:**
    * Dokumen Test Plan (dokumen ini sendiri).
    * Test Cases (Skenario uji).
    * Test Scripts (jika menggunakan *automated testing*).
    * Bug Reports (Laporan *bug*).
    * Test Summary Report (Laporan ringkasan hasil akhir pengujian).

### 3. Remaining Test Tasks
Daftar semua tugas pengujian yang tersisa yang perlu diselesaikan sebelum rilis. Ini membantu dalam pelacakan kemajuan dan memastikan tidak ada yang terlewat.

### 4. Environmental Needs (Kebutuhan Lingkungan)
Spesifikasi teknis dari lingkungan tempat pengujian akan dilakukan.
* **Hardware:** Tipe server, spesifikasi PC/laptop, perangkat mobile (Android, iOS).
* **Software:** Sistem Operasi (Windows, Linux), Browser (Chrome, Firefox), Database.
* **Tools:** *Tools* manajemen tes (misalnya Jira), *tools automation* (misalnya Selenium).

### 5. Responsibilities (Tanggung Jawab)
Menjelaskan siapa yang bertanggung jawab atas setiap aktivitas pengujian.
* **Contoh:**
    * **Project Manager:** Mengawasi keseluruhan proyek.
    * **Test Lead:** Membuat Test Plan, mengkoordinasi tim QA.
    * **QA Tester:** Mendesain *test case*, eksekusi tes, melaporkan *bug*.
    * **Developer:** Memperbaiki *bug* yang dilaporkan.

### 6. Staffing and Training Needs (Kebutuhan Staf & Pelatihan)
* **Staffing:** Siapa saja anggota tim yang terlibat.
* **Training:** Jika ada *tools* atau teknologi baru yang digunakan, apakah tim memerlukan pelatihan khusus untuk menggunakannya secara efektif?

### 7. Schedule (Jadwal)
Jadwal mencakup garis waktu mulai pengujian, periode eksekusi, sesi *retest*, hingga *sign-off* rilis. Ini juga mencakup *milestone* penting seperti *review test case*, *end-to-end test*, dan *approval* rilis. Penjadwalan juga memetakan ketergantungan terhadap *build* dari tim developer dan waktu *retest*.

---

## Risiko dan Mitigasi

Bagian ini mengidentifikasi potensi masalah yang dapat menghambat proses pengujian dan rencana untuk menanganinya.

* **Risiko:** Potensi masalah.
    * **Contoh:** Keterlambatan *build* dari developer, lingkungan tes tidak stabil, kekurangan sumber daya (waktu/orang).
* **Mitigasi:** Rencana cadangan untuk mengatasi risiko tersebut.
    * **Contoh:** Menjadwalkan pengujian fitur prioritas tinggi terlebih dahulu, menyiapkan lingkungan *backup*, atau menegosiasikan ulang *timeline* proyek.

---

## Approvals (Persetujuan)

Menentukan siapa yang harus meninjau dan menyetujui dokumen Test Plan ini sebelum proses pengujian dapat dimulai secara resmi.

* **Contoh:**
    * Test Lead
    * Project Manager
    * Product Owner
    * Development Lead

---

## Terima Kasih
