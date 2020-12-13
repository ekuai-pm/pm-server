import Koa from "koa";
import {historyApiFallback} from "koa2-connect-history-api-fallback";
import router from "./routes/router.js";
import bingImg from "./routes/bingImg.js";

const port = process.env.PORT || 8088;
const app = new Koa();
// app.use((req, res, next) => {
// 	const {origin, Origin, referer, Referer} = req.headers;
// 	const allowOrigin = origin || Origin || referer || Referer || "*";
// 	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
// 	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	// res.header("Access-Control-Allow-Credentials", true); //可以带cookies
// 	res.header("content-type", "application/json; charset=utf-8");
// 	res.status(200);
// 	if (req.method !== "OPTIONS") {
// 		next();
// 	}
// });

//
// app.use(history({ whiteList: ['/api'] }));
let history = historyApiFallback({whiteList: ["/api"]});
app.use(history);
// app.use("/api/", bingImg);
//
// app.get("/", (req, res) => {
// 	console.log(req);
// 	res.send("Hello World!");
// });
// app.use(function (req, res) {
// 	res.status(404);
// 	res.send({error: "404 not found"});
// });
// app.use(async ctx => {
// 	ctx.body = 'Hello World';
// });
app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(port, () => console.log(`Example app listening on port ${port}!`));
