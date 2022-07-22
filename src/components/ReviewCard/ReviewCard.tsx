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
				{imgList.length ? (
					<ImgContainer>
						<Img src={imgList[0]} />
						{imgList.length > 1 ? (
							<RemainImg>+{imgList.length}</RemainImg>
						) : (
							<></>
						)}
					</ImgContainer>
				) : (
					<></>
				)}
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
	border: 1px solid #e6e6e6;
	border-radius: 4px;
	background-color: #ffffff;
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
		min-width: 21px;
		font-family: "Noto Sans KR", sans-serif;
	}
`;

const ImgContainer = styled.div`
	position: relative;
	width: 64px;
	height: 64px;
	margin: 0px 8px 0px 0px;
`;

const Img = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 4px;
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
	white-space: pre-line;
	line-height: 16px;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Comment = styled.div`
	display: inline;
	width: 168px;
	height: 40px;
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 400;
	white-space: pre-line;
	line-height: 20px;
	text-overflow: ellipsis;
	overflow: hidden;

	&.more {
		padding: 0px 0px 0px 10px;
		color: rgb(168, 168, 168);
	}
`;

const RemainImg = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 30px;
	height: 28px;
	border-radius: 4px 0px;
	background: rgba(61, 61, 61, 0.85);
	color: rgb(255, 255, 255);
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 700;
	text-align: center;
	line-height: 28px;
`;
