require("dotenv").config();

const express = require("express");
const configureMiddleware = require("./config/middleware");
const searchRoutes = require("./routes/searchRoutes");

const app = express();
configureMiddleware(app);

app.use("/search", searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
