import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./scss/main.scss";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

function App() {
	return (
		<div>
			<Navigation />

			<About />
			<Experiences />
			<Project />
			<Skills />
			<Footer />
		</div>
	);
}
export default App;
