import styled from "@emotion/styled";
import React, { MouseEventHandler } from "react";

interface propsType {
	onIconClick?: MouseEventHandler<HTMLImageElement>;
	src: string;
}

function Icon({ src, onIconClick }: propsType) {
	return <IconContainer src={src} onClick={onIconClick} />;
}

export default Icon;

const IconContainer = styled.img`
	width: 24px;
	height: 24px;
`;
