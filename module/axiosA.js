import axiosA from "axios";
import qs from "qs";

let axios = {
	$get: axiosA.get,
	"$post": (url, data) => {
		return axiosA.post(url, qs.stringify(data));
	},
	...axiosA,
};
export default axios;
