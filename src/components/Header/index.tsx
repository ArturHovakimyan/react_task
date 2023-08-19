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
					<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.21094 1L3.80041 4.45263L6.82146 1" stroke="#A99E9E" strokeWidth="0.863158"/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Header;
