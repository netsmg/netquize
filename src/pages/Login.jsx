import { LoginForm, SignInWithGoogleButton } from '../components';

function Login() {
  return (
    <div className="animate-reveal items-center">
      <h1 className="page-heading">Log in to Quizzy</h1>
      <div className="w-full">
        <LoginForm />
      </div>
      <div className="w-full max-w-xl items-center">
        <SignInWithGoogleButton title="Log In" />
      </div>
    </div>
      
      
  );
}

export default Login;
