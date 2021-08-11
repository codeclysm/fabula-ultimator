import Card from "@material-ui/core/Card";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import InputAdornment from "@material-ui/core/InputAdornment";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";

import PersonIcon from "@material-ui/icons/Person";
import TransgenderIcon from "@material-ui/icons/Transgender";
import AutoStoriesIcon from "@material-ui/icons/AutoStories";
import MapIcon from "@material-ui/icons/Map";
import LightbulbIcon from "@material-ui/icons/Lightbulb";

import Box from "@material-ui/core/Box";

export default function Character() {
  return (
    <Stack>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            label="Nome"
            fullWidth
            variant="standard"
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
      </Grid>
      {/* Traits */}
      <Card sx={{ mt: 1 }}>
        <Typography variant="h2" sx={cardTitle}>
          Tratti
        </Typography>
        <Box sx={{ p: 1 }}>
          <TextField
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
      {/* Ties */}
      <Card sx={{ mt: 2 }}>
        <Typography variant="h2" sx={cardTitle}>
          Legami
        </Typography>
        <Grid container spacing={1} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <TextField
              label="Personaggio"
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <ToggleButtonGroup
              fullWidth
              size="small"
              exclusive
              value="inferiority"
            >
              <ToggleButton sx={{ p: 0 }} value="admiration">
                Ammirazione
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="inferiority">
                Inferiorità
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup fullWidth size="small" exclusive value="loyalty">
              <ToggleButton sx={{ p: 0 }} value="loyalty">
                Lealtà
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="mistrust">
                Sfiducia
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup fullWidth size="small" exclusive value="love">
              <ToggleButton sx={{ p: 0 }} value="love">
                Affetto
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="hate">
                Odio
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <TextField
              label="Personaggio"
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <ToggleButtonGroup
              fullWidth
              size="small"
              exclusive
              value="inferiority"
            >
              <ToggleButton sx={{ p: 0 }} value="admiration">
                Ammirazione
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="inferiority">
                Inferiorità
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup fullWidth size="small" exclusive value="loyalty">
              <ToggleButton sx={{ p: 0 }} value="loyalty">
                Lealtà
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="mistrust">
                Sfiducia
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup fullWidth size="small" exclusive value="love">
              <ToggleButton sx={{ p: 0 }} value="love">
                Affetto
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="hate">
                Odio
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>{" "}
        <Grid container spacing={1} sx={{ p: 1 }}>
          <Grid item xs={6}>
            <TextField
              label="Personaggio"
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <ToggleButtonGroup
              fullWidth
              size="small"
              exclusive
              value="inferiority"
            >
              <ToggleButton sx={{ p: 0 }} value="admiration">
                Ammirazione
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="inferiority">
                Inferiorità
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup fullWidth size="small" exclusive value="loyalty">
              <ToggleButton sx={{ p: 0 }} value="loyalty">
                Lealtà
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="mistrust">
                Sfiducia
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup fullWidth size="small" exclusive value="love">
              <ToggleButton sx={{ p: 0 }} value="love">
                Affetto
              </ToggleButton>
              <ToggleButton sx={{ p: 0 }} value="hate">
                Odio
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}

const cardTitle = {
  textAlign: "center",
  fontSize: "1.125rem",
  background: "#264137",
  color: "#ffffff",
  py: 1,
};
