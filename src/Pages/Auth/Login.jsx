import React,{useState, useContext} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    TextField, CssBaseline, FormControl,
    InputLabel,
    InputAdornment,
    IconButton,OutlinedInput, Paper,
    Typography, Grid, Box, Link
  } from '@mui/material';
import { Visibility, VisibilityOff} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios'
import { BASE_URL, API_KEY } from '../../Api/Api';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.nawastratechnology.com/">
        PT. Nawastra Technology Nimpuna
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {

    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext);
    const [errors, setErrors] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined,
      });

    const handleChange = (e) =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    }

    const revealPassword = () =>{
        setShowPassword(!showPassword)
    }

    const handleLogin = async (e) =>{
        e.preventDefault();
        console.log(credentials)
           dispatch({type:"LOGIN_START"})
           try{
               const res = await axios.post(`${BASE_URL}/api-auth/`, credentials,
               {
                 headers:{
                   'Authorization' : 'Token ' + API_KEY
                 }
               })
               dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
               const rest = res.data.data
               console.log(rest)
               localStorage.setItem("user_token",rest.token)
               localStorage.setItem("user_id",rest.user_id)
               localStorage.setItem("name",rest.name)
               localStorage.setItem("roles",rest.roles)
              //  navigate("/authentication-user")
               navigate('/home')
               window.location.reload()
           }catch(err){
           dispatch({ type: "LOGIN_FAILURE", payload: err.response.data.detail })
           console.log(err.response)
           setErrors(err.response.data.error)
           }
     }
     console.log(errors)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh'
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <img src="https://www.nawastratechnology.com/website_nawastra/public/assets/images/logo.png" alt="" />
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleChange}
                autoFocus
                sx={{borderRadius:'15px'}}
              />
             <FormControl variant="outlined" fullWidth sx={{borderRadius:'15px'}}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={credentials.password}
                name='password'
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={revealPassword}
                        edge="end"
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
                <Typography variant="body2" sx={{marginTop:'20px'}} color="text.danger" align="left">
                     {errors}
                </Typography>
                <button onClick={handleLogin} className="button_login">Login</button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}