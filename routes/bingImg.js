// const axios = require("../module/axiosA");
import axios from "../module/axiosA.js";

// function bingImg(req, res) {
//
// };

// export default bingImg;
// export.default function(req, res) {
// 	axios.$get("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US")
// 		.then((resA) => {
// 			res.end(JSON.stringify(resA.data));
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// }
// exports.default = bingImg;
export default () => {
	axios.$get("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US")
		.then((resA) => {
			res.end(JSON.stringify(resA.data));
		})
		.catch((err) => {
			console.log(err);
		});
};
