import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { AxiosResponse } from "axios";

import getEventInfo from "api/getEventInfo";
import BottomContainer from "components/BottomContainer";

function EventInfo() {
	const { id } = useParams();
	const { isSuccess }: AxiosResponse["data"] = useQuery(
		"eventDetail",
		getEventInfo(id)
	);

	return (
		<>
			{isSuccess ? (
				<>
					<Wrapper></Wrapper>
					<BottomContainer />
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}

export default EventInfo;

const Wrapper = styled.div`
	height: auto;
	min-height: 100%;
	padding-bottom: 80px;
`;
