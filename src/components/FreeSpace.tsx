import styled from "@emotion/styled";
import React from "react";

interface propsType {
	width?: number;
	height?: number;
}

function FreeSpace({ width, height }: propsType) {
	return <Space height={height} width={width} />;
}

export default FreeSpace;

const Space = styled.div<propsType>`
	min-width: ${props => props.width}px;
	max-width: ${props => props.width}px;
	height: ${props => props.height}px;
`;
