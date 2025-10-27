---
layout: post # Sesuai permintaan Anda
title: "Pengantar Unit Testing"
date: 2025-10-27 # Ganti dengan tanggal Anda
categories: [tugas, kuliah, rpl]
tags: [unit testing, coding, bug, kelompok 5]
author: Kelompok 5
image : /assets/img/ppt5/logo-unhas.png
---


# PENGANTAR UNIT TESTING
![Logo Universitas Hasanuddin](/assets/img/ppt5/logo-unhas.png)

### INGIN CODING TANPA KHAWATIR BUG? UNIT TESTING ADALAH KUNCINYA! 

---

## Pembahasan Kami

Berikut adalah topik-topik yang akan dibahas:

1.  Apa Itu Unit Testing? 
2.  Kenapa Unit Testing Itu Penting? 
3.  Pengenalan Framework Populer 
4.  Pola Dasar Arrange, Act, Assert (AAA) 
5.  Cara Memverifikasi Hasil Tes 
6.  Contoh Live Coding Unit Testing Sederhana 

---

## 01. Apa Itu Unit Testing?

**Unit testing** adalah salah satu jenis pengujian perangkat lunak (*software*) yang berfokus pada pengujian **unit-unit terkecil** dalam sebuah sistem perangkat lunak. 

* Biasanya, unit testing mencakup pengujian *function*, *method*, dan *class*. 
* Umumnya, unit testing adalah pengujian paling awal yang dilakukan oleh *developer* sebelum melakukan pengujian lain, seperti *integration test*, *functional test*, dan *end-to-end test*. 
* Tujuannya adalah menguji komponen tanpa bergantung pada sistem lain dan hanya menguji *function by function*. 

### Piramida Pengujian

Dalam piramida pengujian, **Unit Test** berada di lapisan paling dasar. 

![Diagram Piramida Pengujian](/assets/img/ppt5/testing-pyramid.png)

* **Dasar (Unit):** Paling cepat dan paling murah untuk dieksekusi. 
* **Tengah (Integration):** Menguji gabungan unit.
* **Puncak (E2E - End-to-End):** Paling lambat dan paling mahal. 

### Analogi Unit Testing

Bayangkan proses merakit sebuah mobil. 

*Unit testing* adalah seperti saat kita **mengecek setiap komponen mobil** (misalnya ban, mesin, rem) secara terpisah sebelum dirakit menjadi satu mobil utuh. 

Jika setiap komponen lulus tes, kita bisa yakin mobil rakitan pasti berkualitas. Jika nanti ada masalah pada mobil yang sudah jadi, kita tahu masalahnya bukan dari komponen dasar tersebut. 

---

## 02. Kenapa Unit Testing Itu Penting?

Unit testing membantu memastikan **keandalan, kualitas, dan kemudahan pemeliharaan** kode yang kita tulis. 

Berikut adalah 6 alasan utamanya:

1.  **Mendeteksi Bug Lebih Awal** 
    Menemukan masalah di level fungsi (unit) jauh lebih mudah dan cepat daripada mencari *bug* di aplikasi yang sudah kompleks.
2.  **Menghemat Waktu dan Biaya** 
    Memperbaiki *bug* di tahap awal (saat *coding*) jauh lebih murah daripada memperbaikinya setelah aplikasi dirilis ke pengguna.
3.  **Mempermudah Perubahan dan Refactoring** 
    Saat kita ingin mengubah atau memperbaiki kode (*refactoring*), kita bisa langsung menjalankan unit test. Jika semua tes lolos, kita yakin perubahan kita tidak merusak fungsionalitas yang sudah ada.
4.  **Meningkatkan Kualitas Kode** 
    Proses menulis tes "memaksa" *developer* untuk membuat kode yang modular (terpisah-pisah) dan tidak saling bergantung, yang merupakan praktik desain kode yang baik.
5.  **Memberikan Dokumentasi Kode yang "Hidup"** 
    Unit test berfungsi sebagai contoh nyata bagaimana sebuah fungsi seharusnya digunakan dan apa hasil yang diharapkan. Ini adalah dokumentasi teknis terbaik bagi *developer* lain.
6.  **Meningkatkan Kepercayaan Diri** 
    *Developer* bisa lebih percaya diri saat merilis fitur baru atau melakukan *refactor*, karena mereka tahu ada "jaring pengaman" (unit test) yang akan menangkap jika ada kesalahan.

