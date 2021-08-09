import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { auth } from "../firebase";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Fabula Ultimator
        </Typography>
        <SignOut />
      </Toolbar>
    </AppBar>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <Button
        color="inherit"
        className="sign-out"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    )
  );
}
