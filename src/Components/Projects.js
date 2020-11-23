import React from "react";
import { Jumbotron } from "reactstrap";

function Projects() {
	return (
		<div>
			<Jumbotron
				style={{ backgroundColor: "#98C1D9", paddingTop: "100px" }}
			>
				<div className="container mt-3">
					<h2 className="display-5 my-color">My Projects</h2>
					<p className="lead">
						Projects related to Web Development and Deployment
					</p>
				</div>
			</Jumbotron>

			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-4 text-center">
						<img
							className="img-thumbnail"
							src="https://via.placeholder.com/250"
							alt="PlaceHolder"
						></img>
					</div>
					<div className="col-12 col-sm-8 text-center mt-2">
						<h4 className="my-color font-weight-bold">
							Angelo Jerseys
						</h4>
						<p>
							Design and Development of the Landing page for a
							Jersey Sales Business. <br></br>
							Using: HTML, CSS, Bootstrap, FontAwesome, AOS and
							Netlify. <br></br>
							<a
								href="https://github.com/JUGG097/Angelo-Jersey"
								title="Angelo Jersey"
							>
								Angelo Jersey
							</a>
							<br></br>
							<a
								href="https://github.com/JUGG097/Angelo-Jersey"
								title="Angelo Jersey GitHub Repo"
							>
								GitHub Repo
							</a>
						</p>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 order-last col-sm-8 text-center mt-2">
						<h4 className="my-color font-weight-bold">
							Nigeria Covid-19 Cases Dashboard
						</h4>
						<p>
							Design and Development of Webpage for reporting the
							COVID-19 cases distribution in Nigeria.<br></br>
							Using: HTML, CSS, JS, Bootstrap, FontAwesome,
							FetchAPI and Netlify. <br></br>
							<a
								href="https://mycovid19-dashboard.netlify.app/#"
								title="COVID-19 Dashboard"
							>
								Nigeria COVID-19 Cases Dashboard
							</a>
							<br></br>
							<a
								href="https://github.com/JUGG097/Nigeria-Covid19-Dashboard"
								title="COVID-19 Dashboard GitHub Repo"
							>
								GitHub Repo
							</a>
						</p>
					</div>
					<div className="col-12 col-sm-4 text-center order-first order-sm-last">
						<img
							className="img-thumbnail"
							src="https://via.placeholder.com/250"
							alt="PlaceHolder"
						></img>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 col-sm-4 text-center">
						<img
							className="img-thumbnail"
							src="https://via.placeholder.com/250"
							alt="PlaceHolder"
						></img>
					</div>
					<div className="col-12 col-sm-8 text-center mt-2">
						<h4 className="my-color font-weight-bold">
							Simple Web Calculator
						</h4>
						<p>
							Design and Development of a simple calculator that
							runs on the web. <br></br>
							Using: HTML, CSS, JS, FontAwesome and Netlify.{" "}
							<br></br>
							<a
								href="https://webcalculator.netlify.app/"
								title="Web Calculator"
							>
								Web Calculator
							</a>
							<br></br>
							<a
								href="https://github.com/JUGG097/SIMPLE-WEB-CALCULATOR"
								title="Web Calculator GitHub Repo"
							>
								GitHub Repo
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
