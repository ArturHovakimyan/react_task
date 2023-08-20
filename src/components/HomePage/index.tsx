import PageInfo from "src/components/PageInfo";
import PageProductsList from "../ProductsPage";
import Feedback from "src/components/Feedback";
import PartnersList from "src/components/PartnersList";
import "./style.css"

const HomePage = () => {
	return (
		<>
			<div>
				<PageInfo
					name={"ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ"}
					text={`Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և
					ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;`}
					img={"photos/productInfoPhoto/productInfoPhotoFirst/svg"}
				/>
				<PageProductsList />
				<PageInfo
					name={"ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ"}
					text="Մենք առաջարկում ենք բժշկական պարագաների ստերիլիզացում"
					img="photos/productInfoPhoto/productInfoPhotoSecond/svg"
				/>
				<div className="home-page-conteiner">
					<div className="home-page-span">
						<span className="partners-header">ԳՈՐԾԸՆԿԵՐՆԵՐ</span>
					</div>
					<div className="home-page-conteiner-partnors-list">
						<PartnersList />
					</div>
					<div className="home-page-btn">
						<button className="partners-btn">ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
					</div>
				</div>
				<Feedback />
			</div>
		</>
	);
};

export default HomePage;
