import express from "express";
import cors from "cors";
const app = express();
const port = 9103;
import { renderToString } from "react-dom/server";
import React from "react";
import Routes from "../routes";
import { StaticRouter } from "react-router-dom";

app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.static("public"));
app.get("*", (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  );
  res.send(
    `
    <html lang="es">
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./index.js"></script>
      </body>
    </html>
   `
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
