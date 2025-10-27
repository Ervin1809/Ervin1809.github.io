---
layout: post # atau 'page', 'default', tergantung tema Jekyll Anda
title: "UI/UX Testing"
date: 2025-10-27 # Ganti dengan tanggal Anda
categories: [tugas, kuliah, rpl]
tags: [ui, ux, testing, kelompok 2]
author: Kelompok 2
image : /assets/img/ppt2/slide-1.png
---

![Ilustrasi Judul UI UX Testing](/assets/img/ppt2/slide-1.png)

# UI UX Testing


---

## 01. Perbedaan Mendasar Antara UI & UX Testing

### UI Testing
Fokus pada tampilan antarmuka aplikasi: warna, ikon, ukuran tombol, layout dapat ditampilkan dengan benar, konsisten, dan responsif.
* **Contoh pengujian:** Memastikan tombol Login muncul di posisi yang benar, ukuran font terbaca dengan baik, atau tampilan tetap konsisten di desktop maupun mobile.

### UX Testing
Fokus pada pengalaman pengguna secara keseluruhan saat menggunakan aplikasi.
* **Contoh pengujian:** Menguji apakah pengguna bisa menemukan produk dan menyelesaikan pembelian dengan mudah tanpa merasa bingung.

---

## Fokus UI Testing

### Konsistensi Visual
Semua halaman harus memiliki gaya seragam: warna, ikon, font, ukuran tombol.
* **Contoh testing:**
    * Checklist manual.
    * Automated visual regression testing → Percy, Applitools, atau Selenium + visual plugin.
* **Contoh:** Cek tombol "Login" di halaman A dan halaman B; warna, ukuran, dan posisi harus sama.

### Responsivitas
Desain tetap nyaman dipakai di berbagai ukuran layar (desktop, tablet, smartphone).
* **Contoh testing:**
    * Manual testing.
    * Automated testing → BrowserStack, Lambda Test, atau Responsively App.
* **Contoh:** Buka website di HP 5", tablet 10", laptop 14"; pastikan teks & gambar tetap terbaca.

### Kompatibilitas
UI harus bekerja dengan baik di berbagai browser (Chrome, Firefox, Safari, Edge) dan sistem operasi (Windows, macOS, Android, iOS).
* **Contoh testing:**
    * Cross-browser testing → BrowserStack, Sauce Labs, Lambda Test.
* **Contoh:** Periksa apakah animasi atau ikon tetap tampil di iOS dan Android.

---

## Fokus UX Testing

### Alur Kerja
Alur kerja UX testing adalah proses iteratif yang terintegrasi dalam siklus pengembangan perangkat lunak, khususnya dalam pendekatan agile atau waterfall.

Alur kerja (workflow) UX testing biasanya dimulai dari perencanaan (menentukan tujuan dan peserta), rekrutmen pengguna, pelaksanaan sesi uji (observasi dan wawancara), analisis data, hingga iterasi desain.

* **Contoh Testing (Shopify - Pengujian Profil Pakar):** Alur kerja dimulai dengan wawancara pengguna generatif untuk perencanaan, dilanjutkan dengan *card sorting* dan *tree testing* untuk rekrutmen dan eksekusi. Temuan seperti preferensi pengguna terhadap profil yang lebih manusiawi digunakan untuk iterasi desain, mengoptimalkan arsitektur informasi halaman profil.

### Kegunaan (Usability)
Kegunaan atau *usability* mengacu pada seberapa mudah dan efektif pengguna dapat berinteraksi dengan perangkat lunak. *Usability testing* adalah metode untuk mengevaluasi ini dengan melibatkan pengguna nyata dalam tugas-tugas spesifik, sambil mengamati kesulitan mereka.

Manfaatnya termasuk mengidentifikasi cacat desain awal, mengurangi biaya perbaikan, dan meningkatkan kepuasan pengguna.

* **Contoh testing (Movista - Pengiriman Pesan):** Alur kerja menggunakan *usability testing* remote dengan prototipe high-fidelity via Maze untuk eksekusi *unmoderated*, tugas dan pertanyaan follow-up untuk analisis. Feedback menggeser langkah pemilihan penerima lebih awal, diikuti iterasi sebelum peluncuran dengan sampel besar untuk validasi.

