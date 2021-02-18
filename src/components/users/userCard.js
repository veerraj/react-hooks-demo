import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { setUser, dialogOpen, deleteUser } from "../../store/actions/index";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 10,
    },
    media: {
      height: 100,
      width: 300,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const UserCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const editUser = (id) => {
    dispatch(setUser(id));
    dispatch(dialogOpen());
  };

  const DeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
          subheader={props.date}
        />
        <CardMedia
          className={classes.media}
          image={
            props.image === "" ||
            !/\.(gif|jpg|jpeg|tiff|png)$/i.test(props.image)
              ? "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
              : props.image
          }
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="outlined"
            color="secondary"
            style={{
              marginRight: 5,
            }}
            onClick={() => editUser(props.id)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => DeleteUser(props.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserCard;
