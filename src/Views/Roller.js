import { useState } from "react";

import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../firebase";

import { formatDistance } from "date-fns";

import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

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
  const [bonus, setBonus] = useState(0);
  const [malus, setMalus] = useState(0);

  const resetDice = (e) => {
    e.preventDefault();
    setd4(0);
    setd6(0);
    setd8(0);
    setd10(0);
    setd12(0);
    setd20(0);
    setBonus(0);
    setMalus(0);
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
      sum: sum(rolls, bonus + malus),
      hr: hr(rolls),
      crit: crit(rolls),
      fumble: fumble(rolls),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      bonus: bonus + malus,
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
          </Badge>
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
          </Badge>
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
          </Badge>
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
          </Badge>
        </Grid>
        <Grid item sx={{ borderLeft: "1px solid black" }}></Grid>
        <Grid item>
          <Badge badgeContent={bonus} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setBonus(bonus + 1);
              }}
            >
              bonus
            </Button>
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={malus} color="secondary">
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setMalus(malus - 1);
              }}
            >
              malus
            </Button>
          </Badge>
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
          rolls.map((roll, i) => {
            return (
              <Grid
                container
                key={i}
                sx={{
                  p: 1,
                  borderBottom: "1px solid black",
                }}
              >
                <Grid item>
                  {roll.crit && (
                    <Typography
                      color="primary.main"
                      fontSize="2rem"
                      sx={{ my: 2 }}
                    >
                      Critical !
                    </Typography>
                  )}
                  {roll.fumble && (
                    <Typography color="red.main" fontSize="2rem" sx={{ my: 2 }}>
                      Fumble !
                    </Typography>
                  )}
                  <Grid container spacing={2}>
                    <Grid item>
                      <TextField
                        label="Result"
                        value={roll.sum}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Highest Roll"
                        value={roll.hr}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>{roll.user}</Typography>
                      {roll.createdAt && (
                        <Typography>
                          {formatDistance(roll.createdAt.toDate(), new Date())}{" "}
                          ago
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Typography component="div" sx={{ mt: 1 }}>
                    {roll.dice.map((die, i) => {
                      return (
                        <Box sx={{ pr: 1, display: "inline-flex" }} key={i}>
                          {die.size + ":" + die.value}
                        </Box>
                      );
                    })}
                    {roll.bonus > 0 && (
                      <Box sx={{ pr: 1, display: "inline-flex" }}>
                        +{roll.bonus}
                      </Box>
                    )}
                    {roll.bonus < 0 && (
                      <Box sx={{ pr: 1, display: "inline-flex" }}>
                        {roll.bonus}
                      </Box>
                    )}
                  </Typography>
                </Grid>
                {/* <Grid item>
                  <pre>{JSON.stringify(roll, null, 2)}</pre>
                </Grid> */}
              </Grid>
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

const sum = (rolls, bonus) => {
  let sum = 0;

  for (let i = 0; i < rolls.length; i++) {
    sum = sum + rolls[i].value;
  }

  return sum + bonus;
};

const hr = (rolls) => {
  let highest = 0;

  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i].value > highest) {
      highest = rolls[i].value;
    }
  }

  return highest;
};

const crit = (rolls) => {
  let previous = 0;

  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i].value < 6) {
      return false;
    }
    if (previous === 0) {
      previous = rolls[i].value;
    }
    if (rolls[i].value !== previous) {
      return false;
    }
  }

  return true;
};

const fumble = (rolls) => {
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i].value !== 1) {
      return false;
    }
  }

  return true;
};
