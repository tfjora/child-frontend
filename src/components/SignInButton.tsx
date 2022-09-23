import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "./Button";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };
  return (
    <Button
      onClick={() => handleLogin()}
      label="Sign in using Popup"
      name="Sign in using Popup"
      id="signin"
    />
  );
};
