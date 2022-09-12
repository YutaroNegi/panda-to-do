import React, { useState } from "react";
import { Box } from "@mui/system";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { toastSucess, toastError, toastWarning } from "./Toaster";
import { setList } from "../redux/listSlice";

interface ListState {
  listId: number | null;
  userId: number | null;
  listName: string | null;
  listItems: Array<string>;
}

interface UserState {
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
}

function Home() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [listName, setListName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const lists: Array<ListState> = useAppSelector(
    (state) => state.lists.listArray
  );
  const user: UserState = useAppSelector((state) => state.user);
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function openList(listId: number | null) {
    navigate(`/list/${listId}`);
  }

  async function createList() {
    if (!listName) return toastWarning("List name cannot be empty!");
    try {
      setLoading(true);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listName, userId: user.userId }),
      };

      const response: any = await fetch("/api/new_list", options);
      const data: ListState = await response.json();

      if (!data.listId) throw "Something went wrong creating list!";
      
      dispatch(setList({ listArray: [...lists, data] }));
      toastSucess("List successfully created!");
      setLoading(false);
      setOpen(false);
      // navigate(`/list/${data.listId}`);
    } catch (error) {
      console.log('ERRO NA CRIADA')
      console.log("error creating list!");
      console.log(error);
    }
  }

  function handleInput(listName: string) {
    setListName(listName);
  }

  return (
    <Box sx={{ marginTop: "1em" }}>
      <Box sx={{ textAlign: "center", marginBottom: '1em' }}>
        <LoadingButton data-testid="newListBtn" onClick={handleClickOpen} variant="contained">
          <AddIcon />
        </LoadingButton>
      </Box>

      {lists.map((list: ListState) => {
        return (
          <Card
            onClick={() => {
              openList(list.listId);
            }}
            key={list.listId}
            sx={{
              maxWidth: "20em",
              margin: "auto",
              textAlign: "center",
              cursor: "pointer",
              marginBottom: "1em",
            }}
          >
            <CardContent>{list.listName}</CardContent>
          </Card>
        );
      })}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center", color: "#1976d2" }}>
          New List
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => handleInput(e.target.value)}
            autoFocus
            margin="dense"
            id="listName"
            label="List Name"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions sx={{ margin: "auto" }}>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton loading={loading} variant="contained"  onClick={createList}>Create List</LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Home;
