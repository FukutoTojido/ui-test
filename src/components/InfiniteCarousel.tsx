import "./InfiniteCarousel.css";
import { Fragment } from "react";

const Logos = () => {
	return (
		<div className="logos">
			{[...Array(30).fill(null)].map((_: null, idx: number) => {
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Fragment key={idx}>
						<img src="/adidas.png" alt="" />
						<img src="/nike.png" alt="" />
					</Fragment>
				);
			})}
		</div>
	);
};

export default function InfiniteCarousel() {
	return (
		<div className="inf">
			<div className="logosWrapper">
				<Logos />
				<Logos />
			</div>
			<div className="gradient" />
		</div>
	);
}
