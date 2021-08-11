import { useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../firebase";

import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";

import Character from "../Components/Character";

export default function Campaign() {
  let { id } = useParams();

  console.debug(id);

  const charactersRef = firestore.collection("characters");
  const query = charactersRef
    .where("campaign", "==", id)
    .orderBy("createdAt", "desc");

  const [characters] = useCollectionData(query, { idField: "id" });

  // Handle tabs
  const [tab, setTab] = useState(0);
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Container sx={{ bgcolor: "#E2F3EE" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {characters?.map((character) => {
            return <Tab label="Item One" />;
          })}
        </Tabs>
        <Button variant="outlined">Add</Button>
      </Box>
      {characters?.map((character) => {
        return (
          <TabPanel value={tab} index={0}>
            <Character data={character} />
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
