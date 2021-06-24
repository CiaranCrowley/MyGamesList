import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import SiteHeader from './components/siteHeader/SiteHeader'

function App() {
	return (
		<div className="jumbotron">
			<SiteHeader />
			<div className="container-fluid"></div>
		</div>
	)
}

export default App
