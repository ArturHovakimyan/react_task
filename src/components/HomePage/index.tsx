import PageInfo from "src/components/PageInfo";
import PageProductsList from "../ProductsPage";
import Feedback from "src/components/Feedback";
import Partners from "src/components/Partners";

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
					text={"Մենք առաջարկում ենք բժշկական պարագաների ստերիլիզացում"}
					img={"photos/productInfoPhoto/productInfoPhotoSecond/svg"}
				/>
				<Partners />
				<Feedback />
			</div>
		</>
	);
};

export default HomePage;
