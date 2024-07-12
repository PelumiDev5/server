require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const book_router = require("./routes/book_router")
const PORT = process.env.PORT || 8000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/bookstore", book_router)


mongoose.connect(process.env.DB_HOST);
let db = mongoose.connection;

// Check connection
db.once("open", ()=> {
  console.log("Connected to MongoDB");
});

// Check for DB errors
db.on("error", (err)=> {
  console.log("DB Error:" + err);
});

app.listen(PORT, () =>
  console.log(`Server started on http://127.0.0.1:${PORT}`)
);