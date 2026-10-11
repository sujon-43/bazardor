# 🛒 বাজার দর (BazarDor)

প্রয়োজনীয় পণ্যের দৈনিক বাজারদর এক নজরে দেখার একটি ওয়েব অ্যাপ।
A responsive web app to track daily prices of essential grocery items across Bangladesh markets.

- **Live Link:** _add your deployed link_
- **GitHub Repository:** _add your repo link_

## Technologies Used
Next.js (App Router) · React · Tailwind CSS · DaisyUI · BetterAuth · MongoDB · react-hot-toast

## Key Features
1. **Live price ticker** – infinite scrolling marquee with price and ▲/▼ change for every product.
2. **Home dashboard** – top 6 risers, top 6 fallers and a responsive grid of all products.
3. **Category pages** – skeleton loading, empty/404 state and a numeric sort dropdown (ডিফল্ট / কম থেকে বেশি / বেশি থেকে কম).
4. **Protected product details** – min/max/average price plus market-wise prices (login required).
5. **Authentication** – BetterAuth email/password, Google and GitHub login with toast notifications, and profile name update.

## Getting Started
```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```
