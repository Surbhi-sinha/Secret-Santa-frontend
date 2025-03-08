

### **📜 Secret Santa Assignment System** 🎄

A **fun and automated** Secret Santa system that assigns a **unique Secret Child** to each participant while ensuring fairness, preventing duplicates from previous years, and allowing seamless management through a web interface.

---

## **🚀 Features**

✅ **Automated Secret Santa Matching** – Ensures each participant gets a unique Secret Child.\
✅ **Prevents Self-Assignment** – No one is assigned themselves.\
✅ **No Repeats from Last Year** – Avoids assigning the same person as last year.\
✅ **CSV Upload & Download** – Easily import participants and export assigned pairs.

---

## **🛠️ Tech Stack**

### **Frontend** *(React.js – Hosted on Vercel)*

- React with bootstrap for a clean UI
- Axios for API communication



### **Backend** *(Node.js with Typescript – Hosted on Render)*

- Express.js for API handling
- CORS and authentication setup for security
- CSV-Parser for reading and extracting information from uploaded CSV.
- CSV-writer for writing CSV from the processed data
- Uses (Fisher-Yates Algorithm) for shuffling the employees and assignments
- Multer for file upload support.

---

## **🛠️ Installation & Setup**

### **1️⃣  Backend Setup**

```bash
git clone https://github.com/Surbhi-sinha/Secret-Santa-backend.git
cd Secret-Santa-backend
npm install
npm run build
npm start
```

### **2️⃣ Frontend Setup**

```bash
git clone https://github.com/Surbhi-sinha/Secret-Santa-frontend.git
cd Secret-Santa-frontend
npm install
npm start
```

---

## **🎯 API Endpoints**

| Method | Endpoint  | Description                     |
| ------ | --------- | ------------------------------- |
| `POST` | `/upload` | Upload CSV file of participants |

---

## **🎁 Usage Guide**

1️⃣ **Upload Employee CSV** (with names & emails).\
2️⃣ **Click "Assign Secret Santa"** – The system generates pairs.\
3️⃣ **Download the result** – Get a CSV of Secret Santa assignments.\


---

## **📸 Gif**

📌 ![Secret-santa-demo](secret_santa_frontend\src\assets\secret-santa-gif2.gif)

---

## **🔐 Security & Privacy**

🔹 **Data Protection** – Emails and names are securely stored.\
🔹 **CORS & HTTPS** – Ensures secure API communication.

---

## **🚀 Deployment**

Frontend is deployed on **Vercel**: [Live Site](https://secret-santa-frontend-self.vercel.app/)\
Backend is deployed on **Render**: [API URL](https://secret-santa-backend-ltaw.onrender.com)

---

## **👨‍💻 Contributors**

- **Surbhi Sinha** – [GitHub](https://github.com/Surbhi-sinha)

---

🎄🎁 **Enjoy your hassle-free Secret Santa experience!** 🚀 Let’s spread the holiday cheer! 🎅

---
