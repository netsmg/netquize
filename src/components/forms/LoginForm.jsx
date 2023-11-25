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
    <Form className="gap-4 py-0 block border-spin max-w-sm p-6 bg-white border border-blue-800 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onSubmit={handleSubmit}>
      <TextInput
        required
        icon="mail"
        placeholder="Enter Registered Email ID"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex h-[52px] w-full items-center rounded-md border border-black/30 bg-white p-2 outline-none dark:border-white/30 dark:bg-black/50">
        <input
          required
          className="ml-1 w-full rounded-lg border-none bg-transparent font-medium tracking-wide text-black outline-none dark:text-white lg:text-xl"
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

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" disabled={loading} type="submit">
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
