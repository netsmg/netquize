import { useState } from 'react';

import { Form, TextInput } from '../';
import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';

function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');

  const { resetPassword } = useAuth();

  async function sendResetMail(e) {
    e.preventDefault();
    try {
      setLoading(true);

      document.body.style.cursor = 'wait';
      await resetPassword(email);
      showAlert('success', 'mail-sent');
      document.body.style.cursor = 'default';
    } catch (err) {
      setLoading(false);
      document.body.style.cursor = 'default';
      showAlert('error', err.code);
    }
  }
  return (
    <Form className="gap-4 py-0 block border-spin max-w-sm p-6 bg-white border border-blue-400 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onSubmit={sendResetMail}>
      <TextInput
        required
        icon="mail"
        placeholder="Enter Your Email ID"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="fill-button mt-4" disabled={loading} type="submit">
        Send Mail
      </button>

      <div className="text-center text-base font-medium tracking-wide text-black dark:text-slate-300">
        Password reset link will be sent to the mail
      </div>
    </Form>
  );
}

export default ResetPasswordForm;
