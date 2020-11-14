import React from "react";
import { Jumbotron } from "reactstrap";

function Home() {
	return (
		<div>
			<Jumbotron>
				<div className="container">
					<h2 className="display-5">Adeoluwa Adeboye</h2>
					<p className="lead">
						Website Development | Website Deployment
					</p>
					<p>
						HTML | CSS | JS| React.js | Bootstrap | ReactStrap |
						Font Awesome | Netlify
					</p>
				</div>
			</Jumbotron>

			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-4 text-center">
						<img
							className="img-thumbnail rounded"
							src={"img/Adeoluwa_Adeboye.jpg"}
							alt="Adeoluwa Adeboye"
							width="250px"
						></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
