# 🎯 YJHD Bucket List API

A simple REST API built using Node.js, Express, and SQLite.

This project allows users to manage bucket list goals using CRUD operations.

---

## 🚀 Features

- Create goals
- Read all goals
- Read goal by ID
- Update goals
- Delete goals
- SQLite database storage
- REST API tested with Postman

---

## 🛠 Tech Stack

- Node.js
- Express.js
- SQLite3

---

## 📡 API Endpoints

### ➕ Create Goal
POST /goals

```json
{
  "title": "Visit Japan",
  "category": "travel"
}