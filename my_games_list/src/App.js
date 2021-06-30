import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword.js'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Signup from './components/Signup'
import UpdateProfile from './components/UpdateProfile'

function App() {
	return (
		<div>
			<Container
			// className="d-flex align-items-center justify-content-center"
			// style={{ minHeight: '100vh' }}
			>
				{/* <div className="w-100" style={{ maxWidth: '400px' }}> */}
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
							<Route
								path="/forgot-password"
								component={ForgotPassword}
							/>
						</Switch>
					</AuthProvider>
				</Router>
				{/* </div> */}
			</Container>
		</div>
	)
}

export default App
