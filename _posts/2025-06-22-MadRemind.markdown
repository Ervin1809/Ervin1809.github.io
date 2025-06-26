---
layout: default
title: MedRemind - Medicine Reminder App
description: Mobile application to help users remember their medication schedules with automatic notifications
date: 2025-06-22
categories: Project
tags: [Android, Java, SQLite, MVC, Mobile-App, Healthcare, Medicine-Reminder, Notification, Health-Tech]
---

# MedRemind - Medicine Reminder App 💊📱

![Android](https://img.shields.io/badge/Platform-Android-green.svg)
![Java](https://img.shields.io/badge/Language-Java-orange.svg)
![SQLite](https://img.shields.io/badge/Database-SQLite-blue.svg)
![MVC](https://img.shields.io/badge/Architecture-MVC-purple.svg)
![Healthcare](https://img.shields.io/badge/Domain-Healthcare-red.svg)

**[📱 Download APK](https://github.com/Ervin1809/Project-Mobile-MedRemind/releases)** •
**[📖 Documentation](https://github.com/Ervin1809/Project-Mobile-MedRemind/wiki)** •
**[🐛 Report Issues](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)**

---

## 📱 About MedRemind

**MedRemind** is a mobile application designed to help users remember their medication schedules more regularly and on time. The app provides automatic notifications according to the set schedule, preventing missed doses, especially for users with complex medication regimens.

### 🎯 Problems Addressed

✅ **Forgetfulness**: Automatic notifications prevent missed medication
✅ **Stock Management**: Monitor medicine supplies and refill reminders
✅ **Complex Schedules**: Flexible and easy dose scheduling
✅ **Treatment Adherence**: Track medication intake to improve adherence

---

## 👥 Target Users

### 🎯 Primary Users

**👴 Elderly**
- Need reminders for medication routines
- Simple and easy-to-use interface

**🏥 Chronic Disease Patients**
- Complex, routine medication schedules
- Multiple medications management

**🩹 Post-Operative Patients**
- Adherence to medication regimens
- Temporary medication schedules

### 🤝 Secondary Users

**👨‍👩‍👧‍👦 Caregivers & Families**
- Help manage medications for others
- Remote monitoring capabilities

**👤 General Users**
- Organize medication more efficiently
- Preventive health management

---

## ✨ Main Features

### 💊 **Medicine Data Input**
- Add new medicines with complete information
- Store medicine name, description, and usage instructions
- Structured medicine database

### ⚖️ **Dose, Stock & Refill Management**
- Dose schedule settings (daily, weekly, custom)
- Monitor remaining medicine stock
- Automatic refill reminders when stock is low
- Flexible dosage configurations

### 🔔 **Automatic Reminders**
- Timely notifications for medication schedules
- "Taken" confirmation for tracking
- Smart notification system
- Customizable reminder sounds

### ⚙️ **Additional Features**
- Delete or reset medicine data
- User profile management
- Dark and light mode
- Backup and restore data

---

## 🛠️ Technologies Used

### 📱 **Platform & Language**
- **Platform**: Android 6.0+ (API 23+)
- **Language**: Java
- **IDE**: Android Studio

### 🏗️ **Architecture & Database**
- **Architecture**: Model-View-Controller (MVC)
- **Database**: SQLite (Local Storage)
- **Pattern**: Native Android Components

### 🔧 **Development Approach**
- **Framework**: Native Android (No external frameworks)
- **Design**: Material Design Guidelines
- **Notifications**: Android Notification Manager
- **Storage**: Shared Preferences + SQLite

---

## 🚀 Installation & Getting Started

### 📋 **System Requirements**
- **OS**: Android 6.0 (Marshmallow) or higher
- **Storage**: At least 100MB free space
- **Permissions**: Notification access, Storage access
- **Internet**: Optional (for certain features)

### ⚡ **Installation Steps**

**1. Download APK**
<pre>
# Clone repository
git clone https://github.com/Ervin1809/Project-Mobile-MedRemind.git

# Or download directly
# Visit: https://github.com/Ervin1809/Project-Mobile-MedRemind/releases
</pre>

**2. Installation**
<pre>
📱 Open the downloaded APK file
🔐 Allow installation from unknown sources
📲 Follow on-screen installation prompts
✅ Wait until installation completes
</pre>

**3. Initial Setup**
<pre>
🚀 Open the MedRemind app
👤 Create an account or login as guest
🔔 Grant notification permissions when prompted
⚙️ Complete initial profile setup
</pre>

**4. Adding Your First Medicine**
<pre>
➕ Select "addObat" from navigation
📝 Fill in the required medicine information
⏰ Set reminder schedules
💾 Save and activate reminders
</pre>

---

## 📱 Screenshots & Demo

### 🏠 Home & Dashboard

<table style="border-spacing: 15px; border-collapse: separate;">
<tr>
<td align="center">
<img src="/assets/img/home.png" alt="Dashboard" width="200"><br>
<b>Main Dashboard</b><br>
Daily medication overview and reminders
</td>
<td align="center">
<img src="/assets/img/obatDetail.png" alt="Medicine Details" width="200"><br>
<b>Medicine Details</b><br>
Detailed medicine information and dosage
</td>
</tr>
</table>

### 💊 Medicine Management

<table style="border-spacing: 15px;">
<tr>
<td align="center">
  <img src="/assets/img/addObat.png" alt="Add Medicine" width="200"><br>
  <b>Add Medicine</b><br>
  Simple medicine entry form
</td>
<td align="center">
  <img src="/assets/img/addObatHarian.png" alt="Daily Schedule" width="200"><br>
  <b>Daily Schedule</b><br>
  Set daily medication reminders
</td>
<td align="center">
  <img src="/assets/img/addObatMingguan.png" alt="Weekly Schedule" width="200"><br>
  <b>Weekly Schedule</b><br>
  Configure weekly medication schedule
</td>
</tr>
</table>

### 👤 Profile & Settings

<table>
<tr>
<td align="center">
<img src="/assets/img/profile.png" alt="Profile" width="200"><br>
<b>User Profile</b><br>
Personal information and app preferences
</td>
</tr>
</table>

---

## 💻 For Developers

### 🔧 **Development Setup**

<pre>
# Clone repository
git clone https://github.com/Ervin1809/Project-Mobile-MedRemind.git
cd Project-Mobile-MedRemind

# Open with Android Studio
# File → Open → Select project folder
# Wait for Gradle sync to complete

# Build & Run
./gradlew assembleDebug
./gradlew installDebug
</pre>

---

## 📈 Project Status

### ✅ **Implemented Features**
- [x] Medicine Database Management
- [x] Smart Notification System
- [x] Dosage & Schedule Configuration
- [x] Stock Monitoring & Refill Alerts
- [x] User Profile Management
- [x] Dark/Light Theme Support
- [x] Medicine Intake Confirmation
- [x] SQLite Local Storage

### 🚧 **Future Enhancements**

**Phase 1 - Core Improvements**
- [ ] Medicine Interaction Warnings
- [ ] Dosage History Analytics
- [ ] Export Health Reports
- [ ] Cloud Backup & Sync

**Phase 2 - Advanced Features**
- [ ] Barcode Medicine Scanner
- [ ] Doctor/Pharmacy Integration
- [ ] Family Member Monitoring
- [ ] Multi-language Support

**Phase 3 - Smart Features**
- [ ] AI-powered Adherence Insights
- [ ] Wearable Device Integration
- [ ] Voice Commands Support
- [ ] Telemedicine Integration

---

## 👨‍💻 Development Team

### 🎯 **Development Team**

| Name | Student ID | GitHub |
|------|------------|--------|
| **M. Ervin** | H071231050 | [@Ervin1809](https://github.com/Ervin1809) |
| **Frisilia Kiki** | H071231003 | [@frisiliakiki](https://github.com/frisiliakiki) |
| **Muhammad Dirga Dian Nugraha** | H071231039 | [@dirganugrah](https://github.com/dirganugrah) |
| **Jevon Ivander Thomas** | H071231067 | [@jevonivander](https://github.com/jevonivander) |
| **Imam Ahmad Mirza** | H071231082 | [@imamamirza](https://github.com/imamamirza) |

## 📞 Support & Contact

### Get Help

**[🐛 Bug Reports](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)** •
**[💡 Feature Requests](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues/new)** •
**[📖 Wiki](https://github.com/Ervin1809/Project-Mobile-MedRemind/wiki)**

### Project Links

- **Repository**: [MedRemind Project](https://github.com/Ervin1809/Project-Mobile-MedRemind)
- **Releases**: [Download APK](https://github.com/Ervin1809/Project-Mobile-MedRemind/releases)
- **Issues**: [Report Problems](https://github.com/Ervin1809/Project-Mobile-MedRemind/issues)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Ervin1809/Project-Mobile-MedRemind/blob/main/LICENSE) file for details.

---

**Made with ❤️ by Team MedRemind**

*Helping people maintain better medication adherence through smart reminders*

⭐ **[Star this project](https://github.com/Ervin1809/Project-Mobile-MedRemind)** if you find it useful!

---

*Last updated: June 22, 2025*
