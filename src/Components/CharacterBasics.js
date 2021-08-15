import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import PersonIcon from "@material-ui/icons/Person";
import TransgenderIcon from "@material-ui/icons/Transgender";

export default function CharacterBasics({ name, player, gender, onChange }) {
  const [localName, setLocalName] = useState(name);
  const [localPlayer, setLocalPlayer] = useState(player);
  const [localGender, setLocalGender] = useState(gender);

  const debouncedOnChange = useDebouncedCallback(onChange, 300);

  const onNameChange = (e) => {
    setLocalName(e.target.value);
    debouncedOnChange("name", e.target.value);
  };

  const onPlayerChange = (e) => {
    setLocalPlayer(e.target.value);
    debouncedOnChange("player", e.target.value);
  };

  const onGenderChange = (e) => {
    setLocalGender(e.target.value);
    debouncedOnChange("gender", e.target.value);
  };

  useEffect(() => {
    setLocalName(name);
    setLocalPlayer(player);
    setLocalGender(gender);
  }, [name, player, gender]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <TextField
          name="name"
          label="Nome"
          fullWidth
          variant="standard"
          value={localName}
          onChange={onNameChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="player"
          label="Giocatorə"
          fullWidth
          variant="standard"
          value={localPlayer}
          onChange={onPlayerChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="gender"
          label="Genere"
          fullWidth
          variant="standard"
          value={localGender}
          onChange={onGenderChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TransgenderIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
