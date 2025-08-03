# Multi-Theme Switcher App

A React + TypeScript application with **3 dynamic themes**, built using **Bootstrap** for responsive layouts and styling.  
The app demonstrates theme switching with persistent settings, API integration, and multiple pages.

---

## 🚀 Features

- **Three distinct themes**:
  1. Theme 1 – Minimalist, light background, sans-serif font
  2. Theme 2 – Dark mode, bold serif font, full-width layout
  3. Theme 3 – Colorful, playful font (Pacifico), bright backgrounds
- **Dynamic theme switching** via dropdown in header
- **Persistent theme** using `localStorage`
- **Responsive layouts** using Bootstrap grid
- **Multiple pages**:
  - Home (product list from API)
  - About
  - Contact (theme-aware form)
- **Theme-aware UI**:
  - Backgrounds
  - Text colors
  - Buttons
  - Font families
- **API Integration**: Product data fetched from [FakeStore API](https://fakestoreapi.com/products)

---

## 📂 Project Structure
src/
components/
Header.tsx
context/
ThemeContext.tsx
pages/
Home.tsx
About.tsx
Contact.tsx
themes/
theme1.ts
theme2.ts
theme3.ts
types/
theme.ts
App.tsx
main.tsx

---

## 🛠️ Technologies Used
- **React** (Vite + TypeScript)
- **Bootstrap** (responsive UI)
- **React Router** (multi-page navigation)
- **Context API** (theme management)
- **localStorage** (persistent theme)
- **FakeStore API** (dummy product data)

---

## 📦 Installation
1. **Clone the repository**
```bash
git clone https://github.com/yourusername/multi-theme-switcher.git
cd multi-theme-switcher

Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm run dev
Open in browser

arduino
Copy
Edit
http://localhost:5173

📷 Screenshots
Theme 1 – Light Minimalist

Theme 2 – Dark Mode

Theme 3 – Colorful


