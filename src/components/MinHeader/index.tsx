import { NavLink } from "react-router-dom";
import "./style.css"
const MinHeader = () => {
  return (
		<div className="min-header">
			<span>
				<NavLink to="bi">ԲԻՆՏԵՐ</NavLink>
			</span>
			<span>
				<NavLink to="ta">ԹԱՆԶԻֆՆԵՐ</NavLink>
			</span>
			<span>
				<NavLink to="an">ԱՆՁԵՌՈՑԻԿՆԵՌ</NavLink>
			</span>
			<span>
				<NavLink to="to">ԹՈՓԵՐ</NavLink>
			</span>
		</div>
	);
}

export default MinHeader