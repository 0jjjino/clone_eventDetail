import axios from "axios";

function getEventInfo(code: string | undefined) {
	return async () => {
		return await axios({
			method: "get",
			url: `${process.env.REACT_APP_REQUEST_URI}/${code}`,
		});
	};
}

export default getEventInfo;
