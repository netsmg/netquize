import { ResetPasswordForm } from '../components';

function Reset() {
  return (
    <div className="block border-spin max-w-sm p-6 bg-white border border-blue-800 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 animate-reveal  items-center">
      <h1 className="page-heading">Reset Password</h1>
      <div className="card mx-4 w-full max-w-xl">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

export default Reset;
