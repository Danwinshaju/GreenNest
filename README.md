# GreenNest

Full-stack plant e-commerce application with product browsing, search, persistent cart and wishlist, checkout/order creation, contact messages, and MongoDB persistence.

## Live demo

https://danwinshaju.github.io/GreenNest/

## Run locally

1. Copy `backend/.env.example` to `backend/.env` and add a fresh MongoDB connection string.
2. In `backend`, run `npm install` and `npm run dev`.
3. In `green`, run `npm install` and `npm start`.

Frontend: `http://localhost:3000`  
API: `http://localhost:5500/api`

Never commit `.env`. The original database credential found in the recovered copy was removed and should be rotated in MongoDB Atlas.
