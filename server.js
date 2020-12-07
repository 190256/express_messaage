// express モジュールを読み込む
const express = require("express");

// サーバー作成
const app = express();

// JSON対応
app.use(express.json());

// URLのエンコードデータを解析する
app.use(express.urlencoded({ extended: true }));

// クロスドメインの許可 XSS
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    //CROS設定: 全てのドメインに対して許可 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //次の処理
    next();
});

app.get("/", (req, res) => {
    let message = req.body.message;
    let result = {
        message: req.body.message,
    }
    res.send(result);
});

// message.htmlからAjaxでPOSTリクエストされる
app.post("/", (req, res) => {
    //GET パラメータ取得 (id)
    let id = req.query.id;
    console.log(id);

    //POST データ取得 (message)
    console.log(req.body);

    let message = req.body.message;
    console.log(message);

    //日時生成
    let datetime = new Date();

    let result = {
        'id': id,
        'message': message,
        'datetime': datetime
    };

    //レスポンス
    res.send(result);
});

// ルーティング
// Webルートにリクエストされたらレスポンス
app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.listen(3000);

console.log("Server listen: http://localhost:3000");