import "./Icon.css";

export default function Icon({
	url,
    size
}: {
	url: string;
    size: number
}) {
	return (
		<div className="icon" style={{
            width: size,
            height: size
        }}>
			<img src={url} alt="" />
		</div>
	);
}
