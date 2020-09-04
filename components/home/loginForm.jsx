import { useState } from "react";
import Link from "next/link";

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
const server = "http://localhost:5000/api";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

const LoginForm = ({ handleClose }) => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies();
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState(false);
  const onFormSubmit = async (data, e) => {
    //console.log(data);
    //console.log(cookies["token"]);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", token: cookies["token"] },
      body: JSON.stringify(data),
    };

    const response = await fetch(server + "/users/login", requestOptions);
    const { token, error } = await response.json();
    //console.log(token);
    if (token) setCookie("token", token, { path: "/" });
    console.log(cookies["token"]);
    if (error) setLoginError(true);
    if (!error) handleClose();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h5">লগ ইন</Typography>

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
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            লগইন করুন
          </Button>
          {loginError ? "Login failed" : null} <br />
          <Link href="/signup">
            <a>অ্যাকাউন্ট নেই? একটি আকাউন্ট খুলুন</a>
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