### Aksebilitas (Accessibility Testing)
Aksesibilitas adalah aspek UX yang memastikan perangkat lunak dapat digunakan oleh semua orang, termasuk penyandang disabilitas seperti gangguan penglihatan, pendengaran, atau motorik.

Pengujian aksesibilitas melibatkan evaluasi terhadap standar seperti WCAG (Web Content Accessibility Guidelines), termasuk penggunaan *screen reader*, navigasi keyboard, dan kontras warna.

* **Contoh testing (Pengujian Kontras Warna):** Memeriksa kontras teks dengan latar belakang untuk memenuhi standar WCAG, seperti rasio minimum untuk teks normal dan besar. Ini memastikan pengguna dengan penglihatan rendah dapat membaca konten dengan jelas.

---

## Metode & Tools UI/UX Testing

<!-- *(Catatan: Teks pada slide ini tampaknya sedikit tercampur antara Heatmaps dan A/B Testing. Markdown di bawah ini mengikuti teks yang diekstrak dari file Anda secara harfiah.)* -->

![Ilustrasi Heatmap](/assets/img/ppt2/slide-10-hm.png)
![Ilustrasi A/B Testing](/assets/img/ppt2/slide-10-ab.png)

### Heatmaps
* Dilakukan secara langsung oleh QA tester atau user.
* Fokus: mengecek tampilan (UI) dan alur interaksi (UX) secara step-by-step.
* Contoh tools: Checklist, Prototype, Figma, Zeplin.

### A/B Testing
* Visualisasi area yang paling sering di-klik atau diperhatikan user.
* Fokus: mengetahui perilaku pengguna terhadap UI (misalnya tombol sering dilewati atau tidak terlihat) .
* Contoh tools: Hotjar, Crazy Egg, Microsoft Clarity.

---

## Heuristic Evaluation

Berikut adalah 10 prinsip *heuristic evaluation* untuk desain UI/UX:

#### 1. Visibilitas Status Sistem
Sistem harus selalu memberi tahu pengguna apa yang sedang terjadi melalui umpan balik yang jelas dalam waktu yang wajar.

#### 2. Kecocokan Antara Sistem dan Dunia Nyata
Sistem harus menggunakan bahasa, ikon, dan konsep yang familiar bagi pengguna, bukan yang hanya dipahami oleh sistem.

#### 3. Kontrol dan Kebebasan Pengguna
(Prinsip ini disebutkan di slide, biasanya berarti pengguna dapat dengan mudah "undo" atau "redo" sebuah aksi).

#### 4. Konsistensi dan Standar
Elemen desain, terminologi, dan alur harus konsisten di seluruh platform. Pengguna tidak perlu bingung apakah kata atau aksi yang berbeda memiliki arti yang sama.

#### 5. Pencegahan Kesalahan
Desain yang baik harus bisa mencegah pengguna melakukan kesalahan sejak awal, bukan hanya menampilkan pesan eror yang baik.

#### 6. (Minimalkan Beban Ingatan Pengguna)
Minimalkan beban ingatan pengguna dengan membuat objek, aksi, dan pilihan terlihat jelas. (Prinsip ini dikenal sebagai *Recognition rather than recall*).

#### 7. Fleksibilitas dan Efisiensi Penggunaan
Sistem harus bisa melayani pengguna pemula maupun ahli. Sediakan jalan pintas (shortcuts) bagi pengguna ahli untuk mempercepat interaksi.

#### 8. Desain Estetis dan Minimalis
Antarmuka tidak boleh berisi informasi yang tidak relevan atau jarang dibutuhkan.

#### 9. Bantu Pengguna Mengenali, Mendiagnosis, dan Memulihkan Diri dari Kesalahan
Pesan eror harus ditulis dalam bahasa yang mudah dimengerti (bukan kode eror), menunjukkan masalahnya dengan tepat, dan menyarankan solusi.

#### 10. Bantuan dan Dokumentasi
Bantuan harus mudah dicari dan fokus pada tugas pengguna.

---

## Terima Kasih
