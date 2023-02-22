const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const { authRouter, userRouter, servicesRouter, newsRouter, noticesRouter, petsRouter } = require("./routes/api/");

const app = express();

const tempDir = path.join(__dirname, "temp");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(tempDir));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/pets", petsRouter);
app.use("/api/services", servicesRouter);
app.use("/api/news", newsRouter);
app.use("/api/notices", noticesRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
