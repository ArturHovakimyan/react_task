import PartnersPage from "src/components/PartnersPages";
import "./style.css";
const Partners = () => {
     return (
				<div className={"partners-container"}>
					<span className={"partners-header"}>ԳՈՐԾԸՆԿԵՐՆԵՐ</span>
					<div className={"partners-badges"}>
						<PartnersPage/>
						<PartnersPage/>
						<PartnersPage/>
						<PartnersPage/>
						<PartnersPage/>
						<PartnersPage/>
					</div>
					<button className={"partners-btn"}>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
				</div>
			);
}

export default Partners