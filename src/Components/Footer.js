import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer p-2 mt-3">
			<div className="container">
				<div className="row text-center">
					<div className="col-12 col-sm-4">
						<h5>Adeoluwa Adeboye</h5>
						<p>Web Development | Web Deployment </p>
					</div>
					<div className="col-12 col-sm-4">
						<h5>Quick Links</h5>
						<Link to="/home">
							<p>Home</p>
						</Link>
						<Link to="/articles">
							<p>Articles</p>
						</Link>
						<Link to="/projects">
							<p>Projects</p>
						</Link>
					</div>
					<div className="col-12 col-sm-4">
						<h5>Contacts</h5>
						<a href="jj">
							<p>Whatsapp</p>
						</a>
						<a href="jj">
							<p>Twitter</p>
						</a>
						<a href="jj">
							<p>LinkedIn</p>
						</a>
						<a href="jj">
							<p>GitHub</p>
						</a>
					</div>
				</div>

				<div className="row text-center">
					<div className="col-12">
						<p>Copyright &copy; 2020 | Adeoluwa</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
