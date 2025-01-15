import "./App.css";
import Arrow from "./components/Arrow";
import Banner from "./components/Banner";
import InfiniteCarousel from "./components/InfiniteCarousel";
import ModuleOne from "./components/ModuleOne";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div className="main">
			<a href="#/" className="randomPromotion">
				<span>In condimentum dignissim felis</span>
				<Arrow type="Outlined" size={24} />
			</a>
			<Navigation />
			<Banner />
			<InfiniteCarousel />
			<ModuleOne />
		</div>
	);
}

export default App;
