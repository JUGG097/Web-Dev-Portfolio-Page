import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function MainComponent(props) {
	return (
		<div>
			<Header />
			<TransitionGroup>
				<CSSTransition
					key={props.location.key}
					classNames="page"
					timeout={1000}
				>
					<Switch>
						<Route path="/home" component={Home} />

						<Route path="/projects" component={Projects} />

						<Redirect to="/home" />
					</Switch>
				</CSSTransition>
			</TransitionGroup>

			<Footer />
		</div>
	);
}

export default withRouter(MainComponent);
