import React from "react";
import UserCard from "./userCard";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const UserList = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.user.users);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {users.length ? (
          users.map((user) => (
            <Grid item key={user.id}>
              <UserCard
                name={user.name}
                date={user.birthdate}
                description={user.description}
                image={user.imageurl}
                email={user.email}
                id={user.id}
              />
            </Grid>
          ))
        ) : (
          <h2
            style={{
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              color: "grey"
            }}
          >
            No Data Found...
          </h2>
        )}
      </Grid>
    </div>
  );
};

export default UserList;
