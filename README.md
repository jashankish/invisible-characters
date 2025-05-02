<p align="center">
  <img src="https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

<h1 align="center">🕵️‍♀️ Invisible Character Viewer</h1>

<p align="center">A sleek Next.js app to highlight and visualize invisible characters in any pasted text</p>

---

## ✨ Features

* 📋 **Paste text** to identify hidden/invisible characters
* 🔍 **Visual highlighting** of zero-width and control characters
* 📊 **Detailed stats** on character types detected
* 🧠 **Extensive detection** (Unicode whitespace, formatting, etc.)
* 🖤 **Modern dark theme** with 🔴 red-accented styling

---

## 🔎 Detected Characters

The viewer supports a wide array of hard-to-spot characters:

| Category               | Examples                                       |
| ---------------------- | ---------------------------------------------- |
| **Control Characters** | ␀ Null, ↹ Tab, ⏎ Line Feed, ↩️ Carriage Return |
| **Space Variants**     | ␣ Space,   Non-breaking,   En/Em spaces        |
| **Zero-Width**         | 🕳️ ZW Space, Joiner, Non-Joiner               |
| **Directional/Format** | 🔀 LRM, RLM, LRE, PDF, etc.                    |
| **Unicode Oddities**   | 🧩 U+2060, U+180E, U+FEFF...                   |

---

## ⚙️ Getting Started

### 🔧 Prerequisites

* Node.js `>=16.8.0`
* `npm` or `yarn` installed

---

### 📥 Installation

```bash
git clone https://github.com/jashankish/invisible-characters.git
cd invisible-character-viewer
```

```bash
npm install
# or
yarn install
```

---

### 🧪 Run Locally

```bash
npm run dev
# or
yarn dev
```

Then open your browser and visit:

👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Production Build

To build for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

---

## 🧰 Tech Stack

* ⚛️ **[Next.js](https://nextjs.org/)** – React framework for production apps
* ⚛️ **[React](https://reactjs.org/)** – Component-based UI
* 🧑‍💻 **[TypeScript](https://www.typescriptlang.org/)** – Type-safe coding experience

---

## 📁 Project Structure

```
invisible-character-viewer/
│
├── app/                      # App directory (Next.js 13+)
│   ├── page.tsx              # Main UI page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/               # UI components
│   └── InvisibleCharacterViewer.tsx
│
├── lib/                      # Utility logic
│   └── invisibleCharacters.ts
│
├── public/                   # Static assets
├── package.json              # Scripts & dependencies
├── next.config.js            # Next.js config
└── tsconfig.json             # TypeScript config
```

---

## 🧠 How It Works

The viewer parses every character of your input and matches it against a **curated Unicode set of invisible characters**.

✨ All detection is **client-side**. Your data never leaves your browser.

🔍 Each detected character is swapped with a **visible marker**, preserving layout and content boundaries.

---

## 📄 License

This project is licensed under the **MIT License**.
See the [`LICENSE`](./LICENSE) file for details.

---

## 🙏 Acknowledgments

* Unicode data provided by the amazing [Unicode Consortium](https://unicode.org/)

---
