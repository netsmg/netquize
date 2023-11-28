import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CheckBox, Form, TextInput } from '../';
import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';

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
    <Form className="gap-4" onSubmit={handleSubmit}>
        <div className="mb-4">
      <TextInput
        required
        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
        icon="person"
        placeholder="Enter Your Name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      </div>
      <div className="mb-4>
      <TextInput
        required
        icon="mail"
        className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
        placeholder="Enter Email ID"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
</div>
      <div className="mb-4">
        <input
          required
          className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
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

    <div className="mb-4">  <TextInput className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
        required
        icon="lock"
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        required
        className="mx-auto my-2 flex items-center justify-center text-sm font-medium tracking-wide text-black dark:text-white sm:text-base"
        text="I agree to the Terms &amp; Conditions"
        value={consent}
        onChange={(e) => setConsent(e.target.value)}
      />
</div>
      <button className="fill-button mt-2" disabled={loading} type="submit">
        Sign Up
      </button>

      <div className="-mt-1 text-center text-sm font-medium tracking-wide text-black dark:text-slate-300 md:text-base">
        Already have an account?{' '}
        <span className="inline-block">
          <Link to="/login">
            <span className="link-text">Login</span>
          </Link>{' '}
          instead.
        </span>
      </div>
    </Form>
  );
}

export default SignUpForm;