---

## 03. Pengenalan Framework Populer

Framework adalah alat yang mempermudah kita menulis dan menjalankan unit test. Berikut adalah tiga framework populer di ekosistemnya masing-masing: 

### 1. JUnit 5 (Java) 
* **Deskripsi:** Framework *de facto* (standar utama) dan pelopor dalam dunia unit testing untuk Java. 
* **Kapan digunakan?** Jika Anda bekerja dengan Java atau bahasa berbasis JVM lainnya (seperti Kotlin atau Scala). 
* **Keunggulan:** 
    * **Integrasi Penuh:** Didukung oleh semua IDE (IntelliJ, Eclipse) dan *build tools* (Maven, Gradle).
    * **Ekosistem yang Matang:** Banyak tutorial dan ekstensi.
    * **Struktur Berbasis Anotasi:** Menggunakan anotasi seperti `@Test` untuk menandai fungsi tes.

### 2. Jest (JavaScript) 
* **Deskripsi:** Framework JavaScript buatan Meta (Facebook) yang efisien dan menyenangkan. 
* **Kapan digunakan?** Jika Anda menggunakan React, Node.js, TypeScript, atau framework frontend modern lainnya. 
* **Keunggulan:** 
    * **Konfigurasi Minimal (Zero-Config):** Siap pakai tanpa perlu pengaturan rumit.
    * **"Batteries-Included":** Sudah termasuk fitur *mocking*, *assertions*, dan *code coverage* dalam satu paket.
    * **Fitur Snapshot Testing:** Sangat baik untuk menguji komponen UI.

### 3. Pytest (Python) 
* **Deskripsi:** Sederhana, mudah dibaca, dan sangat kuat dengan fitur canggih tersembunyi. 
* **Kapan digunakan?** Untuk proyek Python apapun, mulai dari skrip sederhana, aplikasi web (Django/Flask), hingga *data science* dan API. 
* **Keunggulan:** 
    * **Sintaks Sederhana & Boilerplate Rendah:** Cukup tulis fungsi dengan nama `test_...`.
    * **Fixtures yang Sangat Kuat:** Cara elegan untuk mengelola data dan *setup* tes.
    * **Pelaporan Error yang Detail:** Sangat jelas menunjukkan di mana letak kesalahan.

---

## 04. Pola Dasar Arrange, Act, Assert (AAA)

**AAA** adalah pendekatan atau struktur populer dalam penulisan unit test yang membagi setiap tes menjadi tiga bagian utama yang jelas: 

![Diagram Pola AAA](/assets/img/ppt5/aaa-pattern.png)

### 1. Arrange (Menyiapkan) 
* **Tujuan:** Menyiapkan kondisi awal atau *setup* yang diperlukan untuk tes. 
* Ini termasuk menginisialisasi objek, membuat *mock data*, atau mengatur variabel.

### 2. Act (Melakukan Aksi) 
* **Tujuan:** Menjalankan fungsi atau metode yang sebenarnya ingin kita uji. 
* Ini biasanya hanya satu baris kode.

### 3. Assert (Memverifikasi) 
* **Tujuan:** Memverifikasi bahwa hasil dari langkah "Act" sesuai dengan apa yang kita harapkan (*ekspektasi*). 
* Jika hasil aktual tidak sama dengan hasil ekspektasi, tes akan gagal.

---

## 05. Contoh Live Coding Unit Testing

Bagian ini menunjukkan implementasi unit testing menggunakan Pytest (Python) dan JUnit 5 (Java).

### Contoh Pytest (Python)

Kode ini menguji fungsionalitas dari sebuah `ShoppingCart`.

#### Kode Aplikasi: `shopping_cart.py`
```python
from typing import List

class ShoppingCart:
    def __init__(self, max_size: int) -> None:
        self.items: List[str] = [] 
        self.max_size = max_size 

    def add(self, item: str):
        if len(self.items) >= self.max_size: 
            raise OverflowError("cannot add more items") 
        self.items.append(item) 

    def get_items(self) -> List[str]:
        return self.items 

    def update(self, old_item: str, new_item: str):
        if old_item not in self.items: 
            raise ValueError("item not found") 
        index = self.items.index(old_item) 
        self.items[index] = new_item 

    def delete(self, item: str):
        if item not in self.items: 
            raise ValueError("item not found") 
        self.items.remove(item) 
