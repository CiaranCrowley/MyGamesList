import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword.js'
import Login from './components/login/Login'
import PrivateRoute from './components/PrivateRoute'
import Signup from './components/signUp/Signup'
import UpdateProfile from './components/UpdateProfile'
import Home from './pages/home/homePage'
import NewGames from './pages/new/newGames'
import UpcomingGames from './pages/upcoming/upcomingGames'

function App() {
	return (
		<div>
			<Container>
				<Router>
					<AuthProvider>
						<Switch>
							<PrivateRoute
								exact
								path="/dashboard"
								component={Dashboard}
							/>
							<PrivateRoute
								path="/update-profile"
								component={UpdateProfile}
							/>
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/" component={Home} />
							<Route exact path="/newGames" component={NewGames} />
							<Route
								exact
								path="/popularGames"
								component={UpcomingGames}
							/>
							<Route
								path="/forgot-password"
								component={ForgotPassword}
							/>
						</Switch>
					</AuthProvider>
				</Router>
			</Container>
		</div>
	)
}

export default App
