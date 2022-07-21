import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";
import BigButton from "./BigButton";
import Icon from "./Icon";

import rightArrow from "../image/rightArrow.svg";
import QuestionCard from "./QuestionCard";
import TitleTab from "./TitleTab";
import styled from "@emotion/styled";
import FreeSpace from "./FreeSpace";

function Question() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const { inquires: questionList, totalCount: count } =
		data.data.results.inquiryInfo;

	return (
		<>
			<TitleTab title="시술문의" count={count}></TitleTab>
			{questionList.length ? (
				questionList.map((value: AxiosResponse["data"]) => (
					<QuestionCard data={value} key={value.inquiryId} />
				))
			) : (
				<></>
			)}
			<FreeSpace height={24} />
			<ButtonContainer>
				<BigButton ment="시술문의 더보기">
					<Icon width={12} height={19.63} src={rightArrow} />
				</BigButton>
			</ButtonContainer>
			<FreeSpace height={40} />
		</>
	);
}

export default Question;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;
