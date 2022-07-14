import Detail from "components/Detail";
import Home from "components/Home";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const uri = process.env.REACT_APP_REQUEST_URI;
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
					<Route path="/:id" element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
