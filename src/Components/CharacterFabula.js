import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function CharacterFabula({ fabula, exp, onChange }) {
  return (
    <Card sx={{ mt: 2 }}>
      <Typography variant="cardtitle" component="div">
        <Grid container>
          <Grid item xs={6}>
            Punti Fabula
          </Grid>
          <Grid item xs={6}>
            Punti Esperienza
          </Grid>
        </Grid>
      </Typography>
      <Grid container spacing={1} sx={{ px: 2, py: 2.2 }}>
        <Grid item xs={6}>
          <TextField
            name="fabula"
            variant="outlined"
            value={fabula}
            type="number"
            onChange={(e) => {
              onChange("fabula", e.target.value);
            }}
            inputProps={{
              style: { textAlign: "center", padding: 0, fontSize: "2rem" },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="exp"
            variant="outlined"
            value={exp}
            type="number"
            onChange={(e) => {
              onChange("exp", e.target.value);
            }}
            inputProps={{
              style: { textAlign: "center", padding: 0, fontSize: "2rem" },
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
