import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import AppRoutes from "./AppRoutes";
import SignIn from "./pages/Landingpage/SignIn";

type Props = {};

export default function App({}: Props) {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <>
          {console.log("her2")}
          <AppRoutes />
        </>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <>
          {console.log("her1")}
          <h5 className="card-title">Please sign-in to see your profile information.</h5>
          <SignIn />
        </>
      </UnauthenticatedTemplate>
    </div>
  );
}
