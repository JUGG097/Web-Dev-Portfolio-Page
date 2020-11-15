import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<Jumbotron style={{ backgroundColor: "#98C1D9" }} className="mb-0">
				<div className="container">
					<h2 className="display-5">Adeoluwa Adeboye</h2>
					<p className="lead">
						Website Development | Website Deployment
					</p>
					<p>
						<span className="badge badge-pill badge-primary">
							HTML
						</span>
						| CSS | JS| React.js | Bootstrap | ReactStrap | Font
						Awesome | Netlify
					</p>
				</div>
			</Jumbotron>

			<div className="wrapper-color">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-4 text-center mt-2">
							<img
								className="img-thumbnail rounded align-self-center"
								src="img/Adeoluwa_Adeboye.jpg"
								alt="Adeoluwa Adeboye"
								width="250px"
							></img>
						</div>
						<div className="col-12 col-sm-8 text-center mt-2 font-weight-bold">
							<p className="">
								My name is Adeoluwa Adeboye, I am active in the
								Web Development and Web Deployment ecosystem
								(geeks!!!).
							</p>

							<p className="">
								My Tech Stack: HTML, CSS, JS, Bootstrap and
								React.js, checkout my projects{" "}
								<Link to="/projects">here</Link>.
							</p>

							<p className="more-font">
								I also write articles occasionaly on Tech
								related topics and trends using platforms like
								Dev.to and Medium, check out my articles{" "}
								<Link to="/articles">here</Link>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
