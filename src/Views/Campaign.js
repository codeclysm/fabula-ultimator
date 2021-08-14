import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../firebase";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";

import Character from "../Components/Character";

export default function Campaign() {
  let { id } = useParams();

  // Handle character data
  const charactersRef = firestore.collection("characters");
  const query = charactersRef.where("campaign", "==", id);

  const [characters] = useCollectionData(query, { idField: "id" });

  const addCharacter = async () => {
    const user = auth.currentUser;

    await charactersRef.add({
      name: "New character",
      campaign: id,
      user: user.displayName,
    });
  };

  const saveCharacter = async (id, key, value) => {
    await charactersRef.doc(id).update({ [key]: value });
  };

  // Handle tabs
  const [tab, setTab] = useState(0);
  const changeTab = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Container sx={{ bgcolor: "background.main" }}>
      <Grid
        spacing={1}
        container
        sx={{ py: 1, borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs value={tab} onChange={changeTab} aria-label="basic tabs example">
          {characters?.map((character) => {
            return <Tab label={character.name} key={character.id} />;
          })}
        </Tabs>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addCharacter}
          sx={{ ml: 1 }}
        >
          Add
        </Button>
      </Grid>
      {characters?.map((character, i) => {
        return (
          <TabPanel value={tab} index={i} key={character.id}>
            <Character
              data={character}
              onChange={(key, value) => {
                saveCharacter(character.id, key, value);
              }}
            />
          </TabPanel>
        );
      })}
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
