import SinglePhoto from "src/components/SinglePhoto";
import "./style.css";

const PageProductsList = () => {
	return (
		<div className="pageProductsList-container">
			<h2>ԱՐՏԱԴՐԱՆՔ</h2>
			<div className="container">
				<SinglePhoto />
				<SinglePhoto />
				<SinglePhoto />
			</div>
			<div className="pageProductsList-button">
				<button>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
			</div>
		</div>
	);
};

export default PageProductsList;
