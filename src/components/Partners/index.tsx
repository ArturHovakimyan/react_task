import "./style.css"
import PartnersPage from "src/components/PartnersPages";

const PartnersList = () => {
	return (
		<div className="partners-container">
			<div className="partners-smoll-container">
				<div className="partners-badges">
					<PartnersPage />
					<PartnersPage />
					<PartnersPage />
					<PartnersPage />
					<PartnersPage />
					<PartnersPage />
				</div>
			</div>
		</div>
	);
};

export default PartnersList;