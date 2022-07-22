import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";

import rightArrow from "../../image/rightArrow.svg";
import BigButton from "../Common/BigButton";
import Icon from "../Common/Icon";
import TitleTab from "../Common/TitleTab";
import FreeSpace from "../Common/FreeSpace";
import QuestionCard from "./QuestionCard";

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
