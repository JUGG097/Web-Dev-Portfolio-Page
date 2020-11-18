import React from "react";
import { Jumbotron } from "reactstrap";

import {
	faLaptopCode,
	faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
	return (
		<div>
			<Jumbotron style={{ backgroundColor: "#98C1D9" }} className="mb-0">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-4 text-center">
							<img
								className="img-fluid rounded align-self-center"
								src="img/Adeoluwa_Adeboye_Transparent.png"
								alt="Adeoluwa Adeboye"
								width="250px"
							></img>
						</div>

						<div className="col-12 col-sm-8 text-center my-auto">
							<h2 className="display-5 my-color">
								Adeoluwa Adeboye
							</h2>
							<p className="lead">
								Website Development | Website Deployment
							</p>
							<p>
								<span className="badge badge-pill badge-primary">
									HTML
								</span>
								| CSS | JS| React.js | Bootstrap | ReactStrap |
								Font Awesome | Netlify
							</p>
						</div>
					</div>
				</div>
			</Jumbotron>

			<div className="container">
				<div className="row mt-3 p-3 text-center">
					<div className="col-12 col-sm-6">
						<FontAwesomeIcon
							icon={faLaptopCode}
							size="2x"
							className="my-color"
						/>
						<h5 className="mt-2 p-2">Web Development</h5>

						<p>
							Creation of static pages like Landing Page, Online
							Portofolio, Dynamic and API-driven web application.{" "}
							<br></br>
							Turning Website Designs and Mockups into Code.
						</p>
					</div>
					<div className="col-12 col-sm-6">
						<FontAwesomeIcon
							icon={faCloudUploadAlt}
							size="2x"
							className="my-color"
						/>
						<h5 className="mt-2 p-2">Web Deployment</h5>
						<p>
							Deploying web development codes to the cloud
							platforms like GitHub, Netlify and Heroku.
							<br></br>
							Hosting static webpage code on the cloud and
							WorldWideWeb.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-12 text-center">
						<h4 className="my-color font-weight-bold">
							Send Message
						</h4>
						<p>A Form goes here</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
