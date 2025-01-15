import "./App.css";
import Arrow from "./components/Arrow";

function App() {
	return (
		<div className="main">
			<a href="#/" className="randomPromotion">
				<span>In condimentum dignissim felis</span>
				<Arrow type="Outlined" size={24} />
			</a>
		</div>
	);
}

export default App;
