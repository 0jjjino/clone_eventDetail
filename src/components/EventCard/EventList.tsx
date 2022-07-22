import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";

import FreeSpace from "../Common/FreeSpace";
import TitleTab from "../Common/TitleTab";
import EventCard from "./EventCard";

function EventList() {
	const { data }: AxiosResponse["data"] = useQuery("eventDetail");
	const { relatedProducts: products } = data.data.results;

	return (
		<>
			<TitleTab title="진행중인 이벤트" />
			<FreeSpace height={16} />
			<Container>
				{products.map((product: AxiosResponse["data"]) => (
					<EventCard key={product.productCode} data={product} />
				))}
			</Container>
			<FreeSpace height={20} />
		</>
	);
}

export default EventList;

const Container = styled.div`
	display: flex;
	overflow-x: scroll;
	margin-left: 16px;
`;
