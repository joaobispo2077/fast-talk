import express from "express";

const APP_PORT = 3000;
const app = express();

app.listen(APP_PORT, () => console.log(`Server is running on port ${APP_PORT}`));