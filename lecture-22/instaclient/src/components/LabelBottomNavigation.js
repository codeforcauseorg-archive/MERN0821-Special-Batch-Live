import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useHistory } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PersonIcon from '@mui/icons-material/Person';

export default function LabelBottomNavigation() {
  const history = useHistory();
  const [value, setValue] = React.useState(history.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Search"
        value="/search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Add"
        value="/add"
        icon={<AddBoxIcon />}
      />
      <BottomNavigationAction
        label="Reels"
        value="/reels"
        icon={<OndemandVideoIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}
