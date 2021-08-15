import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CharacterBasics from "./CharacterBasics";
import CharacterAbilities from "./CharacterAbilities";
import CharacterStats from "./CharacterStats";
import CharacterTraits from "./CharacterTraits";
import CharacterTies from "./CharacterTies";
import CharacterFabula from "./CharacterFabula";

export default function Character({ data, onChange }) {
  return (
    <Container>
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
          <CharacterFabula
            fabula={data.fabula}
            exp={data.exp}
            onChange={onChange}
          />
        </Grid>
        {/* Ties */}
        <Grid item xs={7}>
          <CharacterTies
            tie1_char={data.tie1_char}
            tie1_feeling1={data.tie1_feeling1}
            tie1_feeling2={data.tie1_feeling2}
            tie1_feeling3={data.tie1_feeling3}
            tie2_char={data.tie2_char}
            tie2_feeling1={data.tie2_feeling1}
            tie2_feeling2={data.tie2_feeling2}
            tie2_feeling3={data.tie2_feeling3}
            tie3_char={data.tie3_char}
            tie3_feeling1={data.tie3_feeling1}
            tie3_feeling2={data.tie3_feeling2}
            tie3_feeling3={data.tie3_feeling3}
            tie4_char={data.tie4_char}
            tie4_feeling1={data.tie4_feeling1}
            tie4_feeling2={data.tie4_feeling2}
            tie4_feeling3={data.tie4_feeling3}
            tie5_char={data.tie5_char}
            tie5_feeling1={data.tie5_feeling1}
            tie5_feeling2={data.tie5_feeling2}
            tie5_feeling3={data.tie5_feeling3}
            tie6_char={data.tie6_char}
            tie6_feeling1={data.tie6_feeling1}
            tie6_feeling2={data.tie6_feeling2}
            tie6_feeling3={data.tie6_feeling3}
            onChange={onChange}
          />
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
    </Container>
  );
}
