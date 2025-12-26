# Project Setup Guide

## Installation Instructions

When you open this project tomorrow or on a fresh clone, follow these steps:

### Step 1: Navigate to Project Directory
```powershell
cd C:\Users\OMEN\Desktop\Backend\Own\ProjectCamp
```

### Step 2: Install All Dependencies
Run this command in the root directory (`ProjectCamp/`):
```powershell
npm install
```

This will install **both** production and development dependencies as listed in `package.json`.

---

## Dependencies Overview

### Production Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework for building API |
| cors | ^2.8.5 | Cross-Origin Resource Sharing middleware |
| dotenv | ^17.2.3 | Load environment variables from .env file |

### Development Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| nodemon | ^3.1.11 | Auto-restart server on file changes (dev only) |
| prettier | 3.7.4 | Code formatter (dev only) |

---

## How to Run

### Development Mode
```powershell
npm run dev
```
Uses nodemon to auto-reload on changes.

### Production Mode
```powershell
npm start
```
Runs the server normally.

---

## Project Structure
```
ProjectCamp/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── validators/
│   └── index.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .prettierrc
└── .prettierignore
```

---

## Quick Reference

**Do this first after opening the project:**
```powershell
npm install
```

That's it! All dependencies will be installed automatically.
