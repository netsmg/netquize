import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

import { CheckBox } from '../';
import showAlert from '../AlertList';
import { useAuth } from '../../contexts/AuthContext';

function SignUpForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState('');
  const [loading, setLoading] = useState('');

  const [show, setShow] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      showAlert('error', 'password-no-match');
      return;
    }
    try {
      setLoading(true);
      document.body.style.cursor = 'wait';
      await signUp(email, password, userName);
      document.body.style.cursor = 'default';
      showAlert('success', 'account-created');
      navigate('/');
    } catch (err) {
      setLoading(false);
      document.body.style.cursor = 'default';
      showAlert('error', err.code);
    }
  }

  return (
    <form className="gap-4" onSubmit={handleSubmit}>
        <Stack spacing={3}>
            
            <TextField name="username" label="UserName" type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
           />
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
      <TextField name="confirm password" label="Confirm Password"
        type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}

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
      
        <CheckBox
          required
          className="mx-auto my-2 flex items-center justify-center text-sm font-medium tracking-wide text-black dark:text-white sm:text-base"
          text="I agree to the Terms &amp; Conditions"
          value={consent}
          onChange={(e) => setConsent(e.target.value)}
        />
      
      <LoadingButton
      fullWidth
      size="large"
      type="submit"
            disabled={loading}
      variant="contained"
      color="inherit"
    >
      Register
    </LoadingButton>
      <div className="-mt-1 text-center text-sm font-medium tracking-wide text-black dark:text-slate-300 md:text-base">
        Already have an account?{' '}
        <span className="inline-block">
          <Link to="/login">
            <span className="link-text">Login</span>
          </Link>{' '}
          instead.
        </span>
      </div>
    </form>
  );
}

export default SignUpForm;

