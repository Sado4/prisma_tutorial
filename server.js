const express = require("express");
const postsRouter = require("./routes/posts"); // ルーティングをインポート
const app = express();
const PORT = 3000;

app.use(express.json());

// ルーティングを使用
app.use("/", postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
