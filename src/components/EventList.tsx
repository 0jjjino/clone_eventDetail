import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";
import EventCard from "./EventCard";
import FreeSpace from "./FreeSpace";
import TitleTab from "./TitleTab";

function EventList() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const { relatedProducts: products } = data.data.results;

	return (
		<>
			<TitleTab title="진행중인 이벤트" />
			<FreeSpace height={16} />
			<OuterContainer>
				<InnerContainer>
					{products.map((product: AxiosResponse["data"]) => (
						<EventCard key={product.productCode} data={product} />
					))}
				</InnerContainer>
			</OuterContainer>
			<FreeSpace height={20} />
		</>
	);
}

export default EventList;

const OuterContainer = styled.div`
	display: flex;
`;

const InnerContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	margin-left: 16px;
`;
