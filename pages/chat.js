import { useState } from "react";

import { Paper, makeStyles, Grid, TextField, Button, Typography, colors, CssBaseline } from "@material-ui/core/";

import Layout from "../components/Layout";
import { useEffect, useRef } from "react";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
//import useSWR from "swr";

const API_END = "http://localhost:5000";
let socket;

const fetcher = (url) => fetch(url).then((r) => r.json());

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingTop: 70,
    //padding: 30,
    height: "100vh",
    backgroundColor: "white",
  },
  text: {
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
  },
  textContainer: {
    margin: 5,
    padding: 7,
    display: "inline-block",
    maxWidth: "70%",
  },
  divider: {
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "black",
  },
  bottomBar: {
    height: "10vh",
    //marginTop: 10,
    //marginBottom: 10,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Chat = () => {
  //const { data } = useSWR(`${API_END}/chat`);
  const classes = useStyles();

  const [chat, setChat] = useState([]);

  const { register, handleSubmit, watch, errors } = useForm();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chat]);

  useEffect(() => {
    socket = io(API_END);
    socket.emit("join", { name: "akash" });
    const data = fetch(`${API_END}/api/chat`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (message) => {
      console.log("receive", message);

      setChat([...chat, { type: "received", msg: message }]);
    });
  }, [chat]);

  const onSubmit = (data, e) => {
    console.log("send", data.input);
    socket.emit("message", data.input);
    setChat([...chat, { type: "sent", msg: data.input }]);
    e.target.reset();
  };

  return (
    <Layout>
      <Grid container>
        <Grid item lg={4} xs={0}></Grid>

        <Grid item lg={4} xs={12}>
          <div className={classes.container}>
            <div style={{ padding: 15, overflowY: "auto" }}>
              {chat.length > 0 &&
                chat.map((text, index) =>
                  text.type === "received" ? (
                    <div align="left">
                      <Paper
                        className={classes.textContainer}
                        style={{ backgroundColor: colors.teal[500] }}
                        align="left"
                        key={index}
                      >
                        <Typography className={classes.text} style={{ color: "white" }} variant="body1">
                          {text.msg}
                        </Typography>
                      </Paper>
                    </div>
                  ) : (
                    <div align="right">
                      <Paper
                        className={classes.textContainer}
                        style={{ backgroundColor: colors.grey[100] }}
                        align="right"
                        key={index}
                      >
                        <Typography className={classes.text} variant="body1">
                          {text.msg}
                        </Typography>
                      </Paper>
                    </div>
                  )
                )}
              <div ref={messagesEndRef}></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Paper square elevation={5} style={{ padding: 20, backgroundColor: "white" }}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs={10}>
                    <TextField
                      autoComplete="off"
                      name="input"
                      margin="dense"
                      multiline
                      inputRef={register}
                      placeholder="........."
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2} align="center">
                    <Button type="submit" variant="contained" color="primary">
                      সেন্ড
                    </Button>
                  </Grid>
                </Grid>
              </Paper>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        </Grid>

        <Grid item lg={4} xs={0}></Grid>
      </Grid>
    </Layout>
  );
};

export default Chat;
