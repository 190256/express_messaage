// express モジュールを読み込む
const express = require("express");

// サーバー作成
const app = express();

// ルーティング
// Webルートにリクエストされたらレスポンス
app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.listen(3000);

console.log("Server listen: http://localhost:3000");