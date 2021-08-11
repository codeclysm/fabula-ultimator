import { auth, googleAuthProvider } from "./firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Header from "./Components/Header";
import Roller from "./Views/Roller";
import Campaign from "./Views/Campaign";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Container maxWidth="sm">
      <Header />
      {user ? (
        <Router>
          <Switch>
            <Route path="/campagna/:id">
              <Campaign />
            </Route>
            <Route path="/">
              <Roller />
            </Route>
          </Switch>
        </Router>
      ) : (
        <SignIn />
      )}
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
