import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { takeRandomNumber } from "./util/utils.js";
import { quotes } from "./db/quotes-db.js";

dotenv.config({ path: "./.env" });

const expressApp = express();
expressApp.use(
  cors({
    origin: "https://quotes-that-inspire-client.vercel.app",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  }),
);

expressApp.listen(process.env.APP_PORT, () => {
  console.log(`\nHey, ${process.env.APP_NAME} backend started listning on ${process.env.APP_PORT}
    \tAPP_NAME : ${process.env.APP_NAME} 
    \tAPP_URL : ${process.env.APP_URL} 
    \tAPP_PORT : ${process.env.APP_PORT} 
    \tAPP_IN_MAINTENANCE : ${process.env.APP_IN_MAINTENANCE}`);
});

expressApp.get("/healthcheck", (req, res) => {
  if (process.env.APP_IN_MAINTENANCE === "false") {
    res.send(
      `${process.env.APP_NAME} is running on ${process.env.APP_URL}:${process.env.APP_PORT}`,
    );
  } else {
    res.send(
      `${process.env.APP_NAME} is under maintaince and will resume on ${process.env.APP_URL}:${process.env.APP_PORT}`,
    );
  }
});

expressApp.get("/getAllQuotes", (req, res) => res.json(quotes));

expressApp.get("/getRandomQuote", (req, res) => {
  const randomNumber = takeRandomNumber();
  for (const quote of quotes) {
    if (quote.quoteID === randomNumber) {
      res.json(quote);
      break;
    }
  }
});
