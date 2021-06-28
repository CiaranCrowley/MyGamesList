// @ts-nocheck
import React, { useRef } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export default function Signup() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					{/* {error && <Alert variant="danger">{error}</Alert>} */}
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="passwordConfirm">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmRef}
								required
							/>
						</Form.Group>
						<Button className="w-100" type="submit">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
				<div className="w-100 text-center mt-2">
					Already have an account?
				</div>
			</Card>
		</>
	)
}
