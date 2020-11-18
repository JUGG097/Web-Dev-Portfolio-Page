import React from "react";
import { Jumbotron } from "reactstrap";

import { faFileCode, faRocket } from "@fortawesome/free-solid-svg-icons";
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
							icon={faFileCode}
							size="2x"
							className="my-color"
						/>
						<h4 className="mt-2 p-2">Web Development</h4>

						<p>
							Creation of static pages like Landing Page, Online
							Portofolio and dynamic web application. <br></br>
							Turning Website Designs and Mockups into Code.
						</p>
					</div>
					<div className="col-12 col-sm-6">
						<FontAwesomeIcon
							icon={faRocket}
							size="2x"
							className="my-color"
						/>
						<h4 className="mt-2 p-2">Web Deployment</h4>
						<p>
							Deploying web development codes to the cloud.
							<br></br>
							Hosting static webpage code on the cloud and
							WorldWideWeb
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
