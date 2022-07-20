import styled from "@emotion/styled";
import React, { MouseEventHandler } from "react";

interface propsType {
	onIconClick?: MouseEventHandler<HTMLImageElement>;
	src: string;
	width: number;
	height: number;
}

function Icon({ src, width, height, onIconClick }: propsType) {
	return (
		<IconContainer
			width={width}
			height={height}
			src={src}
			onClick={onIconClick}
		/>
	);
}

export default Icon;

const IconContainer = styled.img<propsType>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
`;
