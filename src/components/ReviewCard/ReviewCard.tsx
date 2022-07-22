import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";

import FreeSpace from "../Common/FreeSpace";
import StarCount from "../Common/StarCount";

interface propsType {
	data: AxiosResponse["data"];
}

function ReviewCard({ data }: propsType) {
	const {
		ttName: firstName,
		name: secondName,
		ttRegidate: date,
		ttImgList: imgList,
		ttContent: comment,
		ro_option_title: option,
		ro_count: count,
		starPoint,
	} = data;

	return (
		<Card>
			<Title>{firstName || secondName}</Title>
			<Container>
				<StarCount average={(starPoint / 10).toFixed(1)} />
				<FreeSpace width={16} />
				<GrayFont className="date">{date.replaceAll("-", ".")}</GrayFont>
			</Container>
			<FreeSpace height={8} />
			<Container>
				{imgList.length ? <Img src={imgList[0]} /> : <></>}
				<InnerContainer>
					<OptionContainer>
						<GrayFont className="option">옵션</GrayFont>
						<FreeSpace width={16} />
						<Option>
							{option} ({count}회차)
						</Option>
					</OptionContainer>
					<FreeSpace height={8} />
					<Comment>
						{comment.slice(0, 22)}
						<Comment className="more">...더보기</Comment>
					</Comment>
				</InnerContainer>
			</Container>
		</Card>
	);
}

export default ReviewCard;

const Card = styled.div`
	min-width: 272px;
	max-width: 272px;
	min-height: 135px;
	max-height: 135px;
	box-sizing: border-box;
	padding: 12px 16px;
	margin-right: 8px;
	background-color: #ffffff;
	border: 1px solid #e6e6e6;
	border-radius: 4px;
`;

const Container = styled.div`
	display: flex;
`;

const Title = styled.div`
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 700;
	line-height: 20px;
`;

const GrayFont = styled.div`
	font-size: 11px;
	font-weight: 400;
	color: #a8a8a8;
	line-height: 16px;

	&.date {
		font-family: "Open Sans", sans-serif;
	}

	&.option {
		font-family: "Noto Sans KR", sans-serif;
		min-width: 21px;
	}
`;

const Img = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 4px;
	margin: 0px 8px 0px 0px;
	object-fit: cover;
`;

const OptionContainer = styled.div`
	display: flex;
	height: 16px;
`;

const Option = styled.div`
	font-size: 11px;
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	line-height: 16px;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	white-space: pre-line;
	-webkit-line-clamp: 1;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Comment = styled.div`
	width: 168px;
	height: 40px;
	white-space: pre-line;
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 400;
	line-height: 20px;
	display: inline;
	text-overflow: ellipsis;
	overflow: hidden;

	&.more {
		padding: 0px 0px 0px 10px;
		color: rgb(168, 168, 168);
	}
`;

// 첨부 파일의 갯수가 많을 경우
// const RemainNum = styled.div`
// 	position: absolute;
// 	width: 30px;
// 	height: 28px;
// 	background: rgba(61, 61, 61, 0.85);
// 	border-radius: 4px 0px;
// 	font-size: 13px;
// 	font-family: "Noto Sans KR", sans-serif;
// 	font-weight: 700;
// 	color: rgb(255, 255, 255);
// 	text-align: center;
// 	line-height: 28px;
// `;
