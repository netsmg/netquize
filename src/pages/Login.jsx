import { LoginForm, SignInWithGoogleButton } from '../components';

function Login() {
  return (
    
      <div className="card mx-auto w-full max-w-xl">
        <LoginForm />
      </div>
      <div className="mx-auto w-full max-w-xl">
        <SignInWithGoogleButton title="Log In" />
      </div>
    
    
  );
}

export default Login;
