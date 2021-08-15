import Card from "@material-ui/core/Card";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";

import AutoStoriesIcon from "@material-ui/icons/AutoStories";
import MapIcon from "@material-ui/icons/Map";
import LightbulbIcon from "@material-ui/icons/Lightbulb";

export default function CharacterTraits({ identity, theme, origin, onChange }) {
  const [localIdentity, setLocalIdentity] = useState(identity);
  const [localTheme, setLocalTheme] = useState(theme);
  const [localOrigin, setLocalOrigin] = useState(origin);

  const debouncedOnChange = useDebouncedCallback(onChange, 300);

  const onIdentityChange = (e) => {
    setLocalIdentity(e.target.value);
    debouncedOnChange("identity", e.target.value);
  };

  const onThemeChange = (e) => {
    setLocalTheme(e.target.value);
    debouncedOnChange("theme", e.target.value);
  };

  const onOriginChange = (e) => {
    setLocalOrigin(e.target.value);
    debouncedOnChange("origin", e.target.value);
  };

  useEffect(() => {
    setLocalIdentity(identity);
    setLocalTheme(theme);
    setLocalOrigin(origin);
  }, [identity, theme, origin]);

  return (
    <Card sx={{ mt: 2 }}>
      <Typography variant="cardtitle" component="div">
        Tratti
      </Typography>
      <Box sx={{ p: 1 }}>
        <TextField
          name="identity"
          label="Identità"
          fullWidth
          variant="standard"
          value={localIdentity}
          onChange={onIdentityChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AutoStoriesIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid item xs={6}>
          <TextField
            name="theme"
            label="Tema"
            fullWidth
            variant="standard"
            value={localTheme}
            onChange={onThemeChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LightbulbIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="origin"
            label="Origine"
            fullWidth
            variant="standard"
            value={localOrigin}
            onChange={onOriginChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MapIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
