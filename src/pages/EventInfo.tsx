import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import getEventInfo from "api/getEventInfo";
import { AxiosResponse } from "axios";

function EventInfo() {
	const { id } = useParams();
	const [info, setInfo] = useState({});
	const { isLoading, isSuccess, data }: AxiosResponse["data"] = useQuery(
		"eventDetail",
		getEventInfo(id)
	);

	useEffect(() => {
		if (isSuccess) {
			setInfo(data.data.results);
		}
	}, [isSuccess]);

	return <div></div>;
}

export default EventInfo;
