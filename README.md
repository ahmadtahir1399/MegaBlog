<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:050505,55:1c1d20,100:0c63e7&height=170&section=header&text=MegaBlog&fontSize=52&fontColor=fcfaf8&fontAlignY=38&desc=Full-stack%20blogging%20platform&descAlignY=60&descSize=16" width="100%" alt="MegaBlog" />
</p>

<p align="center">
  <a href="https://mega-blog-zeta.vercel.app"><img src="https://img.shields.io/badge/Live_Demo-0a85ed?style=for-the-badge&logo=vercel&logoColor=white" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

## ✨ About

MegaBlog is a blogging platform where users create an account, write posts in a rich-text editor, upload a featured image and publish. **Appwrite** handles auth, the posts database and image storage. **Redux Toolkit** keeps the logged-in state in sync across the app.

**Live:** [mega-blog-zeta.vercel.app](https://mega-blog-zeta.vercel.app)

## 🔋 Features

- 🔐 Sign up, log in and log out with Appwrite email/password auth
- 📝 Create, edit and delete posts with the **TinyMCE** rich-text editor
- 🖼️ Featured image upload and preview through Appwrite Storage
- 🔗 Slug-based post URLs (`/post/:slug`) and active/inactive post status
- 🛡️ Protected routes for adding and editing posts
- ✨ Animated UI: tsParticles sparkles, following pointer and Framer Motion effects

## 🛠️ Tech stack

| Layer | Tools |
|---|---|
| Frontend | React 18, Vite, React Router |
| State | Redux Toolkit, React Redux |
| Backend | Appwrite (Auth, Databases, Storage) |
| Editor & forms | TinyMCE, React Hook Form, html-react-parser |
| UI | Tailwind CSS, Headless UI, Heroicons, tsParticles, Framer Motion |

## 🚀 Getting started

```bash
git clone https://github.com/ahmadtahir1399/MegaBlog.git
cd MegaBlog
npm install
cp .env.sample .env
```

Fill in `.env` with your Appwrite details:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

```bash
npm run dev
```

## 📁 Project structure

```
src/
  appwrite/      auth.js (account) & config.js (posts + file storage)
  store/         Redux store and authSlice
  components/    Header, Footer, PostCard, RTE, PostForm, UI effects
  components/pages/  Home, AllPost, AddPost, EditPost, Post, Login, SignUp
  conf/          env config
```

## 👤 Author

**Muhammad Ahmad Tahir** · [Portfolio](https://ahmadverse.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/ahmad-ai-enginner/) · [GitHub](https://github.com/ahmadtahir1399)
