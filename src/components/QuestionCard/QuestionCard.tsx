import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";

import qna from "../../image/qna.svg";
import check from "../../image/check.svg";
import Icon from "../Common/Icon";
import FreeSpace from "../Common/FreeSpace";

interface propTypes {
	data: AxiosResponse["data"];
}

function QuestionCard({ data }: propTypes) {
	const { nickname, inputDate, content, replyList } = data;

	return (
		<Container>
			<Qmark>
				<Icon width={20} height={20} src={qna} />
			</Qmark>
			<FreeSpace width={8} />
			<ContentContainer>
				<Content className="name">{nickname}</Content>
				<FreeSpace height={2} />
				<Date>{inputDate.replaceAll("-", ".")}</Date>
				<FreeSpace height={8} />
				{content.split("\n").map((value: string) => (
					<Content key={value} className="content">
						{value}
					</Content>
				))}
				<FreeSpace height={16} />
				{replyList.length > 0 ? (
					replyList.map((reply: AxiosResponse["data"]) => (
						<ReplyContainer key={reply.inquiryId}>
							<FlexRowContainer>
								<Content className="name">{reply.nickname}</Content>
								<FreeSpace width={2} />
								<Icon width={20} height={20} src={check} />
							</FlexRowContainer>
							<FreeSpace height={2} />
							<Date>{reply.inputDate.replaceAll("-", ".")}</Date>
							<FreeSpace height={8} />
							<Content className="reply">{reply.content}</Content>
							<Triangle />
						</ReplyContainer>
					))
				) : (
					<></>
				)}
			</ContentContainer>
		</Container>
	);
}

export default QuestionCard;

const Container = styled.div`
	display: flex;
	box-sizing: border-box;
	padding: 16px 16px 12px 16px;
`;

const Qmark = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 50px;
	background-color: #f7f7f7;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Content = styled.div`
	font-size: 13px;
	line-height: 20px;
	white-space: pre-wrap;

	&.name {
		font-family: "Noto Sans KR", sans-serif;
		font-weight: 700;
	}

	&.content {
		font-size: 13px;
		font-family: "Noto Sans KR", sans-serif;
		font-weight: 400;
	}

	&.reply {
		font-size: 13px;
		font-family: "Open Sans", sans-serif;
		font-weight: 400;
		word-break: break-all;
	}
`;

const Date = styled.div`
	font-size: 11px;
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	color: #a8a8a8;
	line-height: 16px;
`;

const ReplyContainer = styled.div`
	position: relative;
	padding: 12px;
	background-color: #e6e6e6;
	border-radius: 4px;
`;

const Triangle = styled.div`
	width: 0;
	height: 0;
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-bottom: 8px solid #e6e6e6;
	position: absolute;
	top: -8px;
	left: 20px;
`;

const FlexRowContainer = styled.div`
	display: flex;
	align-items: center;
`;
