const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const emailschedularRoutes = require("./routes/emailScheduler")


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.LOCALHOST,
    credentials: true,
  })
);

// Routes
app.use("/api/v1/emailschedular", emailschedularRoutes);



app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
