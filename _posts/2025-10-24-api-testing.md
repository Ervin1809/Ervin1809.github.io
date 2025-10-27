---
layout: post # Sesuai permintaan Anda
title: "API Testing"
date: 2025-10-27 # Ganti dengan tanggal Anda
categories: [tugas, kuliah, rpl]
tags: [api, testing, postman, soapui, kelompok 6]
author: Kelompok 6
image : /assets/img/ppt6/api-testing.png
---

# API TESTING

![API Testing](/assets/img/ppt6/api-testing.png)
### SOFTWARE TESTING AND QUALITY ASSURANCE В

---

## Isi Pembahasan

Berikut adalah poin-poin utama yang akan dibahas:

1.  Apa Itu API Testing
2.  Kenapa Pengujian API Itu Penting / Keunggulan API Testing
3.  Tools API Testing
4.  Anatomi Request dan Response API
5.  Cara Mengirim Request di Postman *(Disebutkan di pembahasan, namun tidak ada slide detail)*
6.  Live Coding *(Disebutkan di pembahasan, namun tidak ada slide detail)*

---

## 1. Apa Itu API Testing?

![Ilustrasi API Testing](/assets/img/ppt6/api-testing-diagram.png)

**API Testing** adalah proses pengujian yang dilakukan pada *Application Programming Interface* (API) untuk memastikan bahwa API berfungsi sesuai dengan spesifikasi.

Pengujian ini bertujuan untuk memvalidasi bahwa API dapat:
* Menangani berbagai skenario dengan benar.
* Menghasilkan *output* yang benar ketika menerima *input* tertentu.

---

## 2. Kenapa Pengujian API Itu Penting? (Keunggulan)

Pengujian API sangat krusial dalam siklus pengembangan perangkat lunak.

* **Menemukan Masalah Lebih Awal:**
    *Bug* di lapisan logika (API) dapat ditemukan sebelum UI (Tampilan Pengguna) selesai dibuat. Ini membuat perbaikan lebih cepat dan murah.
* **Mengurangi Biaya Perbaikan:**
    Memperbaiki *bug* yang ditemukan melalui API testing jauh lebih hemat biaya daripada memperbaiki *bug* yang ditemukan oleh pengguna akhir setelah rilis.
* **Meningkatkan Keamanan:**
    API adalah pintu gerbang ke data sistem. API testing sangat penting untuk memvalidasi skema otentikasi, otorisasi, dan enkripsi untuk mencegah kebocoran data.
* **Memastikan Integrasi Berjalan Baik:**
    API menghubungkan berbagai layanan dan modul. Testing memastikan bahwa semua bagian sistem dapat berkomunikasi satu sama lain tanpa masalah.
* **Mempercepat Siklus Rilis (Continuous Integration/Delivery):**
    Tes API yang otomatis dapat dijalankan setiap kali ada perubahan kode, memberikan umpan balik instan kepada developer dan mempercepat proses rilis.

---

## 3. Tools API Testing

Ada banyak *tools* yang bisa digunakan, namun dua yang paling populer adalah Postman dan SOAPUI.

### Postman
Postman adalah platform kolaborasi untuk pengembangan API, yang berawal dari *plugin* browser sederhana menjadi *tool* komprehensif untuk seluruh siklus hidup API.

**Fitur Utama Postman:**
* **Graphical User Interface (GUI):** Memiliki antarmuka yang mudah digunakan untuk membuat dan mengirim *request*.
* **Manajemen Koleksi:** Mengelompokkan *request* API ke dalam folder (koleksi) untuk organisasi yang lebih baik.
* **Dukungan Otentikasi:** Mendukung berbagai mekanisme otentikasi seperti OAuth 2.0, API Keys, Basic Auth, dll.
* **Testing dan Automation:** Memungkinkan penulisan skrip tes (menggunakan JavaScript) untuk memvalidasi *response* API.
* **Environment dan Variabels:** Memudahkan pengelolaan variabel untuk lingkungan yang berbeda (misalnya: *Development, Staging, Production*).
* **Visualisasi Response:** Dapat merender respons HTML, JSON, dan XML dalam format yang mudah dibaca.

**Kelebihan Postman:**
* Sangat mudah digunakan, bahkan untuk pemula.
* Fitur kolaborasi tim yang kuat (berbagi koleksi).
* Mendukung REST, SOAP, dan GraphQL API.
* Memiliki kemampuan otomatisasi tes yang baik (*Collection Runner*).
* Komunitas pengguna yang besar dan banyak tutorial.

### SOAPUI
SOAPUI adalah *tool* pengujian *open-source* yang sangat kuat, awalnya difokuskan untuk API berbasis SOAP, namun kini juga mendukung REST.

**Fitur Utama SOAPUI:**
* Mendukung SOAP dan REST API.
* Bisa membuat *Functional Testing, Security Testing,* dan *Load Testing*.
* Mendukung *data-driven testing* (mengimpor data dari file Excel atau database untuk pengujian).

**Kelebihan SOAPUI:**
* Sangat kuat untuk pengujian API berbasis SOAP dan XML.
* Mendukung pengujian tingkat lanjut: *Security, Performance,* dan *Load Testing* secara mendalam.
* Cocok untuk lingkungan *enterprise* dengan skenario pengujian yang kompleks.

---

## 4. Anatomi Request & Response API

Interaksi API terdiri dari dua bagian utama: *Request* (Permintaan) dan *Response* (Tanggapan).

### Anatomi Request API
*Request* adalah permintaan yang dikirimkan dari **klien** (misalnya: aplikasi *mobile* atau *browser*) ke **server** untuk mengakses atau memanipulasi data.

Komponen utamanya meliputi:
* **Method (HTTP Verb):** Menentukan aksi yang ingin dilakukan.
    * `GET`: Mengambil data.
    * `POST`: Mengirim data baru.
    * `PUT` / `PATCH`: Memperbarui data yang sudah ada.
    * `DELETE`: Menghapus data.
* **URL (Uniform Resource Locator):** Alamat unik dari sumber daya (*resource*) yang ingin diakses atau dimodifikasi.

### Anatomi Response API
*Response* adalah balasan yang diberikan oleh **server** setelah memproses *request* dari klien.

Komponen utamanya meliputi:
* **Status Code:** Kode numerik yang menandakan hasil dari eksekusi *request*.
    * `200 (OK)`: Permintaan berhasil.
    * `201 (Created)`: Data baru berhasil dibuat (biasanya untuk POST).
    * `400 (Bad Request)`: Permintaan tidak valid (misalnya: data *input* salah).
    * `401 (Unauthorized)`: Klien tidak memiliki izin (perlu login).
    * `404 (Not Found)`: Sumber daya yang diminta tidak ditemukan.
    * `500 (Internal Server Error)`: Terjadi kesalahan di server.
* **Body:** Konten data yang dikembalikan (biasanya dalam format JSON atau XML).

---

## Terima Kasih
