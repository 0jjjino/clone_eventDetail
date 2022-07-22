import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import getEventInfo from "api/getEventInfo";
import Footer from "components/Footer";
import Header from "components/Header";
import Thumbnail from "components/Thumbnail";
import Review from "components/Review";
import Information from "components/Information";
import Question from "components/Question";
import EventList from "components/EventList";
import HospitalInfo from "components/HospitalInfo";

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
						<Space />
						<Review />
						<Space />
						<Information />
						<Space />
						<Question />
						<Space />
						<EventList />
						<HospitalInfo />
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

const Space = styled.div`
	width: 100%;
	background: #f7f7f7;
	border-top: 1px solid #e6e6e6;
	height: 12px;
	box-sizing: border-box;
`;
