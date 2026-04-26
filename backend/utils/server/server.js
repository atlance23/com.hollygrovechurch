import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/save-dsl", (req, res) => {
  const { name, dsl } = req.body;

  const filePath = path.join(
    process.cwd(),
    "client/src/components",
    `${name}DSL.jsx`
  );

  fs.writeFileSync(filePath, JSON.stringify(dsl, null, 2));

  res.json({ success: true, path: filePath });
});

app.listen(3001, () => {
  console.log("DSL server running on 3001");
});