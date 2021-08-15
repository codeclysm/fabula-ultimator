import Card from "@material-ui/core/Card";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

export default function CharacterAbilities({
  des,
  bdes,
  int,
  bint,
  vig,
  bvig,
  vol,
  bvol,
  slow,
  confused,
  weak,
  shaken,
  angry,
  poisoned,
  onChange,
}) {
  return (
    <Card sx={{ mt: 2 }}>
      <Typography variant="cardtitle" component="div">
        <Grid container>
          <Grid item xs={3}>
            Destrezza
          </Grid>
          <Grid item xs={3}>
            Intuito
          </Grid>
          <Grid item xs={3}>
            Vigore
          </Grid>
          <Grid item xs={3}>
            Volontà
          </Grid>
        </Grid>
      </Typography>
      <Grid container>
        <Grid item xs={3}>
          <CharacterAbility
            baseAbility={bdes}
            ability={des}
            setAbility={(value) => {
              onChange("des", value);
            }}
            setBaseAbility={(value) => {
              onChange("bdes", value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <CharacterAbility
            baseAbility={bint}
            ability={int}
            setAbility={(value) => {
              onChange("int", value);
            }}
            setBaseAbility={(value) => {
              onChange("bint", value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <CharacterAbility
            baseAbility={bvig}
            ability={vig}
            setAbility={(value) => {
              onChange("vig", value);
            }}
            setBaseAbility={(value) => {
              onChange("bvig", value);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <CharacterAbility
            baseAbility={bvol}
            ability={vol}
            setAbility={(value) => {
              onChange("vol", value);
            }}
            setBaseAbility={(value) => {
              onChange("bvol", value);
            }}
          />
        </Grid>
      </Grid>
      <CharacterStatuses
        des={des}
        int={int}
        vig={vig}
        vol={vol}
        slow={slow}
        confused={confused}
        weak={weak}
        shaken={shaken}
        angry={angry}
        poisoned={poisoned}
        onChange={onChange}
      />
    </Card>
  );
}

function CharacterAbility({
  baseAbility,
  setBaseAbility,
  ability,
  setAbility,
}) {
  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid item>
        <Slider
          sx={{
            height: "100px",
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          marks
          orientation="vertical"
          min={6}
          max={12}
          step={2}
          value={baseAbility}
          onChange={(e) => {
            setBaseAbility(e.target.value);
          }}
        />
        <Typography sx={{ mt: 1 }}>Base</Typography>
      </Grid>
      <Grid item>
        <Slider
          sx={{
            height: "100px",
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          min={6}
          max={12}
          orientation="vertical"
          step={null}
          value={ability}
          onChange={(e) => {
            setAbility(e.target.value);
          }}
          marks={[
            {
              value: 6,
              label: "d6",
            },
            {
              value: 8,
              label: "d8",
            },
            {
              value: 10,
              label: "d10",
            },
            {
              value: 12,
              label: "d12",
            },
          ]}
        />
        <Typography sx={{ mt: 1 }}>Attuale</Typography>
      </Grid>
    </Grid>
  );
}

function CharacterStatuses({
  des,
  int,
  vig,
  vol,
  slow,
  confused,
  weak,
  shaken,
  angry,
  poisoned,
  onChange,
}) {
  const onSlowUpdate = (e) => {
    onChange("slow", e.target.checked);
    if (e.target.checked) {
      onChange("des", des - 2);
    } else {
      onChange("des", des + 2);
    }
  };

  const onConfusedUpdate = (e) => {
    onChange("confused", e.target.checked);
    if (e.target.checked) {
      onChange("int", int - 2);
    } else {
      onChange("int", int + 2);
    }
  };

  const onWeakUpdate = (e) => {
    onChange("weak", e.target.checked);
    if (e.target.checked) {
      onChange("vig", vig - 2);
    } else {
      onChange("vig", vig + 2);
    }
  };

  const onShakenUpdate = (e) => {
    onChange("shaken", e.target.checked);
    if (e.target.checked) {
      onChange("vol", vol - 2);
    } else {
      onChange("vol", vol + 2);
    }
  };

  const onAngryUpdate = (e) => {
    onChange("angry", e.target.checked);
    if (e.target.checked) {
      onChange("des", des - 2);
      onChange("int", int - 2);
    } else {
      onChange("des", des + 2);
      onChange("int", int + 2);
    }
  };

  const onPoisonedUpdate = (e) => {
    onChange("poisoned", e.target.checked);
    if (e.target.checked) {
      onChange("vig", vig - 2);
      onChange("vol", vol - 2);
    } else {
      onChange("vig", vig + 2);
      onChange("vol", vol + 2);
    }
  };

  return (
    <Grid container>
      <Grid item xs={3} textAlign="center">
        <FormControlLabel
          control={<Switch value={slow} onChange={onSlowUpdate} />}
          label="Lento"
        />
      </Grid>
      <Grid item xs={3} textAlign="center">
        <FormControlLabel
          control={<Switch value={confused} onChange={onConfusedUpdate} />}
          label="Confuso"
        />
      </Grid>
      <Grid item xs={3} textAlign="center">
        <FormControlLabel
          control={<Switch value={weak} onChange={onWeakUpdate} />}
          label="Debole"
        />
      </Grid>
      <Grid item xs={3} textAlign="center">
        <FormControlLabel
          control={<Switch value={shaken} onChange={onShakenUpdate} />}
          label="Scosso"
        />
      </Grid>
      <Grid item xs={6} textAlign="center">
        <FormControlLabel
          control={<Switch value={angry} onChange={onAngryUpdate} />}
          label="Furente"
        />
      </Grid>
      <Grid item xs={6} textAlign="center">
        <FormControlLabel
          control={<Switch value={poisoned} onChange={onPoisonedUpdate} />}
          label="Avvelenato"
        />
      </Grid>
    </Grid>
  );
}
