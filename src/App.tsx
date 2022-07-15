import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EventInfo from "pages/EventInfo";
import Home from "pages/Home";

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnMount: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<EventInfo />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
