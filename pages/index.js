import Layout from "../components/Layout";
import Feed from "../components/home/feed";
import Placard from "../components/placards/placard";
import PostForm from "../components/home/postForm";
import ExpertPlacard from "../components/placards/expertPlacard";

import { makeStyles, Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles({
  sideNav: {
    width: "25%",
    height: "100%",
    position: "fixed",
    //zIndex: 1,
    //left: 0,
    //backgroundColor: "#eee",
    paddingTop: 70,
    overflowY: "auto",
  },

  feed: {
    paddingTop: 90,
    marginLeft: 2,
    marginRight: 2,
    ["@media (max-width:600px)"]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
});

const Index = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container>
        <Grid item lg={1} xs={0}></Grid>

        <Hidden smDown>
          <Grid item lg={3}>
            <div className={classes.sideNav}>
              <ExpertPlacard />
            </div>
          </Grid>
        </Hidden>

        <Grid item lg={4} xs={12}>
          <div className={classes.feed}>
            <Hidden smUp>
              <ExpertPlacard />
            </Hidden>

            <PostForm />

            <Feed />
          </div>
        </Grid>

        <Hidden smDown>
          <Grid item lg={3}>
            <div className={classes.sideNav}>
              <Placard title="আপনি জানেন কি?" />
              <Placard title="FAQ" />
              <Placard title="আইন জানুন" />
            </div>
          </Grid>
        </Hidden>

        <Grid item lg={1} xs={0}></Grid>
      </Grid>
    </Layout>
  );
};

export default Index;
