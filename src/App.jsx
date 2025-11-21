import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Education from "./components/Education";
import "./scss/main.scss";

function App() {
	return (
		<div>
			<Navigation />
			<Home />
			<Project />
			<Education />
			<Footer />
		</div>
	);
}
export default App;
