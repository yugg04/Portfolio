# 🎨 Yug Khatri - Portfolio 

A modern, responsive portfolio website showcasing work as an **AI/ML Developer** and **Python Developer**. Built with a clean structure and easy customization. 

---

## 🌐 Live Demo

👉 Visit Portfolio: 

---

## ✨ Features

* Modern Dark Theme – Clean UI
* Fully Responsive – Mobile, tablet, desktop
* Simple Structure – Easy to understand
* JSON-Based Content – Update from one place
* Fast Loading – No heavy frameworks
* Smooth Navigation

---

## 🎯 Sections

* Home
* Profile Summary
* Skills
* Experience
* Certifications
* Contact

---

## 🛠️ Technologies Used

### Core

* HTML5
* CSS3
* JavaScript (ES6)

### AI / ML

* Machine Learning
* Deep Learning
* NLP

### Backend

* Python (FastAPI / Flask / Django)

### Libraries

* Pandas
* NumPy
* Scikit-learn
* TensorFlow

### Database

* MongoDB
* MySQL

### Tools

* Git
* GitHub
* Docker

---

## 📁 Project Structure

```bash
portfolio/
│
├── index.html        # Main file (HTML + CSS + JS)
├── README.md         # Documentation
```

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/your-username/portfolio
cd portfolio
```

### 2. Run Locally

* Open `index.html` in browser
* No installation needed

---

## ✏️ Customization Guide

👉 All content is stored inside a single JavaScript object
(`portfolio-data` in your file).
You only need to edit that section.

---

### 🔹 1. Update Profile Info

```js
const PROFILE = {
  name: "Your Name",
  field: "Your Role",
  tagline: "Your short description"
};
```

---

### 🔹 2. Update Overview / Focus

```js
const OVERVIEW = {
  loc: "Your Location",
  focus: [
    {
      title: "Your Skill Area",
      desc: "Description"
    }
  ]
};
```

---

### 🔹 3. Update Skills

```js
const SKILLS = [
  { name: "Python", cat: "py" },
  { name: "Machine Learning", cat: "ai" }
];
```

---

### 🔹 4. Update Experience / Timeline

```js
timeline: [
  {
    yr: "2026",
    title: "Your Role",
    sub: "Company Name",
    tag: "Experience"
  }
]
```

---

### 🔹 5. Update Certifications

```js
const CERTS = [
  {
    name: "Certification Name",
    issuer: "Organization",
    date: "Year"
  }
];
```

---

### 🔹 6. Update Contact Info

```js
const CONTACT = {
  email: "your@email.com",
  linkedin: "your-link",
  github: "your-github",
  location: "Your City"
};
```

---

## 📱 Responsive Design

* Desktop: 1200px+
* Tablet: 768px – 1199px
* Mobile: <768px

---

## ⚡ Performance

* Lightweight
* No frameworks
* Fast loading
* Easy maintenance

---

## 📄 License

Free for personal and educational use.

---

## 👤 Author

Yug Khatri

---

## 🙏 Acknowledgments

* Google Fonts
* Netlify
* Open-source community

---


