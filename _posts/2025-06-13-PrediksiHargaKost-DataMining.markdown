---
layout: post
title: Data Mining - Prediction Model
description: Development of a Rental Price Prediction Model for Boarding Houses in Makassar
date: 2025-06-13
categories: Project
tags: [Python, XGBoost Regressor, Scikit-Learn, Geopy, Matplotlib, Seaborn, Selenium, Pandas, Numpy]
image: assets/img/dataMining/dataMining.png
---

# Development of a Boarding House Rental Price Prediction Model in Makassar Using Data Mining Techniques

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)

## 📋 Project Description

This project develops a rental price prediction model for boarding houses in Makassar City using data mining and machine learning techniques. The model aims to help property owners set objective and competitive rental prices based on data analysis.

### 🎯 Research Objectives
- Identify factors affecting boarding house rental prices in Makassar
- Build an accurate prediction model using data mining techniques
- Develop a decision support prototype tool for property owners

## 🏆 Main Results

- **Best Model:** XGBoost Regressor
- **Mean Absolute Error (MAE):** Rp 219,420
- **R-squared (R²):** 0.606 (60.6% of price variance explained)
- **Key Determinants:** AC, Sitting Toilet, Mixed Type, Location

## 📊 Dataset

- **Data Source:** Web scraping from Mamikos.com
- **Initial Data Count:** 1,162 listings
- **Final Data:** 562 unique listings (after deduplication)
- **Coverage:** All districts of Makassar City

### Dataset Features:
- Monthly rental price
- Location (district)
- Boarding house type (male, female, mixed)
- Available facilities
- Distance to main universities

## 🛠️ Technologies Used

### Programming Language
- **Python 3.8+**

### Main Libraries
<pre>
# Data Manipulation & Analysis
pandas
numpy

# Machine Learning
scikit-learn
xgboost

# Geospatial Analysis
geopy

# Web Scraping
selenium

# Visualization
matplotlib
seaborn
</pre>

## 📁 Project Structure

<pre>
kos-price-prediction/
│
├── data/
│   ├── raw/                    # Raw scraped data
│   ├── processed/              # Processed data
│   └── final/                  # Final data for modeling
│
├── notebooks/
│   ├── 01_data_collection.ipynb      # Web scraping
│   ├── 02_data_preprocessing.ipynb   # Preprocessing & EDA
│   ├── 03_feature_engineering.ipynb  # Feature engineering
│   ├── 04_modeling.ipynb             # Model development
│   └── 05_evaluation.ipynb           # Model evaluation
│
├── src/
│   ├── data_collection.py      # Web scraping script
│   ├── preprocessing.py        # Data preprocessing
│   ├── feature_engineering.py  # Feature engineering
│   ├── models.py               # Model definitions
│   └── utils.py                # Utility functions
│
├── models/
│   ├── xgboost_model.pkl       # Best XGBoost model
│   └── random_forest_model.pkl # Random Forest model
│
├── dashboard/                  # Prototype dashboard
│   ├── app.py                  # Main dashboard application
│   └── static/                 # Static files
│
├── requirements.txt            # Dependencies
├── README.md                   # Documentation
└── LICENSE                     # License file
</pre>

## 📈 Methodology

### 1. Data Collection
- Automated web scraping using Selenium
- Extraction from Mamikos.com platform
- Collected 1,162 initial listings

### 2. Data Preprocessing
- Duplicate removal
- Handling missing values
- Data type conversion

### 3. Feature Engineering
- **Facilities Encoding:** MultiLabelBinarizer for facilities features
- **Boarding Type Encoding:** One-Hot Encoding for type categories
- **Spatial Features:** Haversine distance calculation to main campuses

### 4. Outlier Handling
- Interquartile Range (IQR) method
- Upper bound = Q3 + 1.5 × IQR
- Significant performance improvement after outlier handling

### 5. Model Development
- **Random Forest Regressor**
- **XGBoost Regressor** (Best Model)
- Data split: 80% training, 20% testing

## 📊 Evaluation Results

| Model           | MAE (Rupiah) | RMSE (Rupiah) | R-squared |
|-----------------|--------------|---------------|-----------|
| Random Forest   | 238,753      | 332,766       | 0.531     |
| **XGBoost**     | **219,420**  | **302,442**   | **0.606** |

## 🔍 Feature Importance

According to XGBoost analysis, the top 10 factors influencing rental price are:

1. **AC** (0.607) - Dominant factor
2. **Sitting Toilet** (0.090)
3. **Mixed Type Boarding** (0.053)
4. **Ujung Pandang Location** (0.041)
5. **WiFi**
6. **24-Hour Access**
7. **En Suite Bathroom**
8. **Distance to Campus**
9. **Mattress**
10. **Rappocini Location**

## 🎯 Practical Implications

### For Property Owners:
- Objective pricing decision support tool
- Data-driven facility investment guide
- Reduce risk of overpricing/underpricing

### For Further Research:
- Baseline model for future development
- Framework adaptable for other cities

## 🔮 Future Development

- [ ] More detailed web scraping (room size, property photos)
- [ ] Interactive dashboard with SHAP analysis
- [ ] Neural Network (MLP) model implementation
- [ ] More extensive hyperparameter optimization
- [ ] Real-time data integration and temporal trend analysis

## 👥 Research Team

- **Muh. Tegar Adyaksa** - *Hasanuddin University*
- **Athifah Nur Rahman MD** - *Hasanuddin University*
- **M. Ervin** - *Hasanuddin University*
- **Cholyn Sharon Enos** - *Hasanuddin University*
- **Imam Ahmad Mirza** - *Hasanuddin University*

## 🙏 Acknowledgments

Thanks to:
- **Dr. Eng. Supri Bin Hj. Amir, S.Si., M.Eng.**
- **Octavian, S.Si., M.Kom.**

Lecturers of the Data Mining course, Hasanuddin University.

## 📚 References

1. Al Hanif, F. I., et al. (2023). "The Effect of Campus Existence on Boarding House Rental Prices"
2. Christian, Y., & Herman (2023). "Rental Price Prediction of Boarding Houses in Batam City"
3. Fitri, E. (2023). "Comparative Analysis of Regression Methods for House Price Prediction"
4. Wisnuadhi, B., & Setiawan, I. (2021). "Feature Recommendations Affecting Rental Prices"

---
