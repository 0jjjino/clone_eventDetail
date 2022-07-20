import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import getEventInfo from "api/getEventInfo";
import Footer from "components/Footer";
import Header from "components/Header";
import Thumbnail from "components/Thumbnail";

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
					<Header />
					<Wrapper>
						<Thumbnail />
					</Wrapper>
					<Footer />
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}

export default EventInfo;

const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 56px 0 80px 0;
`;
