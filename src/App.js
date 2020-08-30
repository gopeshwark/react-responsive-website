import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Containers/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./Containers/Contact/Contact";
import About from "./Containers/About/About";
import Services from "./Containers/Services/Services";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/services" component={Services} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
