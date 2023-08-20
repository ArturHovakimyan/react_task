import { Routes, Route } from "react-router-dom";
import Layout from "src/components/Layout";
import AboutUs from "src/components/AboutUs";
import Product from "src/components/Product";
import Services from "src/components/Services";
import Partners from "src/components/Partners";
import Feedback from "src/components/Feedback";
import HomePage from "src/components/HomePage";
import NotfoundPage from "src/components/NotfoundPage";
import "src/App.css";
import ProductContentBI from "./components/ProductContent/ProductContentBI";
import ProductContentTA from "./components/ProductContent/ProductContentTA";
import ProductContentAN from "./components/ProductContent/ProductContentAN";
import ProductContentTO from "./components/ProductContent/ProductContentTO";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="aboutus" element={<AboutUs />} />
					<Route path="product" element={<Product />}>
						<Route path="bi" element={<ProductContentBI />} />
						<Route path="ta" element={<ProductContentTA />} />
						<Route path="an" element={<ProductContentAN />} />
						<Route path="to" element={<ProductContentTO />} />
					</Route>
					<Route path="services" element={<Services />} />
					<Route path="partners" element={<Partners />} />
					<Route path="feedback" element={<Feedback />} />
					<Route path="*" element={<NotfoundPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
