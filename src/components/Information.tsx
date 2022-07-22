import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React, { useCallback, useState } from "react";
import { useQuery } from "react-query";

import open from "../image/open.svg";
import close from "../image/close.svg";

import FreeSpace from "./Common/FreeSpace";
import Icon from "./Common/Icon";
import TitleTab from "./Common/TitleTab";
import BigButton from "./Common/BigButton";

function Information() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const {
		eventDetailStartText: eventStart,
		eventDetailEndText: eventEnd,
		eventDetailCommonText: eventCommon,
	} = data.data.results.eventDetailDescription;
	const {
		customerName: hospital,
		customerAddress: address,
		customerHour: hour,
		customerTel: tel,
	} = data.data.results.product;

	const [isShow, setIsShow] = useState(false);

	const handleButtonClick = useCallback(() => {
		setIsShow(!isShow);
	}, [isShow]);

	return (
		<Container>
			<TitleTab title="시술정보" />
			<Info>
				<MiniTitle>이용정보</MiniTitle>
				<Explain className="usage">
					<div>- 유효기간 : 결제일로부터 180일</div>
					<div>- 여러장 구입시 유효기간 : 1년</div>
					<div>- 결제 14일 이내 취소 요청 시, 100% 자동 환불 처리</div>
					<div>- 예약 취소 및 변경은 최소 1일 전까지 가능</div>
				</Explain>
				<MiniTitle>병원정보</MiniTitle>
				<Explain className="hospital">
					<div>병원명 : {hospital}</div>
					<div>주소 : {address}</div>
					<div>예약 : {tel}</div>
					<FreeSpace height={20} />
					<div>[ 진료시간 ]</div>
					<div>{hour.replaceAll("\r\n", "\n")}</div>
					{/* {hour.split("\r\n").map((value: string) => (
						<div key={value}>{value}</div>
					))} */}
					<FreeSpace height={20} />
					<div>- 전화 예약 후 방문하시면 됩니다.</div>
					<div>- 예약 번호는 결제 시 문자메시지로 발송됩니다.</div>
					<div>(발송이 안된 경우, 마이페이지에서 확인이 가능합니다.)</div>
					<FreeSpace height={20} />
					<div>
						- 여신티켓은 회원간의 예약 및 온라인 수납 정보 시스템을 제공할 뿐,
						모든 의료 상담 및 의료 서비스는 각 병의원이 직접 수행하며, 모든
						병의원은 독립적으로 의료 서비스를 제공합니다.
					</div>
					<div>
						- 결제 시스템과 관련된 취소 및 환불의 의무와 책임은 해당 병의원에
						있습니다.
					</div>
				</Explain>
			</Info>
			<Detail className={isShow ? "" : "close"}>
				<div dangerouslySetInnerHTML={{ __html: eventStart }} />
				<div dangerouslySetInnerHTML={{ __html: eventEnd }} />
				<div dangerouslySetInnerHTML={{ __html: eventCommon[0] }} />
				<MoreContainer className={isShow ? "open" : "close"}>
					<BigButton
						onButtonClick={handleButtonClick}
						ment={isShow ? "시술정보 접기" : "시술정보 더보기"}
					>
						<Icon width={20} height={20} src={isShow ? close : open} />
					</BigButton>
				</MoreContainer>
			</Detail>
		</Container>
	);
}

export default Information;

const Container = styled.div`
	position: relative;
`;

const Info = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding: 12px 16px 48px;
`;

const MiniTitle = styled.div`
	box-sizing: border-box;
	height: 25px;
	padding: 6px 0 6px 8px;
	background-color: #f7f7f7;
	font-size: 13px;
	font-weight: 700;
	font-family: "Noto Sans KR", sans-serif;
	line-height: 13px;
`;

const Explain = styled.div`
	font-size: 13px;
	font-weight: 400;
	font-family: "Open Sans", sans-serif;
	line-height: 20px;
	white-space: pre-line;

	&.usage {
		padding: 12px 0px 24px 8px;
	}

	&.hospital {
		padding: 12px 0px 0px 8px;
	}
`;

const Detail = styled.div`
	overflow: hidden;

	&.close {
		height: 1500px;
	}
`;

const MoreContainer = styled.div`
	z-index: 10;
	box-sizing: border-box;
	width: 100%;
	padding: 0 16px;

	&.open {
		height: 100px;
	}

	&.close {
		position: absolute;
		bottom: -2px;
		height: 240px;
		background: linear-gradient(
			360deg,
			#ffffff 46.25%,
			rgba(255, 255, 255, 0) 100%
		);
	}
`;
