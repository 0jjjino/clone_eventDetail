import styled from "@emotion/styled";
import React, { useState } from "react";

import heart from "../image/heart.svg";
import filledHeart from "../image/filledHeart.svg";
import gift from "../image/gift.svg";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import Icon from "./Icon";
import FixedContainer from "./FixedContainer";

function BottomContainer() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const [isHeartClick, setIsHeartClick] = useState(false);
	const [wishCount, setWishCount] = useState(
		data.data.results.product.wishCount
	);

	const handleHeartClick = () => {
		setIsHeartClick(!isHeartClick);

		if (!isHeartClick) {
			setWishCount(wishCount + 1);
		}

		if (isHeartClick) {
			setWishCount(wishCount - 1);
		}
	};

	return (
		<FixedContainer height={80}>
			<InnerContainer>
				<IconContainer>
					{isHeartClick ? (
						<Icon src={filledHeart} onIconClick={handleHeartClick} />
					) : (
						<Icon src={heart} onIconClick={handleHeartClick} />
					)}
					<Title className={isHeartClick ? "like" : "disLike"}>
						{wishCount}
					</Title>
				</IconContainer>
				<Padding />
				<IconContainer>
					<Icon src={gift} />
					<Title className="gift">선물</Title>
				</IconContainer>
				<Padding />
				<Button>구매하기</Button>
			</InnerContainer>
		</FixedContainer>
	);
}

export default BottomContainer;

const InnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	padding: 0 16px;
`;

const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 50px;
	max-width: 50px;
	height: 48px;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20px;
	font-size: 13px;
	font-weight: 400;
	line-height: 20px;

	&.gift {
		font-family: "Noto Sans KR", sans-serif;
	}

	&.like {
		color: #ef4b81;
		font-weight: 700;
		font-family: "Open Sans", sans-serif;
	}

	&.dislike {
		font-family: "Open Sans", sans-serif;
	}
`;

const Padding = styled.div`
	min-width: 16px;
	max-width: 16px;
	height: 48px;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 48px;
	border: none;
	border-radius: 4px;
	background-color: #ef4b81;
	color: #ffffff;
	font-size: 17px;
	font-weight: 700;
`;
