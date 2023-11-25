import { LoginForm, SignInWithGoogleButton } from '../components';

function Login() {
  return (
    <div className=" w-[85%] animate-reveal items-center">
      <h1 className="page-heading">Log in to Quizzy</h1>
      <div className="card mx-auto w-full max-w-xl">
        <LoginForm />
      </div>
      <div className="mx-auto w-full max-w-xl">
        <SignInWithGoogleButton title="Log In" />
      </div>
    </div>
      
      
  );
}

export default Login;
