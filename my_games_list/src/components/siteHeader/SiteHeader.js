import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './SiteHeader.css'

const SiteHeader = () => {
	return (
		<>
			<Container fluid="md">
				<Navbar expand="lg" bg="light" variant="light">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="text-white my-auto">Home</Nav.Link>
							<NavDropdown
								id="dropdown"
								title={
									<span className="text-white my-auto">
										Movies Menu
									</span>
								}
							>
								<NavDropdown.Item className="text-black my-auto">
									Movies
								</NavDropdown.Item>
								<NavDropdown.Item className="text-black my-auto">
									Upcoming Movies
								</NavDropdown.Item>
								<NavDropdown.Item className="text-black my-auto">
									Popular Movies
								</NavDropdown.Item>
								<NavDropdown.Item className="text-black my-auto">
									Latest Movies
								</NavDropdown.Item>
								<NavDropdown.Item className="text-black my-auto">
									Your Favourite Movies
								</NavDropdown.Item>
								<NavDropdown.Item className="text-black my-auto">
									Watch List
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	)
}

export default SiteHeader
