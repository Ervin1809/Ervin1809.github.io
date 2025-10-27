---
layout: post # atau 'page', 'default', tergantung tema Jekyll Anda
title: "Strategi Testing Perangkat Lunak"
date: 2025-10-26 # Ganti dengan tanggal Anda
categories: [tugas, kuliah, rpl]
tags: [testing, sdcl, software, kelompok 1]
author: Kelompok 1
image : /assets/img/ppt1/slide-1.PNG
---

![Ilustrasi Judul Strategi Testing](/assets/img/ppt1/slide-1.PNG)

# Strategi Testing

<!-- * H071231016 - Athifah Nur Rahman MD
* H071231018 - Fadhilah Meisya Az Zahrah
* H071231020 - Angga
* H071231026 - Zainab Muchsinin
* H071231049 - Syaebatul Hamdi
* H071231063 - Amalia Diah Ramadhani
* H071231086 - Naila Mujadiah -->

---

## Fase Testing

Software (Perangkat Lunak) dikembangkan melalui tahapan bertahap yang dikenal dengan **Software Development Life Cycle (SDLC)**.

![Diagram Software Development Life Cycle](/assets/img/ppt1/slide-3.png)

Tahapan-tahapan dalam SDLC meliputi:
1.  Planning
2.  Analysis
3.  Design
4.  Implementation
5.  **Testing & Integration**
6.  Maintenance

---

## Apa Itu Testing?

Testing adalah proses mengevaluasi produk perangkat lunak untuk menemukan cacat dan memastikan produk bekerja sesuai kebutuhan baik fungsional maupun non-fungsional.

![Ilustrasi Bug Testing](/assets/img/ppt1/slide-4.png)

### Apa Tujuan dari Testing?

Tujuan utama testing adalah menemukan kesalahan atau cacat (bug) dalam perangkat lunak atau sistem dan memastikan kualitas sebelum produk dirilis.

### Tujuan Rinci Testing

* Verifikasi dan Validasi
* Mengurangi resiko kegagalan
* Meningkatkan kepercayaan stakeholder
* Menjamin kemanan
* Efisiensi biaya
* Meningkatkan Pengalaman Pengguna

---

## Siklus Hidup Testing (Software Testing Life Cycle)

![Ilustrasi STLC](/assets/img/ppt1/slide-9.png)

### Apa Itu Software Testing Lifecycle (STLC)?

Software Testing Life Cycle adalah pendekatan sistematis untuk menguji perangkat lunak (software) untuk memastikan bahwa software tersebut memenuhi persyaratan dan bebas dari cacat.

Ini merupakan proses yang mengikuti serangkaian langkah atau fase, dan setiap fase memiliki tujuan dan hasil yang spesifik. 324] Proses ini digunakan untuk memastikan bahwa software yang dibuat dan dikembangkan adalah software dengan kualitas terbaik, dapat diandalkan, dan memenuhi kebutuhan pengguna akhir (user).

### Fase 1: Test Planning

* Membuat strategi pengujian
* Mengidentifikasi lingkungan pengujian
* Mengidentifikasi uji kasus
* Memperkirakan waktu dan biaya
* Mengidentifikasi hasil tes dan capaiannya
* Menugaskan peran dan tanggung jawab
* Meninjau dan menyetujui rencana testing

### Fase 2: Test Design dan Uji Kasus

* Membuat data dan skenario pengujian
* Mengidentifikasi hasil yang diharapkan
* Meninjau dan memvalidasi hasil
* Memperbarui dokumen Requirement Traceability Matrix

### Fase 3: Fase Eksekusi Testing (Berdasarkan Level)

![Ilustrasi Bug](/assets/img/ppt1/slide-12.png)

#### Komponen Testing
* Pengujian komponen-komponen program.
* Biasanya dilakukan oleh component developer (kecuali untuk sistem kritis).

#### Integration Testing
* Pengujian kelompok komponen-komponen yang terintegrasi untuk membentuk sub-system ataupun sistem.
* Dilakukan oleh tim penguji yang independen.

#### Sistem Testing
* Pengujian terhadap integrasi sub-system, yaitu keterhubungan antar sub-system.
* Pengujian berdasarkan spesifikasi sistem.

