import { useFormik } from "formik";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";
import TextField from "@material-ui/core/TextField";

import CharacterBasics from "./CharacterBasics";
import CharacterAbilities from "./CharacterAbilities";
import CharacterStats from "./CharacterStats";
import CharacterTraits from "./CharacterTraits";

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
      {/* Basics */}
      <CharacterBasics
        name={data.name}
        player={data.player}
        gender={data.gender}
        onChange={onChange}
      />
      {/* Traits */}
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <CharacterTraits
            identity={data.identity}
            theme={data.theme}
            origin={data.origin}
            onChange={onChange}
          />
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CharacterAbilities
            des={data.des}
            bdes={data.bdes}
            int={data.int}
            bint={data.bint}
            vig={data.vig}
            bvig={data.bvig}
            vol={data.vol}
            bvol={data.bvol}
            slow={data.slow}
            confused={data.confused}
            weak={data.weak}
            shaken={data.shaken}
            angry={data.angry}
            poisoned={data.poisoned}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={6}>
          <CharacterStats
            hpmax={data.hpmax}
            hp={data.hp}
            mpmax={data.mpmax}
            mp={data.mp}
            ipmax={data.ipmax}
            ip={data.ip}
            onChange={onChange}
          ></CharacterStats>
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
