import "./style.css";
import { NavLink } from "react-router-dom";


const Header = () => {
	return (
		<div className="header">
			<div className="universal-header">
				<NavLink to="/">
					<img
						src="icons/svg-header/svg"
						alt="logo"
					/>
				</NavLink>
			</div>
			<div className="nav-list">
				<span>
					<NavLink to="/">ԳԼԽԱՎՈՐ</NavLink>
				</span>
				<span>
					<NavLink to="/aboutus">ՄԵՐ ՄԱՍԻՆ</NavLink>
				</span>
				<span>
					<NavLink to="/product">ԱՐՏԱԴՐԱՆՔ</NavLink>
				</span>
				<span>
					<NavLink to="/services">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</NavLink>
				</span>
				<span>
					<NavLink to="/partners">ԳՈՐԾԸՆԿԵՐՆԵՐ</NavLink>
				</span>
				<span>
					<NavLink to="/feedback">ՀԵՏԱԴԱՐՁ ԿԱՊ</NavLink>
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
