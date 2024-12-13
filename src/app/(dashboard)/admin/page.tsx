import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import LoginForm from "../../../components/loginForm";

interface ParentProps {
  auth: boolean;
  age: number;
}

const Login = (): ReactElement => {
  let auth: boolean = false;
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm auth={auth} />
    </div>
  );
};

export default Login;
