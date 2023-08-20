import { Outlet } from 'react-router-dom';
import MinHeader from 'src/components/MinHeader';

const LayoutProduct = () => {
  return (
		<>
			<header>
				<MinHeader />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default LayoutProduct