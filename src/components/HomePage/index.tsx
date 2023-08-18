import PageInfo from "src/components/PageInfo";

import PageSecondItem from "./homePageItems/PageProducts";

const HomePage = () => {
	return (
		<>
			<div>
				<PageInfo
					name={"ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ"}
					text={`Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և
					ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;`}
					img={"photos/svg"}
				/>
				<PageSecondItem />
			</div>
		</>
	);
};

export default HomePage;
