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
import Home from './pages/homePage'

function App() {
	return (
		<div>
			<Container>
				<Router>
					<AuthProvider>
						<Switch>
							<PrivateRoute exact path="/" component={Dashboard} />
							<PrivateRoute
								path="/update-profile"
								component={UpdateProfile}
							/>
							<Route path="/signup" component={Signup} />
							<Route path="/login" component={Login} />
							<Route exact path="/home" component={Home} />
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
