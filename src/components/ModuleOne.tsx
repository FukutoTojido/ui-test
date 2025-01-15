import Card from "./Card";
import "./ModuleOne.css";

export default function ModuleOne() {
	return (
		<div className="moduleOne">
			<div className="content">
				<div className="heading">
					Sed eget <span>ante leo</span>.
				</div>
				<div className="text">
					Nam condimentum lectus vel varius auctor. Maecenas interdum elementum
					ante, ut consectetur tellus laoreet non. Etiam enim leo, efficitur in
					risus et.
				</div>
			</div>
			<img src="/ufo.png" alt="" className="bigBanner" />
			<Card
				iconURL="/star.svg"
				heading="Fist of Fury"
				text="Nam condimentum lectus vel varius auctor. Maecenas interdum elementum ante, ut consectetur"
			/>
			<Card
				iconURL="/saturn.svg"
				heading="Enter the Dragon"
				text="Nam condimentum lectus vel varius auctor. Maecenas interdum elementum ante, ut consectetur"
			/>
		</div>
	);
}
