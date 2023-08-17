import { Routes, Route } from "react-router-dom";
import NotfoundPage from "src/components/NotfoundPage";
import Layout from "src/components/Layout";
import Header from "src/components/Header";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="*" element={<NotfoundPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
