import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";

import heart from "../image/heart.svg";
import filledHeart from "../image/filledHeart.svg";
import gift from "../image/gift.svg";
import FixedContainer from "./Common/FixedContainer";
import FreeSpace from "./Common/FreeSpace";
import Icon from "./Common/Icon";

function Footer() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const [isHeartClick, setIsHeartClick] = useState(false);
	const [wishCount, setWishCount] = useState(
		data.data.results.product.wishCount
	);

	const handleHeartClick = useCallback(() => {
		setIsHeartClick(!isHeartClick);

		if (!isHeartClick) {
			setWishCount(wishCount + 1);
		}

		if (isHeartClick) {
			setWishCount(wishCount - 1);
		}
	}, [isHeartClick]);

	return (
		<FixedContainer height={80}>
			<InnerContainer>
				<IconContainer>
					{isHeartClick ? (
						<Icon
							width={24}
							height={24}
							src={filledHeart}
							onIconClick={handleHeartClick}
						/>
					) : (
						<Icon
							width={24}
							height={24}
							src={heart}
							onIconClick={handleHeartClick}
						/>
					)}
					<Title className={isHeartClick ? "like" : ""}>{wishCount}</Title>
				</IconContainer>
				<FreeSpace width={16} height={80} />
				<IconContainer>
					<Icon width={24} height={24} src={gift} />
					<Title className="gift">선물</Title>
				</IconContainer>
				<FreeSpace width={16} height={80} />
				<Button>구매하기</Button>
			</InnerContainer>
		</FixedContainer>
	);
}

export default Footer;

const InnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 80px;
	padding: 16px;
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
	font-family: "Open Sans", sans-serif;
	line-height: 20px;

	&.gift {
		font-family: "Noto Sans KR", sans-serif;
	}

	&.like {
		color: #ef4b81;
		font-weight: 700;
	}
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
