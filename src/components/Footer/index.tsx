import "./style.css"
const Footer = () => {
	return (
		<div>
			<div className="footer-bar">
				<div className="footer-logo-box">
					<img src="icons\svg-footer\svg" alt="logo" />
				</div>
				<div>
					<h2>ԱՐՏԱԴՐԱՆՔ</h2>
					<ul>
						<li>ՀԵՂՈՒԿՆԵՐ</li>
						<li>ՔՍՈՒՔՆԵՌ</li>
						<li>ՅՈՒՂԵՐ</li>
						<li>ՈԳԵԹՈՒՐՄԵՐ</li>
						<li>ՓՈՇԻՆԵՐ</li>
						<li>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</li>
					</ul>
				</div>
				<div>
					<h2>ԿԱՊ ՄԵԶ ՀԵՏ</h2>
					<p>
						<img src="icons/iconsLoc/phone/svg" alt="icon-phone" />
						Զանգահարեք: +374 90 000 000
					</p>
					<p>
						<img src="icons/iconsLoc/email/svg" alt="icon-email" />
						Էլ հասցե:@mail.ru
					</p>
					<p>
						<img src="icons/iconsLoc/loc/svg" alt="icon-loc" />
						Երևան
					</p>
				</div>
				<div>
					<h2>ՓՆՏՐԵՔ ՄԵԶ:</h2>
					<img src="icons/iconsSC/instagram/svg" alt="icon-instagram" />
					<img src="icons/iconsSC/twitter/svg" alt="icon-twitter" />
					<img src="icons/iconsSC/facebook/svg" alt="icon-facebook" />
				</div>
			</div>
				<div >By ArmCoding 2022 Բոլորի իրավունքները պաշտպանված են </div>
		</div>
	);
};

export default Footer;
