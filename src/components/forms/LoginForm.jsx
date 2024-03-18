import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

import { Form, TextInput } from '../';
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
    <Form onSubmit={handleSubmit}>
      <div className="mb-4">
        <TextInput
          required
          icon="mail"
          placeholder="Enter Registered Email ID"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
          aria-label="Email"
          aria-describedby="email-addon"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
          placeholder="Enter Password"
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
          aria-describedby="password-addon"
        />
      </div>
      <div>
        <button
          className="material-symbols-outlined mx-1 flex cursor-pointer items-center justify-center text-black dark:text-white md:text-3xl"
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? 'visibility_off' : 'visibility'}
        </button>
      </div>
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
    </Form>
  );
}

export default LoginForm;
