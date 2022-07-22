import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";

import nextButton from "../../image/next_button.png";
import Icon from "../Common/Icon";
import FreeSpace from "../Common/FreeSpace";
import TitleTab from "../Common/TitleTab";
import ReviewCard from "./ReviewCard";

function Review() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const { reviews, totalCount } = data.data.results.reviewInfo;

	return (
		<>
			<TitleTab title="시술후기" count={totalCount} />
			{reviews.length ? (
				<OuterContainer>
					<InnerContainer>
						{reviews.map((data: AxiosResponse["data"]) => (
							<ReviewCard key={data.ttNo} data={data} />
						))}
						<MoreContainer>
							<Icon width={48} height={48} src={nextButton} />
							<FreeSpace height={4} />
							<More>더보기</More>
						</MoreContainer>
					</InnerContainer>
				</OuterContainer>
			) : (
				<></>
			)}
		</>
	);
}

export default Review;

const More = styled.div`
	font-size: 11px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 400;
	line-height: 16px;
`;

const OuterContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 182px;
	padding: 16px 0 29px;
`;

const InnerContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	margin: 0px 0px 0px 16px;
`;

const MoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 96px;
	max-width: 96px;
	height: 134px;
`;
