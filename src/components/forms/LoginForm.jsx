import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';


import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const [show, setShow] = useState(false);

  const { logIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      document.body.style.cursor = 'wait';
      await logIn(email, password);
      showAlert('success', 'login-success');
      document.body.style.cursor = 'default';
      navigate('/');
    } catch (err) {
      document.body.style.cursor = 'default';
      setLoading(false);
      showAlert('error', err.code);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      
    <Stack spacing={3}>
      <TextField name="email" label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField
        name="password" value={password} onChange={(e) => setPassword(e.target.value)} 
        label="Password"
        
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <button
          className="material-symbols-outlined mx-1 flex cursor-pointer items-center justify-center text-black dark:text-white md:text-3xl"
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? 'visibility_off' : 'visibility'}
        </button>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
      
      
     <div className="ml-auto">
        <Link
          className="link-text justify-self-end text-base font-medium tracking-wide"
          to="/reset"
        >
          Forgot Password?
        </Link>
      </div>
          <LoadingButton
      fullWidth
      size="large"
      type="submit"
            disabled={loading}
      variant="contained"
      color="inherit"
    >
      Login
    </LoadingButton>
      
      <div className="text-center text-sm font-medium tracking-wide text-black dark:text-slate-300 md:text-base">
        Don&apos;t have an account?{' '}
        <span className="inline-block">
          <Link to="/signup">
            <span className="link-text">Sign Up</span>
          </Link>{' '}
          instead.
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
