import React from 'react'
import SiteHeader from '../../components/siteHeader/siteHeader'
import { Container, Card } from 'react-bootstrap'

export default function Home() {
	/**
	 * ?  Try using a container first.  If that doesn't allow the list to be populated, remove it and resize the cards
	 * !  Above line relies on games context being functional
	 * ?  If user is not logged in, don't allow them to add games to lists, else, allow list expansion
	 */

	return (
		<div>
			<SiteHeader />
			HOME PAGE
			<Container>
				<Card>HELLO</Card>
			</Container>
		</div>
	)
}
