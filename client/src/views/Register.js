import React , {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {getRegisterReq} from "../service/RegisterService"
export default function Register() {


    const [email, setEmailValue] = useState("");
    const [password, setPasswordValue] = useState("");
    const [userName, setUserNameValue] = useState("");
    const [isEnterSuccess, setEnterSuccess] = useState(true);
  
    const getRegister =  (event) =>  {
      event.preventDefault();
    const isSuccess = getRegisterReq(userName, email, password);
       setEnterSuccess(isSuccess);
  
       }
    const userNameOnChange = (e) => {
      setUserNameValue(e.target.value)
    }
    const emailOnChange = (e) => {
      setEmailValue(e.target.value)
    }
    const passwordOnChange = (e) => {
      setPasswordValue(e.target.value)
    }

const theme = createTheme();



  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  error={isEnterSuccess ? false : true}
                  required
                  fullWidth
                  id="userName"
                  onChange={userNameOnChange}
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={isEnterSuccess ? false : true}
                  fullWidth
                  id="email"
                  onChange={emailOnChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={isEnterSuccess ? false : true}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={passwordOnChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={getRegister}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}