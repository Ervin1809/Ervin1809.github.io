---
layout: post # Sesuai permintaan Anda
title: "Pengantar Cypress"
date: 2025-10-27 14:15:00 +0700 # Ganti dengan tanggal Anda
categories: [tugas, kuliah, rpl]
tags: [cypress, automation, e2e, kelompok 8]
author: Kelompok 8
image: /assets/img/ppt8/slide-1-cypress.png
---

# PENGANTAR CYPRESS
![Logo UNHAS dan Judul Cypress](/assets/img/ppt8/slide-1-cypress.png)

### SOFTWARE TESTING AND QUALITY ASSURANCE

---

## Apa itu Cypress?

### Definisi
**Cypress** adalah sebuah *framework end-to-end testing* yang dirancang khusus untuk aplikasi web modern (seperti aplikasi yang dibuat dengan React, Vue, Angular, dll.).

### Posisi Cypress dalam Testing
Dalam piramida pengujian, testing umumnya dibagi menjadi beberapa level:
* Unit Testing
* Integration Testing
* End-to-End Testing

Cypress utamanya beroperasi di level **End-to-End (E2E) Testing**, namun juga sangat mumpuni untuk *Integration Testing* dan *Component Testing*.


---

## Setup Cypress

### Requirement
Satu-satunya *requirement* utama untuk Cypress adalah:
* **Node.js**

### Instalasi
Proses instalasi Cypress sangat sederhana:

1.  Inisialisasi proyek Node.js di dalam folder Anda:
    ```bash
    npm init -y
    ```
2.  Install Cypress sebagai *dev dependency*:
    ```bash
    npm install cypress --save-dev
    ```

### Menjalankan Cypress
Ada dua cara utama untuk menjalankan Cypress:

1.  **Buka Cypress Test Runner (Mode Interaktif/GUI)**:
    Perintah ini akan membuka aplikasi Cypress, tempat Anda bisa melihat tes berjalan secara visual.
    ```bash
    npx cypress open
    ```
2.  **Jalankan tes melalui terminal (Mode Headless/CI)**:
    Perintah ini menjalankan semua tes Anda di terminal, bagus untuk *Continuous Integration* (CI).
    ```bash
    # Menjalankan di browser default (Electron)
    npx cypress run
    
    # Menjalankan di browser spesifik
    npx cypress run --browser chrome
    npx cypress run --browser firefox
    ```

---

## Perintah Dasar Cypress

Berikut adalah beberapa perintah dasar yang paling sering digunakan dalam skrip pengujian Cypress:

| Perintah | Deskripsi |
| :--- | :--- |
| `cy.visit('URL')` | Membuka atau mengunjungi halaman web. |
| `cy.get('selector')` | Mengambil satu atau lebih elemen DOM berdasarkan *selector* (seperti ID, class, atau atribut). |
| `cy.contains('teks')` | Mencari elemen yang berisi teks tertentu. |
| `.click()` | Melakukan aksi klik pada elemen yang telah dipilih. |
| `.type('teks')` | Mengetikkan teks ke dalam sebuah *input field* atau *textarea*. |
| `cy.url()` | Mendapatkan URL yang sedang aktif di browser. |

---

## Keunggulan Cypress

Cypress memiliki beberapa keunggulan utama yang membedakannya dari *tools* lain seperti Selenium:

* **Arsitektur Modern:** Cypress berjalan di *run-loop* yang sama dengan aplikasi Anda, memberikannya kontrol dan kecepatan yang lebih baik.
* **Test Runner Interaktif:** Memberikan visualisasi *real-time* dari aplikasi Anda saat tes berjalan.
* **Time Travel:** Fitur andalan Cypress. Anda bisa melihat *snapshot* (tangkapan layar) dari setiap langkah tes, memudahkan *debugging*.
* **Automatic Waits:** Cypress secara otomatis menunggu elemen muncul di halaman. Anda tidak perlu menambahkan *wait* atau *sleep* manual di dalam kode tes Anda.

---

## Test Case (Studi Kasus: saucedemo.com)

Berikut adalah contoh *test case* untuk skenario login di situs `saucedemo.com`.

| ID | Test Case | Steps (Langkah-langkah) | Expected Result (Hasil yang Diharapkan) |
| :--- | :--- | :--- | :--- |
| **TC01** | Login dengan username & password valid | 1. Buka halaman login `saucedemo.com`<br>2. Masukkan username `standard_user`<br>3. Masukkan password `secret_sauce`<br>4. Klik tombol "Login" | Berhasil masuk dan diarahkan ke halaman *inventory* (`/inventory.html`). |
| **TC02** | Login dengan password salah | 1. Buka halaman login<br>2. Masukkan username `standard_user`<br>3. Masukkan password `wrong_pass`<br>4. Klik tombol "Login" | Gagal login. Muncul pesan error "Username and password do not match". |
| **TC03** | Login dengan username kosong | 1. Buka halaman login<br>2. Kosongkan *field* username<br>3. Masukkan password `secret_sauce`<br>4. Klik tombol "Login" | Gagal login. Muncul pesan error "Username is required". |

### Study Case: Live Coding
Bagian ini mendemonstrasikan penerapan *test case* di atas secara langsung menggunakan Cypress untuk menguji situs `saucedemo.com`.

---

## Kesimpulan

* Cypress adalah *framework testing* modern yang digunakan untuk menguji aplikasi web secara *end-to-end*.
* Dengan instalasi yang mudah dan fitur unggulan seperti **Test Runner interaktif**, **Time Travel**, dan **automatic waits**, Cypress memudahkan pengujian UI secara cepat dan efisien.
* Struktur tes yang jelas serta perintah intuitif (`cy.get`, `.click`, `.type`) memungkinkan pengujian dilakukan seperti perilaku pengguna asli.
* Melalui studi kasus `saucedemo.com`, Cypress terbukti efektif dalam menangani skenario pengujian positif maupun negatif.
* Secara keseluruhan, Cypress adalah alat yang andal untuk meningkatkan kualitas dan keandalan aplikasi web modern.

---

## Terima Kasih
