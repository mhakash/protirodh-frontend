import { useState } from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Grid,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  colors,
  Hidden,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import MenuRounded from "@material-ui/icons/MenuRounded";
import StarBorder from "@material-ui/icons/StarBorder";
import MuiLink from "@material-ui/core/Link";
import LoginForm from "./home/loginForm";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  divider: {
    //height: 1,
    backgroundColor: "white",
  },
}));

function Logo() {
  return <img src="/logo.png" alt="Logo" style={{ height: 70 }} />;
}

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [currentUser, setCurrentUser] = React.useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [drop, setDrop] = React.useState(false);

  const handleMenuClick = () => {
    setDrop(!drop);
  };

  React.useEffect(() => {
    const token = cookies["token"];
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      };
      const res = await fetch("http://localhost:5000/api/users/me", requestOptions);
      const data = await res.json();
      const { error, name } = data;
      if (name) setCurrentUser(name);
    };
    if (token) fetchData();
  }, [cookies["token"]]);

  const handleClose = async () => {
    setOpen(false);
  };

  const handleLogout = () => {
    //console.log(cookies["token"]);
    removeCookie("token");
    setCurrentUser(null);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" style={{ backgroundColor: colors.teal[800] }}>
        <Toolbar>
          <Grid container alignItems="center" style={{ marginTop: 2, marginBottom: 2 }}>
            <Grid item lg={1} xs={0}></Grid>

            <Hidden smUp>
              <Grid item xs={2}>
                <IconButton color="inherit" onClick={handleMenuClick}>
                  <MenuRounded />
                </IconButton>
              </Grid>
            </Hidden>

            <Hidden smDown>
              <Grid container item lg={5} alignItems="center">
                <Grid item>
                  <Logo />
                </Grid>

                <Grid item>
                  <Link href="/">
                    <Typography variant="h5">
                      <MuiLink href="#" color="inherit" underline="none">
                        প্রতিরোধ
                      </MuiLink>
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Hidden>

            <Hidden smUp>
              <Grid container item xs={7} alignItems="center" justify="center">
                <Grid item>
                  <Logo />
                </Grid>

                <Grid item>
                  <Link href="/">
                    <Typography variant="h5">
                      <MuiLink href="#" color="inherit" underline="none">
                        প্রতিরোধ
                      </MuiLink>
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Hidden>

            <Hidden smDown>
              <Grid item lg={5}>
                <Box align="right">
                  <Link href="/assistance">
                    <Button size="large" align="right" color="inherit">
                      সহায়তা
                    </Button>
                  </Link>

                  <Link href="/">
                    <Button size="large" align="right" color="inherit">
                      হোম
                    </Button>
                  </Link>

                  <Link href="/about">
                    <Button size="large" align="right" color="inherit">
                      অ্যাবাউট
                    </Button>
                  </Link>

                  {!currentUser ? (
                    <Button size="large" align="right" color="inherit" onClick={handleClickOpen}>
                      লগইন
                    </Button>
                  ) : (
                    <Button size="large" align="right" color="inherit" onClick={handleLogout}>
                      লগআউট
                    </Button>
                  )}
                </Box>
              </Grid>
            </Hidden>

            <Grid item sm={0} xs={3}></Grid>

            <Grid item lg={1} xs={0}></Grid>
          </Grid>
        </Toolbar>

        <Collapse in={drop} timeout="auto" unmountOnExit>
          <List disablePadding style={{ marginLeft: 15, marginRight: 15 }}>
            <Divider classes={{ root: classes.divider }} />

            {!currentUser ? (
              <ListItem button color="inherit" onClick={handleClickOpen}>
                লগইন
              </ListItem>
            ) : (
              <ListItem button color="inherit" onClick={handleLogout}>
                লগআউট
              </ListItem>
            )}

            <Divider classes={{ root: classes.divider }} />

            <Link href="/">
              <ListItem button color="inherit">
                হোম
              </ListItem>
            </Link>

            <Divider classes={{ root: classes.divider }} />

            <Link href="/assistance">
              <ListItem button color="inherit">
                সহায়তা
              </ListItem>
            </Link>

            <Divider classes={{ root: classes.divider }} />

            <Link href="/assistance">
              <ListItem button color="inherit">
                আপনি জানেন কি?
              </ListItem>
            </Link>

            <Divider classes={{ root: classes.divider }} />

            <Link href="/assistance">
              <ListItem button color="inherit">
                FAQ
              </ListItem>
            </Link>

            <Divider classes={{ root: classes.divider }} />

            <Link href="/assistance">
              <ListItem button color="inherit">
                আইন জানুন
              </ListItem>
            </Link>

            <Divider classes={{ root: classes.divider }} />

            <Link href="/about">
              <ListItem button color="inherit">
                অ্যাবাউট
              </ListItem>
            </Link>

            <Divider classes={{ root: classes.divider }} style={{ marginBottom: 10 }} />
          </List>
        </Collapse>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <LoginForm handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Header;

/*  <Link href="/chat">
                  <Button align="right" color="inherit">
                    Chat
                  </Button>
                </Link> */
