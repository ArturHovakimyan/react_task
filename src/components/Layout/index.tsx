import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

const Layout = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Layout;
