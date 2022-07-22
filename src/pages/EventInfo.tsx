import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import getEventInfo from "api/getEventInfo";
import Footer from "components/Footer";
import Header from "components/Header";
import Thumbnail from "components/Thumbnail";
import Review from "components/ReviewCard/Review";
import Information from "components/Information";
import Question from "components/QuestionCard/Question";
import EventList from "components/EventCard/EventList";
import HospitalInfo from "components/HospitalInfo";

function EventInfo() {
	const { id } = useParams();
	const { isLoading, isRefetching, refetch }: AxiosResponse["data"] = useQuery(
		"eventDetail",
		getEventInfo(id)
	);

	useEffect(() => {
		refetch();
	}, []);

	return (
		<>
			{!isLoading && !isRefetching ? (
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
				<Loading>Loading...</Loading>
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
	height: 12px;
	border-top: 1px solid #e6e6e6;
	box-sizing: border-box;
	background: #f7f7f7;
`;

const Loading = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding-top: 50px;
	text-align: center;
	font-size: 30px;
	font-weight: 700;
`;
