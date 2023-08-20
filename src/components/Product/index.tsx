import { Outlet } from "react-router-dom";
import MinHeader from "src/components/MinHeader";


const Product = () => {
	return (
		<>
			<MinHeader />
			<Outlet/>
		</>
	);
};

export default Product;
