const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Routers
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://yasamanAbz:XDdOCR45oXjztV16@cluster0.bvrd2rh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected......");
});
// Basic Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});
app.use(productRoutes);

app.listen(8081, () => {
  console.log("Server is running on 8081....");
});
