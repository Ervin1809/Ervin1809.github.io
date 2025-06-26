---
layout: default
title: VinkerTrack - Personal Nutrition Tracker
description: Android application untuk tracking nutrisi harian dengan integrasi USDA Food Data Central API
date: 2025-06-11
categories: Project
tags: [Android, Java, SQLite, USDA-API, Retrofit, Material-Design, MVVM, Nutrition-Tracker, Mobile-App, Health-Tech]
---

# VinkerTrack - Personal Nutrition Tracker 🍎📱

![Android](https://img.shields.io/badge/Platform-Android-green.svg)
![Java](https://img.shields.io/badge/Language-Java-orange.svg)
![SQLite](https://img.shields.io/badge/Database-SQLite-blue.svg)
![API](https://img.shields.io/badge/API-USDA%20FDC-yellow.svg)
![Retrofit](https://img.shields.io/badge/Network-Retrofit2-blue.svg)

**[📱 Download APK](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/releases)** •
**[📖 Documentation](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/wiki)** •
**[🐛 Report Issues](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/issues)**

---

## 🎯 Overview

**VinkerTrack** adalah aplikasi mobile Android yang dirancang untuk membantu pengguna melacak dan mengelola asupan nutrisi harian mereka secara akurat dan efisien. Aplikasi ini mengintegrasikan data nutrisi dari **USDA Food Data Central API** untuk memberikan informasi nutrisi yang terpercaya dari ribuan bahan makanan.

### 💡 Key Benefits

✅ **Akurat**: Data nutrisi dari USDA Food Data Central
✅ **Personal**: Perhitungan kebutuhan berdasarkan profil individual
✅ **Mudah**: Interface intuitif dengan Material Design
✅ **Lengkap**: Tracking komprehensif untuk semua waktu makan

---

## ✨ Features

### 🔐 Authentication System
- Registrasi dengan validasi email & password
- Login aman dengan session management
- Profile management yang komprehensif

### 👤 Personal Profile
- Input data personal (berat, tinggi, umur, gender)
- 5 level aktivitas harian
- Auto-calculation kebutuhan nutrisi

### 🔍 Food Database
- Real-time search USDA Food Data Central
- Database nutrisi resmi pemerintah AS
- Informasi lengkap per 100g

### 🍽️ Meal Logging
- 4 kategori waktu makan
- Input porsi dalam gram
- Perhitungan nutrisi real-time

### 📊 Smart Analytics
- BMR & TDEE calculation
- Goal-based calorie adjustment
- Macro distribution optimization

### 🎨 User Experience
- Auto dark mode
- Material Design UI
- Responsive layout

---

## 🚀 Quick Start

### 📋 Requirements
- **Android 5.0** (API 21) atau lebih tinggi
- **Internet connection** untuk akses USDA API
- **Storage space** minimal 50MB

### ⚡ Installation Steps

**1. Download & Install**
```
📱 Download APK dari Release page
🔧 Enable "Install from Unknown Sources" jika diperlukan
📲 Install aplikasi VinkerTrack
```

**2. First Time Setup**
```
👤 Registrasi akun baru atau login
📝 Lengkapi profil personal Anda
🎯 Set target berat badan dan level aktivitas
✅ Mulai tracking nutrisi harian!
```

**3. Daily Usage**
```
🔍 Search makanan dari database USDA
⚖️ Input berat makanan dalam gram
📊 Monitor progress nutrisi harian
📈 Review history dan trends
```

---

## 🛠️ Technical Architecture

### 🏗️ App Structure

```
VinkerTrack Android App
├── 🔐 Authentication Layer
│   ├── User Registration & Login
│   └── Session Management
├── 💾 Data Layer
│   ├── SQLite Database (5 tables)
│   ├── USDA API Integration
│   └── Data Repositories
├── 🧮 Business Logic
│   ├── Nutrition Calculator
│   ├── BMR/TDEE Algorithms
│   └── Macro Distribution
└── 🎨 Presentation Layer
    ├── MVVM Architecture
    ├── Material Design UI
    └── Auto Dark Mode
```

### 📊 Database Schema

**Core Tables Overview:**

| Table | Purpose | Key Fields |
|-------|---------|------------|
| users | User authentication | id, email, password, created_at |
| user_profiles | Personal data & targets | weight, height, age, activity_level |
| ingredients | USDA food database | fdc_id, name, nutrition_per_100g |
| food_logs | Daily meal tracking | date, meal_time, total_nutrition |
| food_log_items | Individual food entries | weight_grams, calculated_nutrition |

### 🌐 USDA API Integration

```java
// Real-time food search dengan USDA Food Data Central
Search Query → USDA API → Nutrition Data → Local Cache
// Accurate nutrition data for 300,000+ food items
// Fast response dengan OkHttp & Retrofit2
```

### 🧮 Nutrition Calculation Engine

**BMR Calculation (Mifflin-St Jeor Equation):**
- Male: `BMR = 10×weight + 6.25×height - 5×age + 5`
- Female: `BMR = 10×weight + 6.25×height - 5×age - 161`

**Activity Multipliers:**
- Sedentary: `1.2x` (minimal exercise)
- Light: `1.375x` (light exercise 1-3x/week)
- Moderate: `1.55x` (moderate exercise 3-5x/week)
- Active: `1.725x` (heavy exercise 6-7x/week)
- Very Active: `1.9x` (very heavy + physical job)

**Macro Distribution:**
- Protein: `25%` of daily calories
- Carbohydrates: `45%` of daily calories
- Fat: `30%` of daily calories

---
## 📱 Screenshots & Demo

### 🔐 Authentication

<div align="center">

<table>
<tr >
<td align="center" width="50%">
<img src="/assets/img/login.png" alt="Login Screen" width="200"><br>
<b>Login Screen</b><br>
<small>User authentication with email & password</small>
</td>
<td align="center" width="50%">
<img src="/assets/img/regis.png" alt="Registration Screen" width="200"><br>
<b>Registration Screen</b><br>
<small>New user registration with validation</small>
</td>
</tr>
</table>

</div>

### 🔍 Food Search & Database

<div align="center">

<img src="/assets/img/search.png" alt="Food Search Interface" width="200"><br>
<b>Food Search Interface</b><br>
<small>Real-time search from USDA Food Data Central</small>

</div>

### 👤 User Profile Management

<div align="center">

<table style="border-spacing: 25px; border-collapse: separate;">
<tr >
<td align="center" width="50%">
<img src="/assets/img/profile1.png" alt="Profile Setup" width="200"><br>
<b>Profile Setup</b><br>
<small>Personal data input & health goals </small>
</td>
<td align="center" width="50%">
<img src="/assets/img/profile2.png" alt="Profile Details" width="200"><br>
<b>Profile Details</b><br>
<small>BMR/TDEE calculation results</small>
</td>
</tr>
</table>

</div>

### 📊 Home Dashboard & Analytics

<div align="center">

<table style="border-spacing: 25px; border-collapse: separate;">
<tr >
<td align="center" width="50%">
<img src="/assets/img/home1.png" alt="Main Dashboard" width="200"><br>
<b>Main Dashboard</b><br>
<small>Daily nutrition summary</small>
</td>
<td align="center" width="50%">
<img src="/assets/img/home2.png" alt="Nutrition Tracking" width="200"><br>
<b>Nutrition Tracking</b><br>
<small>Detailed macro tracking</small>
</td>
</tr>
</table>

</div>

### ✨ Key Features Showcase
- **🔐 Secure Authentication**: Email validation & password encryption
- **🔍 Smart Food Search**: Access to 300,000+ food items from USDA database
- **👤 Personal Profiles**: Customized nutrition targets based on individual goals
- **📊 Real-time Analytics**: BMR, TDEE, and macro distribution calculations
- **🍽️ Meal Logging**: Track breakfast, lunch, dinner, and snacks
- **🌙 Auto Dark Mode**: Seamless theme switching based on system preferences

---

### ✨ Key Features Showcase
- **🔐 Secure Authentication**: Email validation & password encryption
- **🔍 Smart Food Search**: Access to 300,000+ food items from USDA database
- **👤 Personal Profiles**: Customized nutrition targets based on individual goals
- **📊 Real-time Analytics**: BMR, TDEE, and macro distribution calculations
- **🍽️ Meal Logging**: Track breakfast, lunch, dinner, and snacks
- **🌙 Auto Dark Mode**: Seamless theme switching based on system preferences

---

## 💻 For Developers

### 🔧 Development Setup

```bash
# Clone repository
git clone https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025.git
cd Project-Fatsecret-AndrodiStudio-2025

# Open with Android Studio
# File → Open → Select project folder
# Wait for Gradle sync to complete

# Configure USDA API Key
# Edit: app/src/main/java/com/example/fatsecret/data/network/ApiConfig.java
# Replace YOUR_API_KEY with your USDA API key

# Build & Run
./gradlew assembleDebug
./gradlew installDebug
```

### 🧪 Testing

```bash
# Unit tests
./gradlew test

# Instrumented tests
./gradlew connectedAndroidTest
```

---

## 📈 Project Status

### ✅ Completed Features
- [x] User Authentication System
- [x] Personal Profile Management
- [x] USDA Food Search Integration
- [x] Daily Nutrition Calculation
- [x] Meal Logging System
- [x] Automatic Dark Mode
- [x] SQLite Database Implementation
- [x] BMR/TDEE Calculation Engine

### 🚧 Future Roadmap

**Phase 1 - Enhancements**
- [ ] Advanced Analytics Dashboard
- [ ] Weekly/Monthly Reports
- [ ] Food Favorites System
- [ ] Barcode Scanning

**Phase 2 - User Experience**
- [ ] Meal Planning
- [ ] Recipe Builder
- [ ] Social Features
- [ ] Push Notifications

**Phase 3 - Advanced**
- [ ] AI Meal Recommendations
- [ ] Fitness Tracker Integration
- [ ] Multi-language Support

---

## 📞 Support & Contact

### Get Help

**[🐛 Bug Reports](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/issues)** •
**[💡 Feature Requests](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/issues/new)** •
**[📖 Wiki](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/wiki)**

### Developer

**Ervin1809** - *Lead Developer*

- GitHub: [@Ervin1809](https://github.com/Ervin1809)
- Repository: [VinkerTrack Project](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025)


---

**Made with ❤️ by [Ervin1809](https://github.com/Ervin1809)**

*Helping people achieve their health goals through accurate nutrition tracking*

⭐ **[Star this project](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025)** if you find it useful!

---

*Last updated: June 26, 2025*
