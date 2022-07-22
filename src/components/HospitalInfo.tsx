import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";

import FreeSpace from "./Common/FreeSpace";

function HospitalInfo() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const { businessNumber, ceoName, customerAddress, customerName } =
		data.data.results.product;

	return (
		<Container>
			<Info>
				{customerName} | 대표 {ceoName}
			</Info>
			<Info>사업자등록번호 {businessNumber}</Info>
			<Info>{customerAddress}</Info>
			<FreeSpace height={12} />
			<Info className="copyright">
				Copyright © {customerName} All rights reserved.
			</Info>
		</Container>
	);
}

export default HospitalInfo;

const Container = styled.div`
	box-sizing: border-box;
	height: 172px;
	padding: 24px 0 52px;
	background-color: #f7f7f7;
	text-align: center;
`;

const Info = styled.div`
	color: #a8a8a8;
	font-size: 11px;
	font-weight: 400;
	font-family: "Noto Sans KR", sans-serif;
	line-height: 16px;

	&.copyright {
		font-size: 13px;
		font-weight: 700;
		line-height: 20px;
	}
`;
