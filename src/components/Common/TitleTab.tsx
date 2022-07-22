import styled from "@emotion/styled";
import React from "react";

import rightArrow from "../../image/rightArrow.svg";
import Icon from "./Icon";

interface propTypes {
	title: string;
	count?: number;
}

function TitleTab({ title, count }: propTypes) {
	return (
		<Container>
			<Title>
				{title} {count ? count : ""}
			</Title>
			{count ? <Icon width={13} height={21.27} src={rightArrow} /> : <></>}
		</Container>
	);
}

export default TitleTab;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	height: 56px;
	padding: 0 16px;
`;

const Title = styled.div`
	font-size: 17px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 500;
	line-height: 25px;
`;
