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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLaptopHouse,
	faIdCard,
	faCodeBranch,
	faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	faWhatsappSquare,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
									<FontAwesomeIcon
										icon={faLaptopHouse}
									></FontAwesomeIcon>{" "}
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										<FontAwesomeIcon
											icon={faIdCard}
										></FontAwesomeIcon>{" "}
										Contact
									</DropdownToggle>
									<DropdownMenu className="text-center">
										<DropdownItem>
											<a
												href="tel:+2348102008245"
												target="_blank"
												rel="noopener noreferrer"
											>
												<FontAwesomeIcon
													icon={faPhoneAlt}
													color={"black"}
												></FontAwesomeIcon>{" "}
												Tel
											</a>
										</DropdownItem>
										<DropdownItem>
											<a
												href="https://wa.me/+2348102008245?text=I'm%20interested%20in%20Web-Development"
												target="_blank"
												rel="noopener noreferrer"
											>
												<FontAwesomeIcon
													icon={faWhatsappSquare}
													color={"green"}
												></FontAwesomeIcon>{" "}
												Whatsapp
											</a>
										</DropdownItem>
										{/* <DropdownItem divider /> */}
										<DropdownItem>
											<a
												href="https://www.linkedin.com/in/adeoluwa-adeboye-051057146/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<FontAwesomeIcon
													icon={faLinkedin}
												></FontAwesomeIcon>{" "}
												LinkedIn
											</a>
										</DropdownItem>
										<DropdownItem>
											<a
												href="https://github.com/JUGG097"
												target="_blank"
												rel="noopener noreferrer"
											>
												<FontAwesomeIcon
													icon={faGithub}
													color={"black"}
												></FontAwesomeIcon>{" "}
												GitHub
											</a>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/projects">
									<FontAwesomeIcon
										icon={faCodeBranch}
									></FontAwesomeIcon>{" "}
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
