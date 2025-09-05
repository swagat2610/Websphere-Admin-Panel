require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth-router");
const contactRoute = require("./routes/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRoute = require("./routes/service-router");
const adminRoute = require("./routes/admin-router");
// const corsOptions = {
//   origin: "http://localhost:5173",
//   methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//   credentials: true,
// };
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);
const PORT = 3000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
