import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { dialogOpen, createUser } from "../store/actions/index";
import shortid from "shortid";
import { setUser, updateUser } from "../store/actions/userAction";

const DialogComponent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const dispatch = useDispatch();

  const openValue = useSelector((state) => state.dialog.openDialog);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setBirthDate(user.birthdate);
      setEmail(user.email);
      setDescription(user.description);
      setImageUrl(user.imageurl);
    }
  }, [user]);

  const handleClose = () => {
    dispatch(dialogOpen());
    clearForm();
    dispatch(setUser());
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setImageUrl("");
    setDescription("");
    setBirthDate("");
  };

  const CreateUser = (e) => {
    e.preventDefault();
    const payload = {
      id: shortid.generate(),
      name,
      email,
      birthdate,
      imageurl,
      description,
    };
    dispatch(createUser(payload));
    dispatch(dialogOpen());
    clearForm();
  };
  const UpdateUser = (e) => {
    e.preventDefault();
    const payload = {
      id: user.id,
      name,
      email,
      birthdate,
      imageurl,
      description,
    };
    dispatch(updateUser(payload));
    dispatch(dialogOpen());
    clearForm();
    dispatch(setUser());
  };

  return (
    <div>
      <Dialog open={openValue} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <Grid container>
            <Typography
              style={{
                flexGrow: 1,
              }}
              variant="subtitle1"
            >
              User Registration
            </Typography>
            <IconButton
              style={{
                padding: 0,
              }}
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid
            style={{ padding: 25 }}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <TextField
              style={{ paddingBottom: 10 }}
              //type="text"
              label="name"
              placeholder="Enter Name"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              style={{ paddingBottom: 10 }}
              // type="email"
              label="email"
              placeholder="Enter Email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              style={{ paddingBottom: 10 }}
              // type="text"
              label="image url"
              placeholder="Enter Image Url"
              variant="outlined"
              value={imageurl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />

            <TextField
              style={{ paddingBottom: 10 }}
              type="date"
              fullWidth
              variant="outlined"
              value={birthdate}
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
            <TextField
              style={{ paddingBottom: 10 }}
              // type="textarea"
              multiline
              rows={3}
              label="description"
              placeholder="Enter Description"
              variant="outlined"
              fullWidth
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Grid>
        </DialogContent>
        <Divider />

        <Grid
          container
          style={{
            padding: 10,
          }}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Button
            variant="outlined"
            color="primary"
            style={{
              marginRight:5
            }}
            onClick={!user ? (e) => CreateUser(e) : (e) => UpdateUser(e)}
          >
            {!user ? "Create" : "Update"}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            close
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
