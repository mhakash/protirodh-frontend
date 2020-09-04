import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import { colors } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { Checkbox } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  root: {
    //width: "100%",
    marginBottom: 10,
  },
  share: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
    color: "white",
  },
}));

const PostForm = () => {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit } = useForm();
  const END = "http://localhost:5000/api";

  useEffect(() => {
    const token = cookies["token"];
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      };
      const res = await fetch("http://localhost:5000/api/users/me", requestOptions);
      const data = await res.json();
      const { error, name } = data;
      if (name) setLoggedIn(true);
      else setLoggedIn(false);
    };
    if (token) fetchData();
    else setLoggedIn(false);
  }, [cookies["token"]]);

  const onSubmit = async (data, e) => {
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", token: cookies["token"] },
      body: JSON.stringify({ post: data.postContent, anonymous: data.anonymous }),
    };
    const res = await fetch("http://localhost:5000/api/posts/add", requestOptions);
    const resData = await res.json();
    console.log(resData);
    e.target.reset();
  };

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar className={classes.avatar}>আ</Avatar>} title="আপনি" />

      <Divider variant="middle" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <TextField
            name="postContent"
            inputRef={register}
            placeholder="আপনার গল্পটি শেয়ার করূন......"
            fullWidth
            multiline
            disabled={!loggedIn}
            variant="outlined"
          />
        </CardContent>

        <CardActions disableSpacing>
          <Checkbox name="anonymous" inputRef={register} disabled={!loggedIn} />
          ইউসারনেম গোপন থাকবে
          <Button type="submit" className={classes.share} disabled={!loggedIn}>
            {loggedIn ? "শেয়ার" : ""}
          </Button>
          {loggedIn ? "" : "শেয়ার করতে লগইন করুন"}
        </CardActions>
      </form>
    </Card>
  );
};

export default PostForm;
