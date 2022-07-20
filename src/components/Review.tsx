import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";

import nextButton from "../image/next_button.png";
import rightArrow from "../image/rightArrow.svg";
import Icon from "./Icon";
import ReviewCard from "./ReviewCard";
import FreeSpace from "./FreeSpace";

function Review() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const { reviews, totalCount } = data.data.results.reviewInfo;

	return (
		<>
			<ReviewCount>
				<Title>시술후기 {totalCount}</Title>
				<Icon width={13} height={21.27} src={rightArrow} />
			</ReviewCount>
			{reviews.length ? (
				<ReviewContainer>
					<ReviewInnerContainer>
						{reviews.map((data: AxiosResponse["data"]) => (
							<>
								<ReviewCard key={data.ttNo} data={data} />
							</>
						))}
						<NextContainer>
							<Icon width={48} height={48} src={nextButton} />
							<FreeSpace height={4} />
							<Title className="more">더보기</Title>
						</NextContainer>
					</ReviewInnerContainer>
				</ReviewContainer>
			) : (
				<></>
			)}
		</>
	);
}

export default Review;

const ReviewCount = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	height: 56px;
	padding: 0 16px;
`;

const Title = styled.div`
	font-size: 17px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 500;
	line-height: 25px;

	&.more {
		font-size: 11px;
		font-weight: 400;
		line-height: 16px;
	}
`;

const ReviewContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 182px;
	padding: 16px 0 29px;
`;

const ReviewInnerContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	margin: 0px 0px 0px 16px;
`;

const NextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 96px;
	max-width: 96px;
	height: 134px;
`;
