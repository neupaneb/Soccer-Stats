# Soccer-Stats ⚽️  
A React-based web application for following and tracking your favorite soccer clubs around the world.

---

## 📌 Overview
**Soccer Stats** is a full-stack web app built for soccer enthusiasts to explore, follow, and keep track of their favorite clubs globally. Users can:
- Search for teams by **country** or **league**
- Add clubs to a **favorites list**
- View **fixtures**, **player stats**, and **club details** in real time

Powered by the **API-Football** API, the app provides live data updates and a smooth user interface. It’s built with **React**, **Node.js**, **Express**, and **MongoDB**, and is fully open-source.

---

## 🚀 Features
- 🌍 Country and league-based team search  
- ⭐ Add/remove teams to a personal favorites list  
- 📊 View player stats and upcoming fixtures  
- ⚡ Real-time data using API-Football  
- 🧠 MongoDB caching to reduce API calls and improve performance  

---

## 🛠️ Tech Stack

| Layer     | Technology                 |
|-----------|----------------------------|
| Frontend  | React.js, HTML, CSS        |
| Backend   | Node.js, Express.js        |
| Database  | MongoDB                    |
| API       | API-Football               |
| Others    | Webpack, Git, Postman      |

---

## 🖥️ Running Locally

1. Clone the Repository


2. Install Dependencies

Install frontend dependencies

npm install

Install backend dependencies

cd server
npm install
cd ..


3. Configure MongoDB
Rename RENAME_ME_CONFIG.js inside server/database/ to config.js and update it with your credentials:

module.exports = {
  username: 'YOUR_MONGO_USERNAME',
  password: 'YOUR_MONGO_PASSWORD',
  ip: 'localhost', // or your remote DB IP
};


4. Set up API Keys
Rename RENAME_ME_CONFIG.js inside server/controllers/ to config.js and update it with your API-Football credentials:

module.exports = {
  hostKey: 'YOUR_API_FOOTBALL_HOSTKEY',
  apiKey: 'YOUR_API_FOOTBALL_APIKEY',
};

5. Run the Application

Bundle frontend if applicable
npm run bundle

Start frontend
npm start

In a new terminal, start backend
cd server
node index.js
