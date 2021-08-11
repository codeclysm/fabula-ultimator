import { useFormik } from "formik";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";
import TextField from "@material-ui/core/TextField";

import PersonIcon from "@material-ui/icons/Person";
import TransgenderIcon from "@material-ui/icons/Transgender";
import AutoStoriesIcon from "@material-ui/icons/AutoStories";
import MapIcon from "@material-ui/icons/Map";
import LightbulbIcon from "@material-ui/icons/Lightbulb";
import SaveIcon from "@material-ui/icons/Save";

import Box from "@material-ui/core/Box";

export default function Character({ data, onChange }) {
  const formik = useFormik({
    initialValues: data,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      if (onChange) {
        await onChange(values);
      }
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ position: "relative" }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            label="Nome"
            fullWidth
            variant="standard"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
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
            fullWidth
            value={formik.values.gender}
            onChange={formik.handleChange}
            label="Genere"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TransgenderIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <Button
            size="large"
            variant="contained"
            fullWidth
            startIcon={<SaveIcon />}
            type="submit"
          >
            Save
          </Button>
        </Grid>
      </Grid>
      {/* Traits */}
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Card sx={{ mt: 2 }}>
            <Typography variant="h2" sx={cardTitle}>
              Tratti
            </Typography>
            <Box sx={{ p: 1 }}>
              <TextField
                name="identity"
                value={formik.values.identity}
                onChange={formik.handleChange}
                label="Identità"
                fullWidth
                variant="standard"
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
                  value={formik.values.theme}
                  onChange={formik.handleChange}
                  label="Tema"
                  fullWidth
                  variant="standard"
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
                  value={formik.values.origin}
                  onChange={formik.handleChange}
                  label="Origine"
                  fullWidth
                  variant="standard"
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
        </Grid>
        {/* Ties */}
        <Grid item xs={7}>
          <Card sx={{ mt: 2 }}>
            <Typography variant="h2" sx={cardTitle}>
              Legami
            </Typography>
            <Grid container>
              {[1, 2, 3, 4, 5, 6].map((i) => {
                return (
                  <Grid item xs={6} key={i}>
                    <Grid container spacing={1} sx={{ p: 1 }}>
                      <Grid item xs={5}>
                        <TextField
                          name={`tie${i}_char`}
                          value={formik.values[`tie${i}_char`]}
                          onChange={formik.handleChange}
                          label="Personaggio"
                          fullWidth
                          variant="standard"
                        />
                      </Grid>

                      <Grid item xs={7}>
                        <ToggleButtonGroup
                          fullWidth
                          size="small"
                          exclusive
                          name={`tie${i}_feeling1`}
                          value={formik.values[`tie${i}_feeling1`]}
                          onChange={formik.handleChange}
                        >
                          <ToggleButton
                            name={`tie${i}_feeling1`}
                            sx={{ p: 0 }}
                            value="admiration"
                          >
                            Ammirazione
                          </ToggleButton>
                          <ToggleButton
                            name={`tie${i}_feeling1`}
                            sx={{ p: 0 }}
                            value="inferiority"
                          >
                            Inferiorità
                          </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup
                          fullWidth
                          size="small"
                          exclusive
                          name={`tie${i}_feeling2`}
                          value={formik.values[`tie${i}_feeling2`]}
                          onChange={formik.handleChange}
                        >
                          <ToggleButton
                            name={`tie${i}_feeling2`}
                            sx={{ p: 0 }}
                            value="loyalty"
                          >
                            Lealtà
                          </ToggleButton>
                          <ToggleButton
                            name={`tie${i}_feeling2`}
                            sx={{ p: 0 }}
                            value="mistrust"
                          >
                            Sfiducia
                          </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup
                          fullWidth
                          size="small"
                          exclusive
                          name={`tie${i}_feeling3`}
                          value={formik.values[`tie${i}_feeling3`]}
                          onChange={formik.handleChange}
                        >
                          <ToggleButton
                            name={`tie${i}_feeling3`}
                            sx={{ p: 0 }}
                            value="love"
                          >
                            Affetto
                          </ToggleButton>
                          <ToggleButton
                            name={`tie${i}_feeling3`}
                            sx={{ p: 0 }}
                            value="hate"
                          >
                            Odio
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}

const cardTitle = {
  textAlign: "center",
  fontSize: "1.125rem",
  background: "#264137",
  color: "#ffffff",
  py: 1,
};
