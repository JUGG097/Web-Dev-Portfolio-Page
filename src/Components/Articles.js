import React from "react";
import { Jumbotron } from "reactstrap";

function Articles() {
	return (
		<div>
			<Jumbotron>
				<div className="container">
					<h2 className="display-5">My Articles</h2>
					<p className="lead">
						Articles on Website Development and Website Deployment
					</p>
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
						<h4>Articles 1 Title</h4>
						<p>Content</p>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 order-last col-sm-8 text-center mt-2">
						<h4>Articles 2 Title</h4>
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
						<h4>Articles 1 Title</h4>
						<p>Content</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Articles;
