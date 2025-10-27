---
layout: post # Sesuai permintaan Anda
title: "Pengantar Selenium WebDriver"
date: 2025-10-27
categories: [tugas, kuliah, rpl]
tags: [selenium, webdriver, automation, kelompok 7]
author: Kelompok 7
image : /assets/img/ppt7/selenium-logo.png
---

# Pengantar Selenium WebDriver

![Logo Selenium](/assets/img/ppt7/selenium-logo.png)

### SOFTWARE TESTING AND QUALITY ASSURANCE

---

## Apa itu Selenium?

![Ilustrasi Selenium](/assets/img/ppt7/selenium-intro.png)

**Selenium** adalah sebuah *framework open-source* untuk automasi browser. Tujuan utamanya adalah menguji aplikasi web secara otomatis.

- Mendukung berbagai bahasa populer (Python, Java, C#, JavaScript).
- Mendukung browser modern seperti Chrome, Firefox, Edge, dan Safari.
- Mudah diintegrasikan dengan framework testing dan pipeline CI/CD.

---

## Apa itu Selenium WebDriver?

**WebDriver** adalah komponen inti Selenium — jembatan antara skrip pengujian dan browser nyata.

- Menerjemahkan perintah (klik, input, navigasi) menjadi aksi browser.
- Setiap browser biasanya memiliki driver tersendiri (mis. ChromeDriver, GeckoDriver).

### Alur Kerja (Workflow) Selenium WebDriver

![Diagram alur kerja Selenium WebDriver](/assets/img/ppt7/webdriver-workflow.png)

1. Test scripts (mis. Python/Java/JS)
2. WebDriver menerima perintah melalui API
3. Browser melakukan aksi dan mengembalikan hasil untuk diverifikasi

---

## Kenapa Memilih Selenium?

- Open-source dan gratis
- Mendukung banyak bahasa dan platform
- Integrasi mudah dengan CI/CD dan framework testing
- Komunitas besar dan dokumentasi lengkap

---

## Contoh Implementasi (Python)

### 1. Instalasi

```bash
pip install selenium
```

### 2. Contoh skrip sederhana

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

# Inisialisasi WebDriver (pastikan chromedriver tersedia di PATH)
driver = webdriver.Chrome()

# Buka halaman
driver.get("https://www.google.com")

# Contoh interaksi: mencari kotak pencarian Google
search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium WebDriver")
search_box.submit()

# Tutup browser
driver.quit()
```

### 3. Locator yang umum digunakan

- By.ID: `find_element(By.ID, "id-elemen")`
- By.NAME: `find_element(By.NAME, "nama-elemen")`
- By.XPATH: `find_element(By.XPATH, "//tag[@attr='value']")`
- By.CLASS_NAME: `find_element(By.CLASS_NAME, "nama-kelas")`
- By.CSS_SELECTOR: `find_element(By.CSS_SELECTOR, "#id .class")`
- By.LINK_TEXT: `find_element(By.LINK_TEXT, "Teks Tautan")`

---

## Studi Kasus: SauceDemo (Test Scenario & Test Case)

### Test Scenario

- TS-001: Login berhasil.
- TS-002: Login gagal dengan kredensial salah.
- TS-003: Menambahkan produk ke keranjang.

### Test Case (Contoh)

| ID     | Deskripsi                  | Langkah (Steps)                                                                 | Expected Result                                                                 |
|--------|---------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| TC-001 | Login sukses              | 1. Buka halaman SauceDemo  2. Input `standard_user`  3. Input `secret_sauce`  4. Klik "Login" | Pengguna berhasil masuk dan diarahkan ke `/inventory.html`                       |
| TC-002 | Login gagal (user dikunci)| 1. Buka halaman SauceDemo  2. Input `locked_out_user`  3. Input `secret_sauce`  4. Klik "Login" | Gagal login; muncul pesan: "Sorry, this user has been locked out."             |
| TC-003 | Menambahkan 1 produk      | 1. (Asumsi sudah login) 2. Klik "Add to cart" pada produk "Sauce Labs Backpack" | Ikon keranjang bertambah menjadi "1"                                           |

---

## Catatan Ekspor dan Dokumentasi

- Hasil pengujian dapat diekspor ke CSV/Sheets untuk pelaporan.
- Simpan log, screenshot, dan video saat ada kegagalan untuk bukti dan analisis.

## Terima kasih
