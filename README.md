# 🔗 Full Stack LinkedIn Clone

A full-stack LinkedIn-inspired professional networking web application built with the **MERN stack**. This project features secure authentication, a dynamic post feed, user connections system, and a modern responsive UI.

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup/login with JWT-based session management
- 📰 **Dynamic Feed** — Create, view, and interact with posts in real time
- 💬 **Comments System** — Add and view comments on posts
- 🤝 **Connections** — Send, accept, and manage connection requests
- 👤 **User Profiles** — View and update professional profile information
- 🎨 **Responsive UI** — Mobile-friendly design inspired by LinkedIn's interface
- 📱 **Multiple Layouts** — Admin, Dashboard, and User-specific views
- 🌐 **Discover Page** — Explore and find new professionals

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React.js, Redux, CSS Modules      |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB, Mongoose                 |
| Auth       | JWT (JSON Web Tokens), bcrypt     |
| Tools      | Postman, VS Code, Git             |

---

## 📁 Project Structure

```
Full_Stack_LinkedIn/
├── backend/
│   ├── controllers/
│   │   ├── posts.controller.js      # Post creation & management logic
│   │   └── user.controller.js       # User auth & profile logic
│   ├── models/
│   │   ├── comments.model.js        # Comment schema
│   │   ├── connections.model.js     # Connection requests schema
│   │   ├── posts.model.js           # Posts schema
│   │   ├── profile.model.js         # User profile schema
│   │   └── user.model.js            # User schema
│   ├── routes/
│   │   ├── posts.routes.js          # Post endpoints
│   │   ├── user.routes.js           # User endpoints
│   │   └── api.http                 # API testing file
│   ├── uploads/                     # User uploaded files
│   ├── package.json
│   └── server.js                    # Express server entry point
│
├── frontend/
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar/              # Navigation component
│   │   ├── config/
│   │   │   └── redux/               # Redux state management
│   │   │       ├── action/          # Action creators
│   │   │       ├── middleware/      # Redux middleware
│   │   │       └── reducer/         # Reducers (auth, post, etc)
│   │   ├── layout/
│   │   │   ├── AdminLayout/         # Admin dashboard layout
│   │   │   ├── DashboardLayout/     # Main dashboard layout
│   │   │   └── UserLayout/          # User profile layout
│   │   ├── pages/
│   │   │   ├── api/                 # API integration page
│   │   │   ├── blog/                # Blog section
│   │   │   ├── dashboard/           # Main dashboard
│   │   │   ├── discover/            # Discover professionals
│   │   │   ├── login/               # Login page
│   │   │   └── my_connection/       # User connections page
│   │   ├── styles/
│   │   │   ├── globals.css          # Global styles
│   │   │   └── Home.module.css      # Component-specific styles
│   │   ├── App.js                   # Main App component
│   │   ├── index.js                 # React entry point
│   │   └── store.js                 # Redux store configuration
│   ├── package.json
│   └── README.md
│
└── README.md (root)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/singh5679/Full_Stack_LinkedIn.git
   cd Full_Stack_LinkedIn
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file inside the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

5. **Run the application**

   **Terminal 1 — Start backend:**
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on: `http://localhost:5000`

   **Terminal 2 — Start frontend:**
   ```bash
   cd frontend
   npm start
   ```
   Frontend runs on: `http://localhost:3000`

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint           | Description         |
|--------|-------------------|---------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login & get JWT token |

### Posts
| Method | Endpoint             | Description           |
|--------|----------------------|----------------------|
| GET    | `/api/posts`         | Get all posts        |
| POST   | `/api/posts`         | Create a new post    |
| DELETE | `/api/posts/:id`     | Delete a post        |
| GET    | `/api/posts/:id`     | Get single post      |

### Comments
| Method | Endpoint                    | Description              |
|--------|----------------------------|--------------------------|
| POST   | `/api/posts/:id/comments`   | Add comment to post      |
| GET    | `/api/posts/:id/comments`   | Get post comments        |
| DELETE | `/api/comments/:id`         | Delete a comment         |

### Connections
| Method | Endpoint                           | Description                |
|--------|-----------------------------------|---------------------------|
| POST   | `/api/connections/request/:userId` | Send connection request   |
| PUT    | `/api/connections/accept/:requestId`| Accept connection request|
| DELETE | `/api/connections/:userId`         | Remove connection        |
| GET    | `/api/connections`                 | Get user's connections   |

### User Profile
| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/users/:id`     | Get user profile         |
| PUT    | `/api/users/:id`     | Update user profile      |
| GET    | `/api/users`         | Get all users            |

---

## 🛡️ Authentication Flow

1. User registers with email & password
2. Password is hashed using bcrypt
3. JWT token is generated on successful login
4. Token stored in frontend (localStorage/Redux)
5. All protected routes require valid JWT in Authorization header

---

## 📦 Key Dependencies

**Backend:**
- Express.js — Web framework
- MongoDB & Mongoose — Database & ODM
- bcryptjs — Password hashing
- jsonwebtoken — JWT authentication
- cors — Cross-origin requests

**Frontend:**
- React — UI library
- Redux — State management
- React Router — Navigation
- Axios — HTTP client
- CSS Modules — Component styling

---

## 🚀 Future Enhancements

- [ ] Real-time notifications with Socket.io
- [ ] Image upload optimization
- [ ] Search & filter functionality
- [ ] Messaging between connections
- [ ] Deployment to production (Vercel + Render/Railway)
- [ ] Email verification
- [ ] Password reset feature

---

## 📸 Screenshots

_Add project screenshots here_

---

## 🙋‍♂️ Author

**Himanshu Singh**  
B.Tech CSE — Integral University, Lucknow (2026)  
Full-Stack & AI/ML Developer

- 💼 LinkedIn: [linkedin.com/in/himanshu-singh-profile]([https://linkedin.com/in/himanshu-singh-profile](https://www.linkedin.com/in/himanshu-singh-3b6662283/))
- 🐙 GitHub: [@singh5679](https://github.com/singh5679)
- 📧 Email: himanshu7084365955@email.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/singh5679/Full_Stack_LinkedIn/issues).
