import React, { useState } from "react";
import styled from "@emotion/styled";

import star from "../image/star.svg";
import greyStar from "../image/greyStar.svg";
import Icon from "./Icon";
import FreeSpace from "./FreeSpace";

interface propsTypes {
	average: string;
}

function StarCount({ average }: propsTypes) {
	const [yellowStar, setYellowStar] = useState(
		Math.round(Math.round(Number(average)) / 2)
	);

	return (
		<Container>
			{yellowStar > 0 ? (
				[...Array(yellowStar)].map((value, index) => (
					<Icon width={16} height={16} src={star} key={index + star} />
				))
			) : (
				<></>
			)}
			{5 - yellowStar > 0 ? (
				[...Array(greyStar)].map((value, index) => (
					<Icon width={16} height={16} src={greyStar} key={index + greyStar} />
				))
			) : (
				<></>
			)}
			<FreeSpace width={5} />
			{isNaN(Number(average)) ? <></> : <Score>{average}</Score>}
		</Container>
	);
}

export default StarCount;

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Score = styled.div`
	font-size: 11px;
	font-family: "Open Sans", sans-serif;
	font-weight: 700;
	line-height: 16px;
`;
