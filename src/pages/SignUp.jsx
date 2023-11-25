import { SignInWithGoogleButton, SignUpForm } from '../components';

function SignUp() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 space-y-4 md:space-y-6">
      <h1 className="page-heading">Create an account</h1>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SignUpForm />
      </div>
      <div className="mx-auto w-full max-w-xl">
        <SignInWithGoogleButton title="Sign Up" />
      </div>
    </div>
  );
}

export default SignUp;
