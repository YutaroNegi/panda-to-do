import { Box } from "@mui/system";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

interface ListState {
  listId: number | null;
  userId: number | null;
  listName: string | null;
  listItems: Array<string>;
}

function OpenList() {
  const params = useParams();
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const lists = useAppSelector((state) => state.lists.listArray);
  const listId: number = Number(params.listId);
  const selectedList = lists.filter((list) => list.listId === listId);
  console.log(lists)
  console.log(selectedList)

  const [list, setList] = useState<ListState>(selectedList[0]);

  return (
    <Box
      sx={{
        marginTop: "1em",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "1.5em",
          textTransform: "uppercase",
          backgroundColor: "#1976d2",
          color: "#fff",
          padding: "0.5em",
          width: "10em",
          margin: "auto",
          borderRadius: "0.5em",
        }}
      >
        {list.listName}
      </Box>

      <List sx={{ width: "100%", maxWidth: '20em', bgcolor: "background.paper", margin: '1em auto auto auto', border: '0.2em solid #1976d2', borderRadius: '0.5em'}}>
        {list.listItems.map((value, index) => {
          const labelId = `checkbox-list-label-${index}`;

          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(index)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default OpenList;