#### Acceptance Testing
* Pengujian terakhir sebelum sistem dipakai oleh user.
* Melibatkan pengujian dengan data dari pengguna sistem.

### Fase 4: Pelaporan & Analisis Testing

* **Ringkasan hasil pengujian:** Menyajikan jumlah kasus uji yang berhasil, gagal, atau belum dijalankan.
* **Identifikasi bug dan isu teknis:** Mencatat kesalahan yang ditemukan selama pengujian, termasuk tingkat keparahan dan status perbaikannya.
* Menilai apakah sistem memenuhi spesifikasi fungsional dan non-fungsional.
* Memberikan saran untuk peningkatan performa, keamanan, atau stabilitas sistem.
* Menampilkan tren pengujian, seperti peningkatan jumlah kasus uji yang berhasil atau penurunan jumlah bug.

---

## Klasifikasi Software Testing

![Ilustrasi Klasifikasi Testing](/assets/img/ppt1/slide-14.png)

### 1. Berdasarkan Abstraksi

#### Unit Testing
* **Definisi:** Strategi ini berfokus pada pengujian komponen perangkat lunak terkecil yang dapat diuji secara terpisah, seperti fungsi, metode, atau kelas.
* **Tujuan:** Memverifikasi fungsionalitas unit kode secara individual.
* **Contoh:**
    > Menguji sebuah fungsi yang menghitung diskon untuk memastikan hasilnya akurat.

#### Integration Testing
* **Definisi:** Strategi ini berfokus pada pengujian interaksi dan komunikasi antara dua atau lebih unit yang telah diuji secara terpisah.
* **Tujuan:** Memastikan bahwa modul atau unit yang berbeda bekerja sama dengan benar.
* **Contoh:**
    > Menguji interaksi antara modul login dan modul profil pengguna untuk memastikan data pengguna dapat diakses setelah login berhasil.

#### System Testing
* **Definisi:** Strategi yang berfokus pada pengujian sistem perangkat lunak secara keseluruhan sebagai satu kesatuan yang terintegrasi. Pengujian ini tidak lagi melihat komponen individu, melainkan mengevaluasi apakah sistem memenuhi semua persyaratan fungsional dan non-fungsional.
* **Tujuan:** Menguji sistem secara holistik terhadap persyaratan yang ada.
* **Contoh:**
    > Menguji apakah sebuah aplikasi e-commerce dapat menangani 1000 pengguna secara bersamaan (pengujian kinerja) atau apakah semua fitur pembayaran berfungsi dengan baik (pengujian fungsional).

#### Acceptance Testing
* **Definisi:** Strategi ini berfokus pada pengujian sistem dari perspektif pengguna akhir (end-user) atau klien.
* **Tujuan:** Memvalidasi bahwa sistem dapat diterima oleh pengguna atau klien dan memenuhi kebutuhan bisnis mereka.
* **Contoh:**
    > Klien menguji sebuah aplikasi mobile baru dan memberikan persetujuan akhir sebelum aplikasi tersebut diluncurkan ke pasar.

### 2. Berdasarkan Fungsi

#### Fungsional Testing
* **Definisi:** Fungsional testing menguji apakah suatu software atau sistem berfungsi sesuai dengan persyaratan fungsionalnya.
* **Tujuan:** Memverifikasi bahwa perangkat lunak berfungsi sebagaimana mestinya dan bebas dari bug, serta memvalidasi keluaran yang dihasilkan sesuai dengan harapan pengguna akhir.
* **Contoh:**
    > Verifikasi fungsi login aplikasi berhasil dengan kredensial valid, pengujian proses pemulihan kata sandi, validasi transaksi pembayaran di e-commerce.

#### Non-Fungsional Testing
* **Definisi:** Non-fungsional testing menguji performa, keamanan, reliabilitas, dan aspek lain dari software yang tidak terkait langsung dengan fungsi spesifiknya. Pengujian ini berfokus pada *bagaimana* suatu sistem bekerja, bukan *apa* yang dilakukannya.
* **Tujuan:** Memastikan bahwa sistem dapat memenuhi tuntutan dunia nyata dan memberikan pengalaman pengguna yang lancar dan berkualitas tinggi.
* **Contoh:**
    > Menguji sebuah website untuk memastikan ia dapat tetap berjalan dengan baik ketika jumlah pengguna melonjak secara bersamaan, seperti saat ada flash sale.

