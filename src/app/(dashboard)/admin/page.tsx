"use client";
import { ReactElement, useState } from "react";
import LoginForm from "../../../components/loginForm";

const Login = (): ReactElement => {
  const [auth, setAuth] = useState(false);
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm auth={auth} setAuth={setAuth} />
    </div>
  );
};

export default Login;
