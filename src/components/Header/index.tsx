import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<div className="universal-header">
				<h2>
					<Link to="/">Universal</Link>
				</h2>
			</div>
			<div className="nav-list">
				<span>
					<Link to="/">ԳԼԽԱՎՈՐ</Link>
				</span>
				<span>
					<Link to="">ՄԵՐ ՄԱՍԻՆ</Link>
				</span>
				<span>
					<Link to="">ԱՐՏԱԴՐԱՆՔ</Link>
				</span>
				<span>
					<Link to="">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link>
				</span>
				<span>
					<Link to="">ԳՈՐԾԸՆԿԵՐՆԵՐ</Link>
				</span>
				<span>
					<Link to="">ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>
				</span>

				<div className="image-box">
					<img
						src="icons/Wikipedia-Flags-AM-Armenia-Flag.1024.png"
						alt="flag"
						className="image"
					/>
					<img src="icons/2985150.png" alt="icon" className="image-icon" />
				</div>
			</div>
		</div>
	);
};

export default Header;
