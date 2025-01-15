import "./Arrow.css";

type ArrowStyle = {
	type: "Outlined" | "Filled";
	color?: string;
	size: number;
};

export default function Arrow({ type, color, size }: ArrowStyle) {
	return (
		<div
			className="arrow"
			style={{
				backgroundColor: color ?? "transparent",
				width: size ?? 0,
				height: size ?? 0,
			}}
		>
			<img src={type === "Outlined" ? "/outlined.svg" : "/arrow.svg"} alt="" />
		</div>
	);
}