### 3. Berdasarkan Domain

#### Performance Testing
* **Definisi:** Berfokus pada menguji kinerja perangkat lunak dari segi kecepatan, responsivitas, dan stabilitas di bawah beban tertentu.
* **Tujuan:** Memastikan bahwa perangkat lunak mampu menangani beban kerja yang tinggi dan dapat beroperasi dengan baik dalam lingkungan yang berbeda.
* **Contoh:**
    > Menguji sebuah website untuk memastikan bahwa ia masih dapat berjalan dengan baik ketika jumlah pengguna melonjak dalam waktu yang bersamaan.

#### Security Testing
* **Definisi:** Berfokus pada mengidentifikasi celah keamanan dan melindungi data dari ancaman eksternal dan internal.
* **Tujuan:** Memastikan sistem aman dan data pengguna terlindungi dari serangan.
* **Contoh:**
    > Menguji apakah aplikasi rentan terhadap serangan seperti SQL injection, Cross-Site Scripting (XSS), atau kebocoran data pengguna.

#### Usability Testing
* **Definisi:** Berfokus pada Mengevaluasi kemudahan penggunaan perangkat lunak oleh pengguna akhir.
* **Tujuan:** Memastikan bahwa perangkat lunak mudah digunakan serta dapat memenuhi kebutuhan pengguna.
* **Contoh:**
    > Menguji apakah aplikasi mudah dipahami dan digunakan oleh pengguna, misalnya dalam menemukan fitur, menyelesaikan tugas, serta memahami ikon dan navigasi.

### 4. Berdasarkan Struktur

#### Black-Box Testing
* **Definisi:** Black-box testing adalah metode pengujian perangkat lunak di mana para tester tidak mengetahui struktur internal atau kode program.
* **Fokus:** Fokus utama ada pada fungsi dan output sistem, bukan bagaimana proses di dalamnya bekerja.
* **Tujuan:**
    * Memastikan bahwa sistem berfungsi sesuai dengan spesifikasi fungsional.
    * Menemukan kesalahan terkait fungsi, antarmuka, kinerja, dan validasi input/output.

* **Kelebihan (Pros):**
    * Tidak perlu tahu detail teknis kode.
    * Relevan untuk menguji sistem dari perspektif end-user.
    * Cocok untuk menguji fungsi besar pada sistem.

* **Kekurangan (Cons):**
    * Tidak menjamin semua jalur kode diuji.
    * Sulit mendeteksi bug tersembunyi di dalam logika program.
    * Cakupan pengujian bisa terbatas hanya pada skenario yang didokumentasikan.

#### White-Box Testing
* **Definisi:** White-box testing adalah metode pengujian perangkat lunak di mana tester mengetahui struktur internal dan kode program.
* **Fokus:** Fokus utama ada pada alur logika, algoritma, dan struktur data di dalam program.
* **Tujuan:**
    * Memastikan semua alur logika dalam program berjalan dengan benar.    * Memeriksa apakah ada error tersembunyi di dalam struktur kode.
    * Menjamin kualitas kode melalui *coverage testing*.

* **Kelebihan (Pros):**
    * Menjamin cakupan kode lebih luas.
    * Dapat menemukan bug tersembunyi di dalam kode.
    * Membantu mengoptimalkan dan meningkatkan kualitas kode.

* **Kekurangan (Cons):**
    * Membutuhkan pengetahuan mendalam tentang program.
    * Membutuhkan waktu lebih lama jika sistem sangat kompleks.
    * Tidak cocok untuk menguji fungsi besar dari sisi user (karena terlalu detail teknis).

---

## Kesimpulan

![Ilustrasi Kesimpulan](/assets/img/ppt1/slide-32.png)

Jadi, testing merupakan tahapan yang sangat penting untuk diperhatikan ketika mengembangkan sebuah software. Software testing merupakan bagian dari *software development life cycle (SDLC)*.

Ini demi menghasilkan software yang baik, bebas dari bugs, dan disukai oleh pengguna.

---

## Terima Kasih
