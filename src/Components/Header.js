import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar expand="md fixed-top" className="font-weight-bold">
				<div className="container">
					<NavbarBrand href="/">{"< AA />"}</NavbarBrand>
					<NavbarToggler onClick={toggle} style={{ Color: "red" }} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto text-center" navbar>
							<NavItem>
								<NavLink className="nav-link" to="/home">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Contact
									</DropdownToggle>
									<DropdownMenu className="text-center">
										<DropdownItem>Tel</DropdownItem>
										<DropdownItem>Whatsapp</DropdownItem>
										{/* <DropdownItem divider /> */}
										<DropdownItem>LinkedIn</DropdownItem>
										<DropdownItem>GitHub</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
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
