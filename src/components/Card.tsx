import "./Card.css";
import Icon from "./Icon";

export default function Card({
	iconURL,
	heading,
	text,
	buttonText,
}: {
	iconURL: string;
	heading: string;
	text: string;
	buttonText?: string;
}) {
	return (
		<div className="card">
			<Icon url={iconURL} size={70} />
			<div className="content">
				<div className="heading">{heading}</div>
				<div className="text">{text}</div>
			</div>
			{buttonText ? <button type="button" className="buttonText">{buttonText}</button> : ""}
		</div>
	);
}
