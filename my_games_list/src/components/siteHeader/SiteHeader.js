import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './SiteHeader.css'

const SiteHeader = () => {
	return (
		<>
			<Container fluid="md">
				<Navbar expand="lg" bg="light" variant="light">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<DropdownButton id="ddown" title="Dropdown button">
								<Dropdown.Item>Action</Dropdown.Item>
								<Dropdown.Item>Another action</Dropdown.Item>
								<Dropdown.Item>Something else</Dropdown.Item>
							</DropdownButton>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	)
}

export default SiteHeader
