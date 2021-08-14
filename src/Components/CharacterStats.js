import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function CharacterStats({
  hpmax,
  hp,
  mpmax,
  mp,
  ipmax,
  ip,
  onChange,
}) {
  const isCrisis = hp < hpmax / 2;

  return (
    <Card sx={{ mt: 2 }}>
      <Typography variant="cardtitle" component="div">
        Statistiche
      </Typography>
      <Grid container spacing={1} alignItems="center" sx={{ p: 2 }}>
        <Grid item xs={2}>
          <TextField
            label="PV Max"
            size="small"
            fullWidth
            type="number"
            variant="outlined"
            value={hpmax}
            onChange={(e) => {
              onChange("hpmax", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="PV"
            size="small"
            fullWidth
            type="number"
            variant="outlined"
            value={hp}
            onChange={(e) => {
              onChange("hp", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={8} sx={{ position: "relative" }}>
          {isCrisis && (
            <Typography
              sx={{
                position: "absolute",
                top: "-15px",
                width: "100%",
                color: "red.main",
                fontWeight: "bold",
              }}
            >
              Crisi!
            </Typography>
          )}
          <LinearProgress
            sx={{ width: "100%" }}
            variant="determinate"
            color="red"
            value={(hp / hpmax) * 100}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="PM Max"
            size="small"
            fullWidth
            type="number"
            variant="outlined"
            value={mpmax}
            onChange={(e) => {
              onChange("mpmax", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="PM"
            size="small"
            fullWidth
            type="number"
            variant="outlined"
            value={mp}
            onChange={(e) => {
              onChange("mp", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <LinearProgress
            sx={{ width: "100%" }}
            variant="determinate"
            value={(mp / mpmax) * 100}
            color="cyan"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="PI Max"
            size="small"
            fullWidth
            type="number"
            variant="outlined"
            value={ipmax}
            onChange={(e) => {
              onChange("ipmax", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="PI"
            size="small"
            fullWidth
            type="number"
            variant="outlined"
            value={ip}
            onChange={(e) => {
              onChange("ip", e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <LinearProgress
            sx={{ width: "100%" }}
            variant="determinate"
            value={(ip / ipmax) * 100}
            color="black"
          />
        </Grid>
      </Grid>
    </Card>
  );
}
