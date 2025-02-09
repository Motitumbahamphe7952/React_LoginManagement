# 🚀 Login Management CRUD App

## 🔥 Overview
The **Login Management CRUD App** is a full-stack application that allows users to register, log in, and manage their profiles securely. It is built with **React.js** for the frontend and **Express.js** with **MongoDB** for the backend. The application incorporates authentication and authorization mechanisms using **bcrypt** and **JWT (JSON Web Tokens)**. 

Additionally, **Nodemailer** is used for email-based functionalities, and the app is styled with **React Toastify**, **SweetAlert2**, and form validations using **Formik** and **Yup**. The entire project is deployed on **Vercel**.

---

## ✨ Features
- 🔐 User registration and authentication (Login/Logout)
- 🔑 Password hashing using **bcrypt**
- 🔏 Secure JWT-based authentication
- 📝 CRUD operations for user management (Create, Read, Update, Delete)
- 📧 Email notifications using **Nodemailer**
- ✅ Form validation using **Formik** and **Yup**
- 🔔 User-friendly notifications with **React Toastify** and **SweetAlert2**
- 🔄 Protected routes using **react-router-dom**
- ⚡ Frontend API calls using **Axios**
- 🚀 Deployment on **Vercel**

---

## 🛠 Tech Stack
### 🎨 Frontend:
- ⚛ **React.js** - UI Framework
- 🛤 **React Router Dom** - Routing
- 🔗 **Axios** - API Calls
- 📝 **Formik & Yup** - Form Handling & Validation
- 🔔 **React Toastify** - Toast Notifications
- 🎨 **SweetAlert2** - Custom Alerts

### 💻 Backend:
- 🚀 **Express.js** - Backend Framework
- 🛢 **MongoDB & Mongoose** - Database
- 🔐 **Bcrypt** - Password Hashing
- 🔑 **JWT (JSON Web Token)** - Authentication
- 📧 **Nodemailer** - Email Notifications
- 🌍 **CORS** - Cross-Origin Resource Sharing

### 🌍 Deployment:
- 🚀 **Vercel** - Hosting & Deployment

---

## 📦 Installation & Setup
### 🔧 Prerequisites
Ensure you have the following installed:
- ✅ **Node.js** (Latest LTS Version)
- ✅ **MongoDB** (Local or Cloud Instance)

### 📥 Clone Repository
```bash
git clone https://github.com/your-username/login-management-crud.git
cd login-management-crud
```

### ⚙️ **Backend Setup**

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

---

🖥 **Frontend Setup**

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

The application runs on:  
- Frontend: `http://localhost:3000/`  
- Backend: `http://localhost:5000/`

---

🔗 **API Routes**

### 🔐 Auth Routes
| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| POST   | `/api/auth/register`| Register a new user              |
| POST   | `/api/auth/login`   | Login and get JWT token          |
| GET    | `/api/auth/profile` | Get user profile (Protected)     |

### 🧑‍💻 User Management Routes
| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | `/api/users`        | Fetch all users (Admin)          |
| GET    | `/api/users/:id`    | Get user by ID                   |
| PUT    | `/api/users/:id`    | Update user details              |
| DELETE | `/api/users/:id`    | Delete user                      |

---

🚀 **Deployment on Vercel**

### 📡 Frontend Deployment
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy frontend:
   ```bash
   vercel
   ```
   Follow the setup instructions to get the live URL.

### 📡 Backend Deployment
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Deploy backend:
   ```bash
   vercel
   ```

Your full-stack app is now live on Vercel!

---

🤝 **Contributing**

1. 🍴 Fork the repository.
2. 🌱 Create a feature branch:
   ```bash
   git checkout -b feature-branch
   ```
3. ✨ Commit changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. 🚀 Push to branch:
   ```bash
   git push origin feature-branch
   ```
5. 🛠 Open a Pull Request.

---

📝 **License**  
This project is open-source under the [MIT License](LICENSE).

---

📬 **Contact**  
For issues, reach out via [GitHub Issues](https://github.com/Motitumbahamphe7952/React_loginManagement_Backend/issues) or email: `your-email@example.com`.
