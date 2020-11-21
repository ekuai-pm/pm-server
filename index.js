const express = require("express");
const app = express();
const history = require("connect-history-api-fallback");
const port = 8088;

app.get("/", (req, res) => res.send("Hello World!"));

app.use(history())
	.listen(port, () => console.log(`Example app listening on port ${port}!`));
