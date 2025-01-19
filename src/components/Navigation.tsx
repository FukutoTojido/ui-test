import { useState } from "react";
import Arrow from "./Arrow";
import "./Navigation.css";

export default function Navigation() {
	const [drawer, setDrawer] = useState(false);

	return (
		<div className="header">
			<div className="drawer">
				<button type="button" onClick={() => setDrawer(!drawer)}>
					<img src="/hamburger.svg" alt="" />
				</button>
			</div>

			<div className={`navigation ${drawer ? "open" : "closed"}`}>
				<a href="/#" className="navItem">
					Home
				</a>
				<a href="/#" className="navItem">
					About us
				</a>
				<a href="/#" className="navItem">
					Contact
				</a>
			</div>
			<img src="/logo.svg" alt="" />
			<div className="buttonWrapper">
				<button type="button" className="button">
					<span>Get started</span>
					<Arrow type="Outlined" size={40} />
				</button>
			</div>
		</div>
	);
}
