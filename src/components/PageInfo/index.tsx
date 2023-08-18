import "./style.css";

interface IPageInfo {
	name: string;
	text: string;
	img:string;
}
const PageInfo = ({ name, text, img }: IPageInfo) => {
	return (
		<div className="pageInfo-box">
			<div className="pageInfo-text">
				<h2>{name}</h2>
				<p>
					{text}
				</p>
				<button>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
			</div>
			<div className="pageInfo-photo">
				<img src={img} alt="photos" />
			</div>
		</div>
	);
};

export default PageInfo;
