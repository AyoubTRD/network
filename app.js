const express = require("express"),
  app = express();

const connectDB = require("./config/db");

connectDB();

// Routes
const profileRoutes = require("./routes/api/profile"),
  authRoutes = require("./routes/api/auth"),
  postsRoutes = require("./routes/api/posts"),
  userRoutes = require("./routes/api/user");

app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

// server

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("The server has started..."));
