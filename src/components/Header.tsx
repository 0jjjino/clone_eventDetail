import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

import backIcon from "../image/backIcon.svg";
import basket from "../image/basket.svg";
import FixedContainer from "./Common/FixedContainer";
import Icon from "./Common/Icon";

function Header() {
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<FixedContainer height={56}>
			<OuterContainer>
				<InnerContainer>
					<Icon
						width={24}
						height={24}
						src={backIcon}
						onIconClick={handleBackClick}
					/>
					<Title>이벤트</Title>
				</InnerContainer>
				<Icon width={24} height={24} src={basket} />
			</OuterContainer>
		</FixedContainer>
	);
}

export default Header;

const OuterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 14px 16px 14px 24px;
`;

const InnerContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Title = styled.div`
	height: 28px;
	margin-left: 40px;
	font-size: 19px;
	font-weight: 400;
	font-family: "Open Sans", sans-serif;
	line-height: 28px;
`;
