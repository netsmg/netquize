import { useState, useNavigate } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';



import Iconify from 'src/components/iconify';

import firebaseApp from './firebase'; 
// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const navigate = useNaviget();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [formError, setFormError] = useState('');


  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      naviget('/dashboard');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      naviget('/dashboard');
    } catch (error) {
      setLoginError(error.message);
    }
  };


  const renderForm = (
  <form onSubmit={handleLogin}>

    <Stack spacing={3}>
      <TextField name="email" label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField
        name="password" value={password} onChange={(e) => setPassword(e.target.value)} 
        label="Password"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>

    <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
      <Link variant="subtitle2" underline="hover">
        Forgot password?
      </Link>
    </Stack>

    <LoadingButton
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      color="inherit"
    >
      Login
    </LoadingButton>
  </form>
);
  return (
    <Box>
      

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to KRITTIM.Ai</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            New user?
            <Link variant="subtitle2" sx={{ ml: 0.5 }} href="register?returnTo=%2Fdashboard">
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            onClick={handleGoogleLogin}>
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            onClick={handleGoogleLogin}>
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            onClick={handleGoogleLogin}>
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {loginError && (
            <Alert severity="error">
              {loginError}
            </Alert>
          )}

<Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
