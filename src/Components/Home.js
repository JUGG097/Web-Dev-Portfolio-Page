import React from "react";
import { Jumbotron } from "reactstrap";
import {
	faLaptopCode,
	faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	faHtml5,
	faCss3Alt,
	faJsSquare,
	faReact,
	faBootstrap,
	faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormEmail from "./Form";

function Home() {
	return (
		<div>
			<Jumbotron
				style={{ backgroundColor: "#98C1D9", paddingTop: "100px" }}
			>
				<div className="container mt-3">
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
							<h2 className="display-5 my-color-2">
								Adeoluwa Adeboye
							</h2>
							<p className="lead">
								Website Development | Website Deployment
							</p>
							<p>
								<span className="badge badge-pill badge-primary">
									<FontAwesomeIcon icon={faHtml5} /> HTML
								</span>{" "}
								|{" "}
								<span className="badge badge-pill badge-warning">
									<FontAwesomeIcon icon={faCss3Alt} /> CSS
								</span>{" "}
								|{" "}
								<span className="badge badge-pill badge-primary">
									<FontAwesomeIcon icon={faJsSquare} /> JS
								</span>{" "}
								|{" "}
								<span className="badge badge-pill badge-info">
									<FontAwesomeIcon icon={faReact} /> React.js
								</span>{" "}
								|{" "}
								<span className="badge badge-pill badge-dark">
									<FontAwesomeIcon icon={faBootstrap} />{" "}
									Bootstrap
								</span>{" "}
								|{" "}
								<span className="badge badge-pill badge-info">
									<FontAwesomeIcon icon={faReact} />{" "}
									ReactStrap
								</span>{" "}
								|{" "}
								<span className="badge badge-pill badge-primary">
									<FontAwesomeIcon icon={faFontAwesome} />{" "}
									FontAwesome
								</span>{" "}
								|{" "}
								<span className="badge badge-pill badge-danger">
									<FontAwesomeIcon icon={faCloudUploadAlt} />{" "}
									Netlify
								</span>{" "}
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
							className="my-color-2"
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
							className="my-color-2"
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

				<div className="row mt-2">
					<div className="col-12 text-center">
						<h4 className="my-color-2 font-weight-bold">
							Send Message
						</h4>
					</div>
					<div className="col-12 text-center">
						<FormEmail />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
