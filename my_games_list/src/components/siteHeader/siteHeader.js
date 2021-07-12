// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap'
import { auth } from '../../firebase'
import './SiteHeader.css'

const SiteHeader = () => {
	return (
		<div>
			<Navbar expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav id="nav">
						<Nav.Link as={Link} to="/home">
							Home
						</Nav.Link>
						<Nav.Link>New</Nav.Link>
						<Nav.Link>Upcoming</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<img
					alt="1"
					id="profileImg"
					src="https://i.imgur.com/6vblQ1O.jpeg/"
					width="50"
					height="50"
				/>
				<DropdownButton
					id="d-down"
					title={<span>{auth.currentUser.email}</span>}
				>
					<Dropdown.Item as={Link} to="/home">
						Profile
					</Dropdown.Item>
					<Dropdown.Item>Your Lists</Dropdown.Item>
				</DropdownButton>
			</Navbar>
		</div>
	)
}

export default SiteHeader
