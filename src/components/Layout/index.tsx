import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<header>
				<Link to="/blog">BlogPage</Link>
			</header>
           <Outlet />
           <footer>2023</footer>
		</>
	);
};

export default Layout;
