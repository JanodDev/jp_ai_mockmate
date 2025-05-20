# AI MockMate – Your Smart Interview Partner

A voice-based AI-powered mock interview platform built using Next.js. It helps users practice job interviews in real-time with voice interaction and smart AI feedback.

## 🌐 Live Demo

🔗 [Try the app live here](https://jp-ai-mockmate.vercel.app)

---

## 🧠 What is AI MockMate?

AI MockMate is a web application that allows users to:

- Speak to an AI interviewer (voice-to-voice)
- Receive instant feedback on their answers
- Improve communication skills and reduce interview anxiety
- Practice interviews anytime, from any device

This is ideal for students, job seekers, and non-native English speakers preparing for interviews.

---

## 🚀 Key Features

- 🎤 **Voice Interview** – Talk with an AI interviewer powered by Vapi AI
- 🤖 **Real-Time Feedback** – Get smart suggestions from Google Gemini AI
- 🧠 **AI + NLP** – Analyze fluency, clarity, grammar, and confidence
- 🛠️ **Custom Interviews** – Choose industry, level, and AI tone
- 💻 **Responsive UI** – Works on both desktop and mobile
- 🔐 **Secure Auth** – Firebase Authentication and Firestore DB

---

## ⚙️ Tech Stack

| Feature           | Technology                                           |
| ----------------- | ---------------------------------------------------- |
| Framework         | [Next.js](https://nextjs.org)                        |
| Styling           | Tailwind CSS + shadcn/ui                             |
| Voice Interaction | [Vapi AI](https://docs.vapi.ai)                      |
| AI Feedback       | [Google Gemini AI](https://ai.google.dev/gemini-api) |
| Auth & Database   | Firebase                                             |
| Deployment        | Vercel                                               |
| Validation        | Zod                                                  |

---

## 🛠️ Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### 📦 Install dependencies:

```bash
npm install
# or
yarn install
```

### ▶️ Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🧪 Development Info

- Entry point: `app/page.tsx`
- Custom API integrations: Located in `/lib` and `/api`
- Reusable components: In `/components`
- Firebase config: In `/firebase`
- Form validation: In `/utils`

The app uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load the [Geist](https://vercel.com/font) font from Vercel.

---

## 📁 Folder Structure

```
jp_ai_mockmate/
├── app/              # Next.js App Router pages
├── components/       # UI components
├── firebase/         # Firebase client & admin config
├── lib/              # AI service integration logic (Vapi, Gemini)
├── utils/            # Form validation, helpers
├── api/              # API routes (serverless functions)
├── public/           # Static assets
└── README.md         # Documentation
```

---

## 📦 Deployment

This project is deployed using [Vercel](https://vercel.com).  
To deploy your own copy:

1. Push this project to GitHub
2. Import the repo to Vercel
3. Add your environment variables for Firebase, Vapi, and Gemini
4. Click **Deploy**

For more info, see [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 📈 Future Improvements

- Emotion/sentiment analysis
- Admin dashboard for HR/training
- Mobile app version (React Native)
- Interview scoring and analytics
- Language localization support

---

## 👤 Author

**Gamagedara P Bandara**  
BSc (Hons) in Software Engineering  
📧 10898426@students.plymouth.ac.uk

---

## 🙏 Acknowledgements

- Mrs. Nethmi Weerasingha (Supervisor)
- Firebase, Vapi AI, Google Gemini, and all open-source contributors

---

## 📃 License

This project is open for learning and academic use. Commercial use requires permission.

---
