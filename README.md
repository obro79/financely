# 🏦 Financely 🚀

**Live Demo:** 👉 [Try Financely here](https://financely-nine.vercel.app/sign-in) 🎉

## 📄 Full PRD & Technical Docs
👉 [View the Financely PRD & Technical Overview on Notion](https://noisy-pansy-2e8.notion.site/Financely-1eab9c27045980579544ce5e4f96ed55)  

**Financely** is a modern banking platform demo built with Next.js, Appwrite, Plaid, and Dwolla. It allows users to sign up, link bank accounts, view transactions, and manage their finances in a secure, developer-friendly environment. 💼🔒

---

## ✨ Features

- 🔑 User authentication and session management (Appwrite)
- 💳 Bank account linking via Plaid (sandbox)
- 📊 Transaction and account data display
- 💸 Money transfer simulation (Dwolla sandbox)
- 📱 Responsive, modern UI with Tailwind CSS
- 🐞 Robust error handling and logging (using Sentry for error diagnosis and quick fixes)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js (API routes), Appwrite
- **Banking APIs:** Plaid (sandbox), Dwolla (sandbox)
- **Other:** React Hook Form, Zod, Sentry (optional)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. 📝

---

## 📜 License

MIT

---

## 🔜 Next Steps

- ⏳ **Waiting on Plaid API key** to make the app fully functional for all users.
- 📈 Soon, users will be able to **easily create categories and budgets** for a more detailed and personalized financial breakdown.

---

## 🐛 Problems Encountered

- 🔗 Integrating multiple third-party APIs (Plaid, Dwolla, Appwrite) required careful handling of authentication, permissions, and error states.
- 🧪 Sandbox environments sometimes behave differently from production, especially with Plaid's test data and consent flows.
- 🔒 Managing session cookies securely in both development and production environments was tricky.
- 🛠️ Debugging API errors often required checking both backend logs and third-party dashboards.

---

## 🎓 What I Learned

- 🚀 How to build a full-stack financial app using modern frameworks and APIs.
- 📣 The importance of robust error handling and logging for debugging complex integrations.
- 🔑 Best practices for managing sensitive credentials and environment variables.
- 🎨 How to provide a smooth user experience even when working with sandbox/mock data.

---
