import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface propsType {
	height: number;
	children: ReactNode;
}

function FixedContainer({ height, children }: propsType) {
	return (
		<Container height={height} className={height === 80 ? "bottom" : "top"}>
			{children}
		</Container>
	);
}

export default FixedContainer;

const Container = styled.div<propsType>`
	position: fixed;
	box-sizing: border-box;
	width: 100%;
	height: ${props => props.height}px;
	background-color: #ffffff;
	z-index: 100;

	&.bottom {
		bottom: 0;
	}

	&.top {
		top: 0;
	}
`;
