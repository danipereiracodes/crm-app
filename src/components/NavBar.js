import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<nav>
			<div className="logo-container">
				<h1>LOGO</h1>
			</div>
			<div className="controls-container">
				<div className="icon" onClick={() => navigate("/ticket")}>
					Ticket
				</div>
				<div className="icon" onClick={() => navigate("/")}>
					Home
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
