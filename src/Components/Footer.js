import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLaptopHouse,
	faCodeBranch,
	faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	faWhatsappSquare,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="footer p-2 mt-3">
			<div className="container">
				<div className="row text-center">
					<div className="col-12 col-sm-4">
						<h5> {"< AA />"} </h5>
						<p>Web Development | Web Deployment </p>
					</div>
					<div className="col-12 col-sm-4">
						<h5>Quick Links</h5>
						<Link to="/home">
							<p className="mt-0 mb-0">
								<FontAwesomeIcon
									icon={faLaptopHouse}
								></FontAwesomeIcon>{" "}
								Home
							</p>
						</Link>
						<Link to="/projects">
							<p>
								<FontAwesomeIcon
									icon={faCodeBranch}
								></FontAwesomeIcon>{" "}
								Projects
							</p>
						</Link>
					</div>
					<div className="col-12 col-sm-4">
						<h5>Contacts</h5>
						<a
							href="tel:+2348102008245"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="mt-0 mb-0">
								<FontAwesomeIcon
									icon={faPhoneAlt}
								></FontAwesomeIcon>{" "}
								Tel
							</p>
						</a>
						<a
							href="https://wa.me/+2348102008245?text=I'm%20interested%20in%20Web-Development"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="mt-0 mb-0">
								<FontAwesomeIcon
									icon={faWhatsappSquare}
								></FontAwesomeIcon>{" "}
								Whatsapp
							</p>
						</a>
						<a
							href="https://www.linkedin.com/in/adeoluwa-adeboye-051057146/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="mt-0 mb-0">
								<FontAwesomeIcon
									icon={faLinkedin}
								></FontAwesomeIcon>{" "}
								LinkedIn
							</p>
						</a>
						<a
							href="https://github.com/JUGG097"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="mt-0 mb-0">
								<FontAwesomeIcon
									icon={faGithub}
								></FontAwesomeIcon>{" "}
								GitHub
							</p>
						</a>
					</div>
				</div>

				<div className="row text-center mt-2 font-weight-bold">
					<div className="col-12">
						<p>Copyright &copy; 2020 | Adeoluwa</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
