import styled from "@emotion/styled";
import React, { ReactNode } from "react";

import FreeSpace from "./FreeSpace";

interface propTypes {
	onButtonClick?: React.MouseEventHandler<HTMLDivElement>;
	ment: string;
	children: ReactNode;
}

function BigButton({ onButtonClick, ment, children }: propTypes) {
	return (
		<Button
			className={ment === "시술문의 더보기" ? "" : "absolute"}
			onClick={onButtonClick}
		>
			<Ment>{ment}</Ment>
			<FreeSpace width={10} />
			{children}
		</Button>
	);
}

export default BigButton;

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	width: calc(100% - 32px);
	height: 48px;
	border: 1px solid #e6e6e6;
	border-radius: 4px;
	background-color: white;

	&.absolute {
		position: absolute;
		bottom: 41px;
	}
`;

const Ment = styled.div`
	display: flex;
	height: 22px;
	font-size: 15px;
	font-family: "Noto Sans KR", sans-serif;
	font-weight: 500;
	line-height: 22px;
`;
