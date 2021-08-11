import { auth, googleAuthProvider } from "./firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Header from "./Components/Header";
import Roller from "./Views/Roller";
import Campaign from "./Views/Campaign";
import FabulaUltimator from "./themes/FabulaUltimator";

function App() {
  const [user] = useAuthState(auth);

  return (
    <ThemeProvider theme={FabulaUltimator}>
      <Container maxWidth="lg">
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
    </ThemeProvider>
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
