import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { colors } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { Grid, Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: "100%",
    marginBottom: 10,
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
    //backgroundColor: red[500],
    color: "white",
  },
  avatarComment: {
    color: "white",
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: 0,
    //backgroundColor: red[500],
    fontSize: 12,
  },
}));

const avatarColor = [
  colors.red[500],
  colors.pink[500],
  colors.purple[500],
  colors.blue[500],
  colors.teal[500],
  colors.orange[500],
  colors.orange[500],
  colors.brown[500],
];

const Post = ({ post }) => {
  const classes = useStyles();

  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 1000));
  const [liked, setLiked] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikes(likes + 1);
    } else {
      setLiked(false);
      setLikes(likes - 1);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCommentSubmit = async (data, e) => {
    console.log(data, post._id);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", token: cookies["token"] },
      body: JSON.stringify({ comment: data.comment, _id: post._id }),
    };
    const res = await fetch("http://localhost:5000/api/posts/comment", requestOptions);
    const dataBack = await res.json();
    //const { error, name } = dataBack;
    console.log(dataBack);
    e.preventDefault();
    e.target.reset();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            style={{ backgroundColor: avatarColor[post.author[0].charCodeAt(0) % avatarColor.length] }}
          >
            {post.author[0]}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={<b>{post.author}</b>}
        subheader="September ১৪, ২০১৬"
      />

      <Divider variant="middle" />

      <CardContent>
        <Typography variant="body2" component="p">
          {post.content}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton onClick={handleLike}>
          {liked ? <FavoriteIcon style={{ color: red[500] }} /> : <FavoriteIcon />}
        </IconButton>

        {likes}

        <IconButton style={{ marginLeft: "auto" }} onClick={handleExpandClick} aria-expanded={expanded}>
          <Typography variant="body2">মন্তব্যসমূহ</Typography>
          <ExpandMoreIcon
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>
          {post.comments
            ? post.comments.map((comment) => {
                return (
                  <React.Fragment>
                    <Grid container key={comment._id} style={{ marginBottom: 10 }}>
                      <Grid item xs={1}>
                        <Avatar
                          className={classes.avatarComment}
                          style={{
                            backgroundColor: avatarColor[comment.author[0].charCodeAt(0) % avatarColor.length],
                          }}
                        >
                          {comment.author[0]}
                        </Avatar>
                      </Grid>
                      <Grid item xs={11}>
                        <Typography>
                          {<b>{comment.author}</b>} {comment.content}
                        </Typography>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                );
              })
            : null}

          <form onSubmit={handleSubmit(handleCommentSubmit)}>
            <TextField
              autoComplete="off"
              inputRef={register}
              variant="outlined"
              fullWidth
              name="comment"
              placeholder="মতামত দিন..."
              margin="dense"
            />
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
