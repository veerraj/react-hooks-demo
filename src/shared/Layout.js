import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DialogComponent from "../ui/Dialog";
import { useDispatch } from 'react-redux'
import { dialogOpen } from "../store/actions/dialogAction";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Layout = () => {

   const dispatch = useDispatch();

  const openDialog = () =>{
      dispatch(dialogOpen())
  }
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            User Management System
          </Typography>
          <Button color="inherit" variant="outlined" onClick={openDialog}>Create User</Button>
        </Toolbar>
      </AppBar>
      <DialogComponent />
    </div>
  );
}

export default Layout;
