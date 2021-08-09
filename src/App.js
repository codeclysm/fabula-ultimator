import { auth, googleAuthProvider } from "./firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Header from "./Components/Header";
import Roller from "./Views/Roller";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Container maxWidth="sm">
      <Header />
      {user ? <Roller /> : <SignIn />}
    </Container>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <Button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </>
  );
}

export default App;
