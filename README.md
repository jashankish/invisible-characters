# ✨ Invisible Character Viewer 🕵️‍♂️

A sleek **Next.js** application to **detect and highlight invisible and zero-width characters** in your text! 🔍

---

## 🚀 Features

* 📋 Paste text to identify invisible characters
* 🎯 Highlights invisible characters with visual indicators
* 📊 Displays statistics of detected characters
* 🧠 Comprehensive detection of invisible characters
* 🌒 Dark theme with red accent styling

---

## 🧙‍♂️ Detected Characters

This app detects a wide range of invisible characters, including:

* ␀ Null, ↹ Tab, ⏎ Line Feed, ↩️ Carriage Return
* ␣ Spaces (regular, non-breaking, en/em spaces)
* 🕳️ Zero-width characters (space, joiner, non-joiner)
* 🔀 Directional formatting characters
* 🧩 Many other special Unicode whitespace and control characters

---

## 🛠️ Getting Started

### ✅ Prerequisites

* ⚙️ Node.js `16.8.0` or later
* 📦 npm or yarn

### 📦 Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/jashankish/invisible-characters.git
   cd invisible-character-viewer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**

   👉 [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Building for Production

To build the application:

```bash
npm run build
# or
yarn build
```

Then, start the production server:

```bash
npm run start
# or
yarn start
```

---

## 🧰 Technology Stack

* ⚛️ [Next.js](https://nextjs.org/) – React Framework
* 🧱 [React](https://reactjs.org/) – UI Library
* 🧑‍💻 [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript

---

## 🗂 Project Structure

```
invisible-character-viewer/
│
├── app/                      # Next.js app directory
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/               # React components
│   └── InvisibleCharacterViewer.tsx
│
├── lib/                      # Utility functions and data
│   └── invisibleCharacters.ts
│
├── public/                   # Static assets
│
├── package.json              # Dependencies and scripts
├── next.config.js            # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🔍 How It Works

This app analyzes each character in the input text and compares it against a comprehensive database of invisible characters. 🧮

✔️ Detected characters are replaced with a **visible representation** in the output.
✔️ Detection is **fully client-side** – no server, no data transmission.

---

## 📄 License

Licensed under the **MIT License** – see the `LICENSE` file for details.

---

## 🙌 Acknowledgments

* 🙏 Unicode character data from the [Unicode Consortium](https://unicode.org/)

---

Let me know if you'd like a badge section or markdown preview snippet too!
