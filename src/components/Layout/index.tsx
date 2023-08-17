import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<header>
				<Link to="/">HomePage</Link>
				<Link to="/about">AboutPage</Link>
				<Link to="/blog">BlogPage</Link>
			</header>
           <Outlet />
           <footer>2023</footer>
		</>
	);
};

export default Layout;
