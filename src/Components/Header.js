import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar expand="md">
				<div className="container">
					<NavbarBrand href="/">Adeoluwa Adeboye</NavbarBrand>
					<NavbarToggler onClick={toggle} style={{ Color: "red" }} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto text-center" navbar>
							<NavItem>
								<NavLink className="nav-link" to="/home">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/articles">
									Articles
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/projects">
									Projects
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</div>
	);
}

export default Header;
