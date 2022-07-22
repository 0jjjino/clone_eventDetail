import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";

import eventStar from "../../image/eventStar.svg";
import FreeSpace from "../Common/FreeSpace";
import Icon from "../Common/Icon";

interface propTypes {
	data: AxiosResponse["data"];
}

function EventCard({ data }: propTypes) {
	const { name, price, rateScore, reviewCount, thumbnailImageUrl: src } = data;

	return (
		<Card>
			<ImgContainer>
				<Img src={src} />
				{reviewCount ? (
					<StarContainer>
						<Icon width={20} height={20} src={eventStar} />
						<Letter className="star">
							{((rateScore / reviewCount) * 2).toFixed(1)}
						</Letter>
					</StarContainer>
				) : (
					<></>
				)}
			</ImgContainer>
			<FreeSpace height={4} />
			<Letter className="name">{name}</Letter>
			<PriceContainer>
				<Letter className="price">{price}</Letter>
				<FreeSpace width={4} />
				<Letter className="won">원</Letter>
			</PriceContainer>
		</Card>
	);
}

export default EventCard;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 12px;
`;

const ImgContainer = styled.div`
	position: relative;
`;

const StarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 51px;
	height: 28px;
	border-radius: 0px 4px;
	background-color: #3d3d3d;
	opacity: 0.85;
	text-align: center;
	vertical-align: middle;
	z-index: 5;
`;

const Img = styled.img`
	width: 96px;
	height: 96px;
	border-radius: 4px;
`;

const Letter = styled.div`
	font-size: 13px;
	font-family: "Open Sans", sans-serif;
	line-height: 20px;
	font-weight: 400;

	&.name {
		color: rgb(168, 168, 168);
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-word;
		min-height: 40px;
	}

	&.price {
		white-space: pre-line;
		font-weight: 700;
	}

	&.won {
		white-space: pre-line;
		font-family: "Noto Sans KR", sans-serif;
	}

	&.star {
		display: flex;
		justify-content: flex-end;
		-webkit-box-align: center;
		align-items: center;
		bottom: 0px;
		flex-wrap: wrap;
		line-height: 16px;
		color: rgb(255, 255, 255);
		font-weight: 700;
		font-family: "Noto Sans KR", sans-serif;
	}
`;

const PriceContainer = styled.div`
	display: flex;
`;
