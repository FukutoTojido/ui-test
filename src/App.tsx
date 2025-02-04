import "./App.css";
import Arrow from "./components/Arrow";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InfiniteCarousel from "./components/InfiniteCarousel";
import ModuleFour from "./components/ModuleFour";
import ModuleOne from "./components/ModuleOne";
import ModuleThree from "./components/ModuleThree";
import ModuleTwo from "./components/ModuleTwo";
import Navigation from "./components/Navigation";
import Phone from "./components/Phone";

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
			<ModuleTwo />
			<ModuleThree />
			<ModuleFour />
			<Phone />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
