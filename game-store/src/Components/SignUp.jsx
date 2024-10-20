import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AnimatedXPage from './AnimatedXPage';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FcGoogle } from "react-icons/fc";
import api from '../services/api';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://game-store-seven-xi.vercel.app/">
        GameStore
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [inputs, setInputs] = React.useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    console.log(inputs);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);

    try {
      api.post('api/users/register/', inputs)
        .then(
          response => {
            if (response.status === 201) {
              navigate('/signin')
            }
            else {
              alert('Something Went Wrong!')
            }
          }
        )
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <AnimatedXPage>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>
                <p className="flex text-center justify-center items-center">
                  <NavLink to="/">
                    <img src="/assets/gamestore_logo.png" className="w-14 h-10 object-cover p-0 m-0" alt="NA"></img>
                  </NavLink>
                </p>
              </div>
              <h2 variant="h5" className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Join Us
              </h2>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="first_name"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={handleChange}
                    />
									</Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="last_name"
                      autoComplete="family-name"
                      onChange={handleChange}
                    />
                  </Grid>
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirm_password"
                      label="Confirm Password"
                      type="password"
                      id="confirm_password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <div className='mt-4'>
                  <button
                    type="submit"
                    className="transition duration-200 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>

                <p className='text-center mt-2'>OR</p>
                <div className='mt-1 flex justify-center items-center'>
                  <section className='px-2 bg-white flex justify-center items-center text-center border rounded-lg'>
                    <FcGoogle size={30}/>
                    <Button>Continue with Google</Button>
                  </section>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <NavLink to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Sign In
                  </NavLink>
                </p>

              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </AnimatedXPage>
    </>
  );
}