import { Routes, Route } from "react-router-dom";
import LayoutProduct from "src/components/LayoutProduct";
const Product = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<LayoutProduct />}></Route>
			</Routes>
		</>
	);
};

export default Product;
