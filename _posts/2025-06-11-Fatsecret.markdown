---
layout: post
title: VinkerTrack - Personal Nutrition Tracker
description: Android application for daily nutrition tracking integrated with USDA Food Data Central API
date: 2025-06-11
categories: Project
tags: [Android, Java, SQLite, USDA-API, Retrofit, Material-Design, MVVM, Nutrition-Tracker, Mobile-App, Health-Tech]
image : /assets/img/fatsecret/login.png
---

# VinkerTrack - Personal Nutrition Tracker 🍎📱

**[📱 Download APK](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/releases)** •
**[📖 Documentation](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/wiki)** •
**[🐛 Report Issues](https://github.com/Ervin1809/Project-Fatsecret-AndrodiStudio-2025/issues)**

---

## 🎯 Overview

**VinkerTrack** is an Android mobile application designed to help users track and manage their daily nutrition intake accurately and efficiently. This app integrates nutrition data from the **USDA Food Data Central API** to provide reliable information from thousands of food ingredients.

### 💡 Key Benefits

✅ **Accurate**: Nutrition data provided by USDA Food Data Central
✅ **Personalized**: Calculations based on individual user profiles
✅ **Easy to Use**: Intuitive interface with Material Design
✅ **Comprehensive**: Complete tracking for all meal times

---

## ✨ Features

### 🔐 Authentication System
- Registration with email & password validation
- Secure login with session management
- Comprehensive profile management

### 👤 Personal Profile
- Input personal data (weight, height, age, gender)
- 5 levels of daily activity
- Auto-calculation of nutritional needs

### 🔍 Food Database
- Real-time search using USDA Food Data Central API
- Official nutrition database from the US government
- Detailed information per 100g

### 🍽️ Meal Logging
- 4 meal time categories
- Portion input in grams
- Real-time nutrition calculation

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
- **Android 5.0** (API 21) or higher
- **Internet connection** for accessing the USDA API
- **Minimum 50MB storage** space

### ⚡ Installation Steps

**1. Download & Install**

- 📱 Download the APK from the Release page
- 🔧 Enable "Install from Unknown Sources" if needed
- 📲 Install the VinkerTrack app


**2. First Time Setup**

- 👤 Register a new account or login
- 📝 Complete your personal profile
- 🎯 Set your weight goal and activity level
- ✅ Start tracking daily nutrition!


**3. Daily Usage**

- 🔍 Search foods from the USDA database
- ⚖️ Input food weight in grams
- 📊 Monitor daily nutrition progress
- 📈 Review history and trends


---

## 🛠️ Technical Architecture

### 🏗️ App Structure

<pre>
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
</pre>

### 📊 Database Schema

**Core Tables Overview:**

| Table          | Purpose                    | Key Fields                          |
|----------------|---------------------------|-------------------------------------|
| users          | User authentication       | id, email, password, created_at     |
| user_profiles  | Personal data & targets   | weight, height, age, activity_level |
| ingredients    | USDA food database        | fdc_id, name, nutrition_per_100g    |
| food_logs      | Daily meal tracking       | date, meal_time, total_nutrition    |
| food_log_items | Individual food entries   | weight_grams, calculated_nutrition  |

### 🌐 USDA API Integration

<pre>
  // Real-time food search with USDA Food Data Central
  Search Query → USDA API → Nutrition Data → Local Cache
  // Accurate nutrition data for 300,000+ food items
  // Fast response using OkHttp & Retrofit2
</pre>

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

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/fatsecret/login.png" alt="Login Screen" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Login Screen</strong> - User authentication with email & password</p>
  </div>
  <div>
    <img src="/assets/img/fatsecret/regis.png" alt="Registration Screen" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Registration Screen</strong> - New user registration with validation</p>
  </div>
</div>

---

### 🔍 Food Search & Database

<div style="margin-bottom: 30px;">
  <img src="/assets/img/fatsecret/search.png" alt="Food Search Interface" style="width: 100%; max-width: 400px; display: block; margin: 0 auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
  <p style="text-align: center; font-style: italic; color: #666;"><strong>Food Search Interface</strong> - Real-time search from USDA Food Data Central</p>
</div>

---

### 👤 User Profile Management

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/fatsecret/profile1.png" alt="Profile Setup" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Profile Setup</strong> - Personal data input & health goals</p>
  </div>
  <div>
    <img src="/assets/img/fatsecret/profile2.png" alt="Profile Details" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Profile Details</strong> - BMR/TDEE calculation results</p>
  </div>
</div>

---

### 📊 Home Dashboard & Analytics

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
  <div>
    <img src="/assets/img/fatsecret/home1.png" alt="Main Dashboard" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Main Dashboard</strong> - Daily nutrition summary</p>
  </div>
  <div>
    <img src="/assets/img/fatsecret/home2.png" alt="Nutrition Tracking" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; color: #666;"><strong>Nutrition Tracking</strong> - Detailed macro tracking</p>
  </div>
</div>

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

<pre>
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
</pre>

### 🧪 Testing

<pre>
  # Unit tests
  ./gradlew test

  # Instrumented tests
  ./gradlew connectedAndroidTest
</pre>

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
