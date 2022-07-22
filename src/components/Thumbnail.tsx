import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";

import share from "../image/share.svg";
import phone from "../image/phone.svg";
import FreeSpace from "./Common/FreeSpace";
import StarCount from "./Common/StarCount";
import Icon from "./Common/Icon";

function Thumbnail() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const {
		thumbnailImageUrl: mainImg,
		customerThumbnailImageUrl: hospitalImg,
		customerName: hospital,
		locationName: location,
		name: title,
		comment,
		rateScore,
		reviewCount,
		reservationYn: mobileReservation,
		price,
	} = data.data.results.product;

	const [average, setAverage] = useState(
		((rateScore / reviewCount) * 2).toFixed(1)
	);

	return (
		<>
			<FloatInfo>이 페이지는 {hospital}에서 운영중입니다.</FloatInfo>
			<MainImg src={mainImg} />
			<OuterContainer>
				<HospitalContainer>
					<HospitalImg src={hospitalImg} />
					<FreeSpace width={12} height={44} />
					<Detail>
						<Letter className="name">{hospital}</Letter>
						<Letter className="location">{location}</Letter>
					</Detail>
				</HospitalContainer>
				<FreeSpace height={20} />
				<Letter className="title">{title}</Letter>
				<FreeSpace height={8} />
				<Letter className="comment">{comment}</Letter>
				<FreeSpace height={8} />
				<ScoreContainer>
					<StarCount average={average} />
					{mobileReservation === "Y" ? (
						<Letter className="reservation">모바일예약</Letter>
					) : (
						<></>
					)}
				</ScoreContainer>
				<FreeSpace height={8.5} />
				<PriceContainer>
					<Container>
						<Letter className="price">{price}</Letter>
						<Letter className="won">원</Letter>
						<FreeSpace width={4} />
						<Letter className="vat">(VAT 포함)</Letter>
					</Container>
					<Container>
						<Icon width={24} height={24} src={phone} />
						<FreeSpace width={24} />
						<Icon width={24} height={24} src={share} />
					</Container>
				</PriceContainer>
			</OuterContainer>
		</>
	);
}

export default Thumbnail;

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 100%;
	padding: 16px;
`;

const MainImg = styled.img`
	width: 100%;
	height: auto;
`;

const FloatInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 56px;
	left: 0;
	width: 100%;
	height: 28px;
	background: rgba(0, 0, 0, 0.5);
	color: #ffffff;
	font-size: 11px;
	font-weight: 700;
	line-height: 28px;
`;

const HospitalContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 44px;
`;

const HospitalImg = styled.img`
	width: 44px;
	height: 44px;
	border: 1px solid rgba(61, 61, 61, 0.1);
	border-radius: 70px;
`;

const Detail = styled.div`
	display: flex;
	flex-direction: column;
`;

const ScoreContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 16px;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Letter = styled.div`
	font-size: 13px;
	font-weight: 400;
	font-family: "Noto Sans KR", sans-serif;

	&.price {
		font-size: 21px;
		font-weight: 700;
		font-family: "Open Sans", sans-serif;
		line-height: 31px;
	}

	&.won {
		font-size: 16px;
		font-weight: 500;
		line-height: 25px;
	}

	&.vat {
		font-size: 11px;
		font-family: "Open Sans", sans-serif;
		line-height: 16px;
	}

	&.name {
		font-weight: 700;
	}

	&.location {
		font-size: 11px;
		color: #a8a8a8;
		line-height: 16px;
	}

	&.title {
		font-size: 15px;
		font-weight: 500;
		line-height: 22px;
	}

	&.comment {
		color: rgb(168, 168, 168);
		white-space: normal;
	}

	&.reservation {
		color: rgb(239, 75, 129);
		font-weight: 700;
	}
`;
