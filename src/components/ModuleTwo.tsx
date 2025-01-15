import Icon from "./Icon";
import "./ModuleTwo.css";

export default function ModuleTwo() {
	return (
		<div className="moduleTwo">
			<div className="content">
				<div className="heading">Suche Job auf 450 Basis</div>
				<div className="text">
					Nam condimentum lectus vel varius auctor. Maecenas interdum elementum
					ante, ut consectetur tellus laoreet non. Etiam enim leo, efficitur in
					risus et.
				</div>
			</div>
			<div className="showcase">
				<img src="/nasa1.png" alt="" />
				<div>
					<div className="stats">
						<div className="heading">+21%</div>
						<div className="text">Pellentesque eu tortor nec quam.</div>
					</div>
					<Icon url="/helmet.svg" size={80} />
				</div>
				<div>
					<div className="stats">
						<img src="/moon.png" alt="" />
						<div className="heading">$500</div>
						<div className="text">Aliquam tristique cursus.</div>
					</div>
				</div>
				<img src="/planet.png" alt="" />
			</div>
		</div>
	);
}
