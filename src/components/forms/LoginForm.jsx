import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    return null;
  }

  return (
    <Form className="gap-4 py-0" onSubmit={handleSubmit}>
      <TextInput
        required
        icon="mail"
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        placeholder="Enter Registered Email ID"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex h-[52px] w-full items-center rounded-md border border-black/30 bg-white p-2 outline-none dark:border-white/30 dark:bg-black/50">
        <input
          required
          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
          placeholder="Enter Password"
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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

      <button className="fill-button mt-2" disabled={loading} type="submit">
        Log In
      </button>

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
