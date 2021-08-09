import { useState } from "react";

import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../firebase";

import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

export default function Roller() {
  const rollsRef = firestore.collection("rolls");
  const query = rollsRef.orderBy("createdAt", "desc").limit(25);

  const [rolls] = useCollectionData(query, { idField: "id" });

  const [d4, setd4] = useState(0);
  const [d6, setd6] = useState(0);
  const [d8, setd8] = useState(0);
  const [d10, setd10] = useState(0);
  const [d12, setd12] = useState(0);
  const [d20, setd20] = useState(0);

  const resetDice = (e) => {
    e.preventDefault();
    setd4(0);
    setd6(0);
    setd8(0);
    setd10(0);
    setd12(0);
    setd20(0);
  };

  const sendRoll = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    const rolls = [
      roll(4, d4),
      roll(6, d6),
      roll(8, d8),
      roll(10, d10),
      roll(12, d12),
      roll(20, d20),
    ].flat();

    await rollsRef.add({
      dice: rolls,
      sum: sum(rolls),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
    });
  };

  return (
    <Container>
      <Grid container sx={{ my: 2, justifyContent: "space-between" }}>
        <Grid item>
          <Badge badgeContent={d4} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setd4(d4 + 1);
              }}
            >
              d4
            </Button>
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={d6} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setd6(d6 + 1);
              }}
            >
              d6
            </Button>
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={d8} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setd8(d8 + 1);
              }}
            >
              d8
            </Button>
          </Badge>{" "}
        </Grid>
        <Grid item>
          <Badge badgeContent={d10} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setd10(d10 + 1);
              }}
            >
              d10
            </Button>
          </Badge>{" "}
        </Grid>
        <Grid item>
          <Badge badgeContent={d12} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setd12(d12 + 1);
              }}
            >
              d12
            </Button>
          </Badge>{" "}
        </Grid>
        <Grid item>
          <Badge badgeContent={d20} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setd20(d20 + 1);
              }}
            >
              d20
            </Button>
          </Badge>{" "}
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ my: 2 }}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={sendRoll}>
            Roll
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={resetDice}>
            Reset
          </Button>
        </Grid>
      </Grid>

      <Stack spacing={2}>
        {rolls &&
          rolls.map((roll) => {
            return (
              <Card sx={{ px: 1, py: 1 }} key={roll.createdAt}>
                <Grid container spacing={1}>
                  <Grid item sx={{ width: "30px" }}>
                    <Typography
                      sx={{ fontSize: "bigger", color: "secondary.main" }}
                    >
                      {roll.sum}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{roll.user}</Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Typography component="div" sx={{ mt: 1, fontSize: "smaller" }}>
                  {roll.dice.map((die, i) => {
                    return (
                      <Box sx={{ pr: 1, display: "inline-flex" }} key={i}>
                        {die.size + ":" + die.value}
                      </Box>
                    );
                  })}
                </Typography>
              </Card>
            );
          })}
      </Stack>
    </Container>
  );
}

const roll = (size, number) => {
  const rolls = [];

  for (let i = 0; i < number; i++) {
    const randomValues = window.crypto.getRandomValues(new Uint32Array(1));

    rolls.push({
      size: `d${size}`,
      value: (randomValues[0] % size) + 1,
    });
  }

  return rolls;
};

const sum = (rolls) => {
  let sum = 0;

  for (let i = 0; i < rolls.length; i++) {
    sum = sum + rolls[i].value;
  }

  return sum;
};
