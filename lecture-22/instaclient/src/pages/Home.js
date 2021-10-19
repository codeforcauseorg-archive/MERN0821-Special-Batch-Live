import InstaPost from "../components/InstaPost";
import { List, ListItem } from "@mui/material";

export default function Home() {
  return (
    <List>
      <InstaPost />
      <InstaPost />
      <InstaPost />
      <InstaPost />
    </List>
  );
}
