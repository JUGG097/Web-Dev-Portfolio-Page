import React from "react";
import { Jumbotron } from "reactstrap";

function Projects() {
	return (
		<div>
			<Jumbotron style={{ backgroundColor: "#98C1D9" }}>
				<div className="container mt-3">
					<h2 className="display-5">My Projects</h2>
					<p className="lead">Projects related to Web Development</p>
				</div>
			</Jumbotron>

			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-4 text-center">
						<img
							className="img-thumbnail"
							src="https://via.placeholder.com/200"
							alt="PlaceHolder"
						></img>
					</div>
					<div className="col-12 col-sm-8 text-center mt-2">
						<h4>Project 1 Title</h4>
						<p>Content</p>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 order-last col-sm-8 text-center mt-2">
						<h4>Project 2 Title</h4>
						<p>Content</p>
					</div>
					<div className="col-12 col-sm-4 text-center order-first order-sm-last">
						<img
							className="img-thumbnail"
							src="https://via.placeholder.com/200"
							alt="PlaceHolder"
						></img>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 col-sm-4 text-center">
						<img
							className="img-thumbnail"
							src="https://via.placeholder.com/200"
							alt="PlaceHolder"
						></img>
					</div>
					<div className="col-12 col-sm-8 text-center mt-2">
						<h4>Project 1 Title</h4>
						<p>Content</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
