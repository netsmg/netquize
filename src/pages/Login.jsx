import { LoginForm, SignInWithGoogleButton } from '../components';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="animate-reveal items-center">
      <h1 className="page-heading">Log in to Quizzy</h1>
      <div className="w-full">
        <LoginForm />
      </div>
      <div className="w-full max-w-xl items-center">
        <SignInWithGoogleButton title="Log In" />
      </div>
    </div>
    </div>
      
  );
}

export default Login;
