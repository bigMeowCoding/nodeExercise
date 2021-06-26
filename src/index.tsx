import express from "express";
import cors from "cors";
const app = express();
const port = 9103;
import { renderToString } from "react-dom/server";
import Home from "./components/home";
import React from "react";
const content = renderToString(<Home />);

app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.get("/server", (req, res) => {
  res.send(
    `
    <html lang="es">
      <head> 
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
   `
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
