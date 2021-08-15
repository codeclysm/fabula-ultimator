import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";

export default function CharacterTies(props) {
  return (
    <Card sx={{ mt: 2 }}>
      <Typography variant="cardtitle" component="div">
        Legami
      </Typography>
      <Grid container>
        {[1, 2, 3, 4, 5, 6].map((index) => {
          return (
            <Grid item xs={6} key={index}>
              <CharacterTie
                index={index}
                char={props[`tie${index}_char`]}
                feeling1={props[`tie${index}_feeling1`]}
                feeling2={props[`tie${index}_feeling2`]}
                feeling3={props[`tie${index}_feeling3`]}
                onChange={props.onChange}
              />
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
}

const CharacterTie = function ({
  index,
  char,
  feeling1,
  feeling2,
  feeling3,
  onChange,
}) {
  const [localChar, setLocalChar] = useState(char);

  const debouncedOnChange = useDebouncedCallback(onChange, 300);

  const onCharChange = (e) => {
    setLocalChar(e.target.value);
    debouncedOnChange(`tie${index}_char`, e.target.value);
  };

  useEffect(() => {
    setLocalChar(char);
  }, [char]);

  return (
    <Grid container spacing={1} sx={{ p: 1 }}>
      <Grid item xs={5}>
        <TextField
          label="Personaggio"
          fullWidth
          variant="standard"
          value={localChar}
          onChange={onCharChange}
        />
      </Grid>

      <Grid item xs={7}>
        <CharacterTieEmotion
          name={`tie${index}_feeling1`}
          value={feeling1}
          options={[
            { id: "admiration", label: "Ammirazione" },
            { id: "inferiority", label: "Inferiorità" },
          ]}
          onChange={onChange}
        />
        <CharacterTieEmotion
          name={`tie${index}_feeling2`}
          value={feeling2}
          options={[
            { id: "loyalty", label: "Lealtà" },
            { id: "mistrust", label: "Sfiducia" },
          ]}
          onChange={onChange}
        />
        <CharacterTieEmotion
          name={`tie${index}_feeling3`}
          value={feeling3}
          options={[
            { id: "love", label: "Affetto" },
            { id: "hate", label: "Odio" },
          ]}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

const CharacterTieEmotion = function ({ name, value, options, onChange }) {
  return (
    <ToggleButtonGroup
      fullWidth
      size="small"
      exclusive
      name={name}
      value={value}
      onChange={(e) => {
        if (e.target.value === value) {
          onChange(name, "");
        } else {
          onChange(name, e.target.value);
        }
      }}
    >
      <ToggleButton name={name} sx={{ p: 0 }} value={options[0].id}>
        {options[0].label}
      </ToggleButton>
      <ToggleButton name={name} sx={{ p: 0 }} value={options[1].id}>
        {options[1].label}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
