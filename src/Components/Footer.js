import React from "react";
import { Link } from "react-router-dom";

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
							<p className="mt-0 mb-0">Home</p>
						</Link>
						<Link to="/projects">
							<p>Projects</p>
						</Link>
					</div>
					<div className="col-12 col-sm-4">
						<h5>Contacts</h5>
						<a
							href="tel:+2348102008245"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="mt-0 mb-0">Tel</p>
						</a>
						<a
							href="https://wa.me/+2348102008245?text=I'm%20interested%20in%20Web-Development"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="mt-0 mb-0">Whatsapp</p>
						</a>
						<a
							href="https://www.linkedin.com/in/adeoluwa-adeboye-051057146/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="mt-0 mb-0">LinkedIn</p>
						</a>
						<a
							href="https://github.com/JUGG097"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
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
