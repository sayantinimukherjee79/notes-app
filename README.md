📝 Notes App (Full Stack)

A full-stack Notes Application where users can register, login, and manage their personal notes.
Built using React (Frontend) and Node.js + Express (Backend) with secure authentication.

🚀 Features

🔐 User Authentication (Register & Login)

📝 Create Notes

📄 View All Notes

✏️ Update Notes

❌ Delete Notes

🔒 Protected Routes using JWT

⚡ Fast and responsive UI


🛠️ Tech Stack
Frontend

⚛️ React.js

🎨 Tailwind CSS

🌐 Axios

🔔 React Toastify

Backend

🟢 Node.js

🚀 Express.js

🗄️ MongoDB (Mongoose)

🔐 JSON Web Token (JWT)

🔑 bcrypt (Password hashing)



📂 Project Structure

notes-app/
│
├── backend/
├   ├── config/
│   ├── models/
│   ├── routes/
├   ├── controllers/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── pages/
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository

git clone https://github.com/sayantinimukherjee79/notes-app.git

cd notes-app

2️⃣ Backend Setup

cd backend
npm install

Create a .env file in backend:

PORT = 3000
MONGO_URI = mongodb+srv://sayantini:1234@cluster0.tpc1rc6.mongodb.net/
SECRET_KEY=mysecretkey

Run backend:
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🌐 Deployment

Backend deployed on Render

Frontend can be deployed on Vercel / Netlify

🔑 API Endpoints
Auth

POST /register → Register user

POST /login → Login user

Notes

GET /getnotes → Get all notes

POST /create → Create note

PUT /updateNote/:id → Update note

DELETE /deletenote/:id → Delete note

# 📝 Notes App (Full Stack)

🔗 **Live Demo:** https://notes-app-rsyp.vercel.app/


📌 Future Improvements

🔍 Search & filter notes

📂 Categorize notes

🌙 Dark mode

🙋‍♀️ Author

Sayantini Mukherjee

GitHub: https://github.com/sayantinimukherjee79

⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
