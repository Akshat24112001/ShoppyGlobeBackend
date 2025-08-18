import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoute from "./routes/products.routes.js";
import cartRoute from "./routes/cart.routes.js";
import authRouter from "./routes/auth.routes.js";

// getting environment variables
dotenv.config();
// connection to the database
connectDB();

// iinitializing the server
const app = express();
// getting port from .env if not avaialble set it to 8080
const PORT = process.env.PORT || 8080;

// CORS middleware with full config
app.use(cors());

// initializing cookie parser for accessing cookie
app.use(cookieParser());
// json middleware so that json format files can be read
app.use(express.json());

// Routes
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/auth", authRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
