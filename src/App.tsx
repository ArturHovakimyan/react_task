import { Routes, Route } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import AboutPage from 'src/components/AboutPage';
import BlogPage from 'src/components/BlogPage';
import NotfoundPage from 'src/components/NotfoundPage';
import Layout from 'src/components/Layout';


const App = () => {
  return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>}>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="*" element={<NotfoundPage />} />
        </Route>
			</Routes>
		</>
	);
}

export default App;
