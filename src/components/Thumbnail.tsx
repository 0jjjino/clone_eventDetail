import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";

import share from "../image/share.svg";
import phone from "../image/phone.svg";
import FreeSpace from "./FreeSpace";
import Icon from "./Icon";
import StarCount from "./StarCount";

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
						<Name>{hospital}</Name>
						<Location>{location}</Location>
					</Detail>
				</HospitalContainer>
				<FreeSpace height={12} />
				<Title>{title}</Title>
				<FreeSpace height={4} />
				<Comment>{comment}</Comment>
				<FreeSpace height={4} />
				<ScoreContainer>
					<StarCount average={average} />
					{mobileReservation === "Y" ? (
						<Reservation>모바일예약</Reservation>
					) : (
						<></>
					)}
				</ScoreContainer>
				<FreeSpace height={8.5} />
				<PriceContainer>
					<Container>
						<Price>{price}</Price>
						<Won>원</Won>
						<FreeSpace width={4} />
						<Vat>(VAT 포함)</Vat>
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
	z-index: 0;
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

const Name = styled.div`
	font-weight: 700;
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	line-height: 20px;
`;

const Location = styled.div`
	color: #a8a8a8;
	font-weight: 400;
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	line-height: 16px;
`;

const Title = styled.div`
	font-size: 15px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 500;
	line-height: 22px;
`;

const Comment = styled.div`
	color: #a8a8a8;
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 400;
	line-height: 20px;
	white-space: normal;
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

const Reservation = styled.div`
	color: rgb(239, 75, 129);
	font-size: 13px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 700;
	line-height: 20px;
`;

const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Price = styled.div`
	font-size: 21px;
	font-family: "Open Sans", sans-serif;
	font-weight: 700;
	line-height: 31px;
`;

const Won = styled.div`
	font-size: 16px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 500;
	line-height: 25px;
`;

const Vat = styled.div`
	font-size: 11px;
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	line-height: 16px;
`;
