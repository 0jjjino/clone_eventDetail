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
	width: 100%;
	background-color: #ffffff;

	&.bottom {
		bottom: 0;
	}

	&.top {
		top: 0;
	}
`;
