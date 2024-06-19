import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import AnimatedXPage from "./AnimatedXPage";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function SignIn() {
	const [inputs, setInputs] = useState({});
	const navigate = useNavigate();

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }));
	}

	return (
		<>
			<AnimatedXPage>
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<div>
										<p className="flex text-center justify-center items-center">
								<NavLink to="/">
									<img src="https://gado.w3spaces.com/Img/logo.png" className="w-14 h-10 object-cover p-0 m-0" alt="NA"></img>
								</NavLink>
							</p>
									</div>
						<h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
							Sign in to your account
						</h2>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6" method="POST">
							<Grid item xs={12}>
								<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={handleChange}
								/>
							</Grid>

							<Grid item xs={12}>
									<TextField
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="new-password"
										onChange={handleChange}
									/>
									<div className="text-sm text-right mt-2">
										<a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
											Forgot password?
										</a>
									</div>
								</Grid>

							<div>
								<button
									type="submit"
									className="transition duration-200 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button> 
							</div>
						</form>

						<p className="mt-10 text-center text-sm text-gray-500">
							Don't have an account ?{' '}
							<NavLink to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
								Sign Up
							</NavLink>
						</p>
					</div>
				</div>
			</AnimatedXPage>
		</>
	)
};  