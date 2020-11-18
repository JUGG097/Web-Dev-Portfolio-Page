import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function MainComponent() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/home" component={Home} />

				<Route path="/projects" component={Projects} />

				<Redirect to="/home" />
			</Switch>

			<Footer />
		</div>
	);
}

export default withRouter(MainComponent);
