# 🛍️ CRWN Live – GODSY07

A fully functional **React + Redux** e-commerce web app built with **Firebase** and **Stripe** integration.  
CRWN Live showcases user authentication, product listing, cart management, and secure payments — built for learning and demonstrating modern frontend development practices.

---

## 🚀 Features

- 👤 **User Authentication** with Firebase  
- 🛍️ **Product Listing & Categories**  
- 🧺 **Shopping Cart & Checkout Flow**  
- 💳 **Stripe Payment Integration**  
- 🔄 **State Management** using Redux Toolkit + Thunk + Persist  
- 📦 **Persistent Cart Storage** across sessions  
- 🧩 **Reusable Components & Modular Architecture**  
- 💅 **Styled Components** and **SASS** for styling  
- ⚡ **Optimized Build** using Vite  
- 🧠 **Memoized Selectors** with Reselect  
- 🧾 **Redux Logger** for development insights  

---

## 🧰 Tech Stack

**Frontend:**
- React 18  
- Redux Toolkit  
- React Redux  
- React Router DOM  
- Reselect  
- Redux Persist  
- Redux Thunk  
- Styled Components  
- SASS  

**Backend / Services:**
- Firebase (Authentication, Firestore, Hosting)  
- Stripe Checkout (Payment Gateway)  

**Build & Tooling:**
- Vite  
- Redux Logger (Development)  

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/godsy07/crwn-live-godsy07.git
cd crwn-live-godsy07
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Set Up Environment Variables
Create a .env file in the project root and add your Firebase and Stripe configuration values:
```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```
>💡 You can find these keys in your Firebase project settings and Stripe Dashboard.

### 4️⃣ Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to see the app in action.

## 🧪 Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

