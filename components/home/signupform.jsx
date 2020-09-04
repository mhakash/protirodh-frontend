import Router from "next/router";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useForm } from "react-hook-form";

import { useCookies } from "react-cookie";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const server = "http://localhost:5000/api";

const SignupForm = () => {
  const classes = useStyles();

  const [cookies, setCookie] = useCookies();
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (userInfo, e) => {
    console.log("from client side ", userInfo);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    };

    const response = await fetch(server + "/users/signup", requestOptions);
    const data = await response.json();
    const { token, error } = data;

    if (error) {
      setError(true);
    } else {
      console.log("raw TOKEN", token);
      //console.log(data);
      setCookie("token", token, { path: "/" });
      Router.push("/");
      console.log("TOKEN from cookies", cookies["token"]);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h5">অ্যাকাউন্ট খুলুন</Typography>

        <form className={classes.form} onSubmit={handleSubmit(onFormSubmit)}>
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="ইউসারনেম"
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="পাসওয়ার্ড"
            type="password"
          />
          {error ? "error occured" : null}
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            সাইন আপ
          </Button>
        </form>

        <Typography align="center" variant="body1" style={{ marginTop: 20 }}>
          আপনি আপনার আসল নাম ব্যবহার করতে পারেন অথবা ছদ্মনাম ব্যবহার করতে পারেন। আপনার সাহায্যের জন্যই এই তথ্যটুকু
          প্রয়োজন।
        </Typography>
      </div>
    </Container>
  );
};

export default SignupForm;
