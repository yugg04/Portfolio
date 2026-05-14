/*
  Portfolio content config
  Edit this file when you want to update content, projects, links, skills,
  themes, or profile information. The UI in index.html reads from this object.
*/
window.PORTFOLIO_CONFIG = {
  profile: {
    name: "Yug Khatri",
    field: "AI/ML Developer",
    tagline: "Building intelligent digital experiences at the intersection of AI, data, and code. Fresher. Curious. Ready to create impact.",
    photoUrl: "",
    locationLine: "India - Open to Remote"
  },

  theme: {
    default: "light",
    storageKey: "yk-theme"
  },

  overview: {
    loc: "India - Open to Remote",
    ministats: [],
    focus: [
      { icon: "ML", title: "Machine Learning", desc: "Building and training ML/DL models for real-world problems." },
      { icon: "NLP", title: "Deep Learning & NLP", desc: "Neural networks, transformers, language models and NLP pipelines." },
      { icon: "API", title: "Backend APIs", desc: "FastAPI, Flask, Django - scalable REST APIs and microservices." },
      { icon: "DS", title: "Data Science", desc: "EDA, feature engineering, model deployment and analytics." },
      { icon: "AI", title: "Generative AI", desc: "LLMs, RAG pipelines, prompt engineering, and AI-powered applications." }
    ],
    showTimeline: true,
    timeline: [
      { yr: "2026", title: "AI & ML Intern", sub: "AICTE / Edunet | Hands-on ML workflows and projects", tag: "Experience" }
    ]
  },

  projects: [
    {
      key: "Cinelexis",
      title: "Cinelexis - GenAI Movie Data Extractor",
      desc: "AI-powered movie data extraction system that converts unstructured text into clean, structured JSON using LLMs (Mistral via LangChain). Uses Pydantic schemas for validation and extracts title, genre, cast, director, rating, and summary.",
      tags: ["Python", "LangChain", "Mistral AI", "Pydantic", "Streamlit"],
      gh: "https://github.com/yugg04/cinelexis-movie-extractor",
      lv: "https://cinelexis-movie-extractor-04.streamlit.app/",
      architecture: { frontend: "Streamlit", backend: "Python / LangChain", database: "-", ai: "Mistral AI (LLM)", deploy: "Streamlit Cloud" }
    },
    {
      key: "Docnify",
      title: "Docnify - AI Document Reader",
      desc: "RAG-based application that lets users upload PDFs and ask questions in natural language. Retrieves relevant chunks using ChromaDB and generates context-aware answers with Mistral AI, with source visibility for transparency.",
      tags: ["Python", "LangChain", "Mistral AI", "ChromaDB", "Streamlit"],
      gh: "https://github.com/yugg04/Docnify-RAG-Reader",
      lv: "https://docnify-rag-reader-04.streamlit.app/",
      architecture: { frontend: "Streamlit", backend: "Python / LangChain", database: "ChromaDB (Vector)", ai: "Mistral AI (RAG)", deploy: "Streamlit Cloud" }
    },
    {
      key: "Ragora",
      title: "Ragora AI - Enterprise RAG Platform",
      desc: "Production-grade AI platform using Retrieval-Augmented Generation for intelligent document search and conversational AI. Supports semantic retrieval, multi-document processing, streaming responses and scalable infrastructure.",
      tags: ["Python", "FastAPI", "LangChain", "RAG", "Next.js", "Docker", "ChromaDB"],
      gh: "https://github.com/yugg04/ragora-ai",
      lv: "https://ragora-ai.vercel.app/",
      architecture: { frontend: "Next.js", backend: "FastAPI", database: "ChromaDB", ai: "LangChain / RAG", deploy: "Vercel + Docker" }
    },
    {
      key: "Crop",
      title: "Crop Recommendation System",
      desc: "Web-based ML decision support system for crop selection. Takes N, P, K, temperature, humidity, pH and rainfall as inputs and outputs ranked crop recommendations via scikit-learn. React frontend, Spring Boot backend, Python ML service.",
      tags: ["Python", "Machine Learning", "React", "Spring Boot"],
      gh: "https://github.com/yugg04/crop_recommendation_system",
      lv: "https://agrosmart-iota.vercel.app/",
      architecture: { frontend: "React", backend: "Spring Boot", database: "-", ai: "Scikit-learn (ML)", deploy: "Vercel" }
    },
    {
      key: "Carelytics",
      title: "Carelytics - Patient Health Intelligence",
      desc: "Full-stack healthcare dashboard built with FastAPI. Manages patient records with CRUD, auto-calculates BMI, and generates health verdicts through a clean, responsive UI deployed on Render.",
      tags: ["FastAPI", "Python", "Render"],
      gh: "https://github.com/yugg04/Patient_management_system-Fastapi",
      lv: "https://patient-management-system-fastapi-1.onrender.com/",
      architecture: { frontend: "HTML/CSS", backend: "FastAPI", database: "In-memory", ai: "BMI Logic", deploy: "Render" }
    },
    {
      key: "NeuroPulse",
      title: "NeuroPulse - AI Emotion Sense",
      desc: "NLP-based system to detect human emotions from text using TF-IDF + Logistic Regression. Delivers real-time predictions through a lightweight Streamlit UI with a fast, deployable ML pipeline.",
      tags: ["Scikit-learn", "Python", "NLTK", "Streamlit"],
      gh: "https://github.com/yugg04/NeuroPulse-Ai-powered-emotion-sense",
      lv: "https://neuropulse-ai-powered-emotion-sense-yk.streamlit.app/",
      architecture: { frontend: "Streamlit", backend: "Python", database: "-", ai: "TF-IDF + Logistic Regression", deploy: "Streamlit Cloud" }
    },
    {
      key: "Heart",
      title: "Heart & Stroke Prediction App",
      desc: "ML web app predicting heart disease or stroke risk from basic inputs - age, blood pressure, cholesterol and heart rate - using a KNN model with scaled features and an interactive Streamlit interface.",
      tags: ["Python", "Scikit-learn", "Streamlit"],
      gh: "https://github.com/yugg04/Heart_stroke_prediction",
      lv: "https://heartstrokeprediction-yk.streamlit.app/",
      architecture: { frontend: "Streamlit", backend: "Python", database: "-", ai: "KNN Model", deploy: "Streamlit Cloud" }
    }
  ],

  skills: [
    { name: "Machine Learning", cat: "ai" },
    { name: "Deep Learning", cat: "ai" },
    { name: "NLP", cat: "ai" },
    { name: "Generative AI", cat: "ai" },
    { name: "LangChain", cat: "ai" },
    { name: "Hugging Face", cat: "ai" },
    { name: "n8n", cat: "ai" },
    { name: "Data Analysis", cat: "ai" },
    { name: "Model Deployment", cat: "ai" },
    { name: "Python", cat: "py" },
    { name: "FastAPI", cat: "py" },
    { name: "Flask", cat: "py" },
    { name: "Django", cat: "py" },
    { name: "Streamlit", cat: "py" },
    { name: "REST APIs", cat: "py" },
    { name: "HTML", cat: "web" },
    { name: "CSS", cat: "web" },
    { name: "JavaScript", cat: "web" },
    { name: "Pandas", cat: "lib" },
    { name: "NumPy", cat: "lib" },
    { name: "Scikit-learn", cat: "lib" },
    { name: "TensorFlow", cat: "lib" },
    { name: "MongoDB", cat: "db" },
    { name: "MySQL", cat: "db" },
    { name: "Docker", cat: "tools" },
    { name: "Git", cat: "tools" },
    { name: "GitHub", cat: "tools" }
  ],

  certs: [
    { icon: "NPTEL", name: "Python for Data Science", issuer: "NPTEL", date: "2025", url: "", verified: true },
    { icon: "IBM", name: "Artificial Intelligence Fundamentals", issuer: "IBM", date: "2026", url: "", verified: true },
    { icon: "AICTE", name: "AI & ML Internship", issuer: "AICTE / Edunet Foundation", date: "2026", url: "", verified: true }
  ],

  contact: {
    email: "yugkhatri209@gmail.com",
    linkedin: "https://www.linkedin.com/in/yug-khatri-a99b49306/",
    github: "https://github.com/yugg04",
    twitter: "",
    leetcode: "",
    huggingface: "",
    location: "Gandhinagar, Gujarat, India",
    intro: "Whether it is an internship, AI collaboration, or a conversation about technology, I would love to hear from you.",
    resumeUrl: "https://drive.google.com/file/d/1aK94hKlMO3qf3zzTJCUepkVTHt9qI2wE/view?usp=sharing",
    resumeLabel: "Download Resume"
  },

  github: {
    username: "yugg04",
    url: "https://github.com/yugg04",
    maxLanguageRepos: 12,
    fallback: {
      repos: 12,
      stars: 8,
      followers: 0,
      recentActivity: "Public",
      langs: [
        { name: "Python", pct: 68, color: "#0284c7" },
        { name: "JavaScript", pct: 14, color: "#9f6500" },
        { name: "HTML/CSS", pct: 10, color: "#bd2b72" },
        { name: "Java", pct: 5, color: "#07865f" },
        { name: "Other", pct: 3, color: "#88a7bc" }
      ]
    }
  },

  leetcode: {
    url: "",
    username: "",
    highlights: [],
    fallback: {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      ranking: "-",
      acceptanceRate: "-",
      contributionPoints: 0,
      contestRating: "-",
      streak: "-"
    }
  }
};
