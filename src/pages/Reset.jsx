import { ResetPasswordForm } from '../components';

function Reset() {
  return (
    <div className="mx-auto flex h-screen w-[85%] animate-reveal flex-col items-center">
      <h1 className="page-heading">Reset Password</h1>
      <div className="block border-spin max-w-sm p-6 bg-white border border-blue-800 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

export default Reset;
