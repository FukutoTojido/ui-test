import Card from "./Card";
import "./ModuleFour.css";

export default function ModuleFour() {
	return (
		<div className="moduleFour">
			<div className="content">
				<div className="heading">Donec ac neque porta fringilla.</div>
				<div className="text">
					Nam condimentum lectus vel varius auctor. Maecenas interdum elementum
					ante, ut consectetur tellus laoreet non. Etiam enim leo, efficitur in
					risus et.
				</div>
			</div>
			<div className="grid">
				<img src="/jupiter.png" alt="" />
				<Card
					iconURL="/jupiter.svg"
					heading="Nulla dapibus"
					text="Etiam tempus euismod conse. Phasellus erat risus, porta a facilisis sed, accumsan a dui."
					buttonText="LEARN MORE"
				/>
				<Card
					iconURL="/rocket.svg"
					heading="Sed eget ante leo."
					text="lectus vel varius auctor. Maecenas interdum elementum ante."
					buttonText="LEARN MORE"
				/>
				<img src="/astronaut.png" alt="" />
				<Card
					iconURL="/lander.svg"
					heading="Gain consumer."
					text="Etiam tempus euismod conse. Phasellus erat risus, porta a facilisis sed, accumsan a dui."
					buttonText="LEARN MORE"
				/>
				<Card
					iconURL="/hexagon.svg"
					heading="Elementum ante."
					text="Etiam tempus euismod conse. Phasellus erat risus, porta a facilisis sed, accumsan a dui."
					buttonText="LEARN MORE"
				/>
			</div>
		</div>
	);
}
