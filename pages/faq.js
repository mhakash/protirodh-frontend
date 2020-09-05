import Layout from "../components/Layout";

import { Grid, Typography, Divider, makeStyles, colors, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    padding: 30,
    backgroundColor: "white",
  },
  divider: {
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "black",
  },
  point: {
    padding: 15,
    marginTop: 15,
    //marginBottom: 15,
    backgroundColor: colors.grey[100],
  },
  bullet: {
    display: "inline-block",
    margin: "0 6px",
    transform: "scale(3)",
  },
}));

const Faq = () => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={2} xs={0}></Grid>

          <Grid item lg={8} xs={12}>
            <div className={classes.container}>
              <Typography variant="h3">Frequently Asked Questions</Typography>

              <Divider classes={{ root: classes.divider }} />

              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} প্রশ্নঃ আমি আমার স্বামীর কাছে শারীরিক নির্যাতনের শিকার হচ্ছি। কি করতে পারি?
                  <br />
                  <br />
                  উত্তরঃ ভয় পেয়ে অথবা অন্য কোন কারণে মেনে নেবেন না। শক্ত থাকুন। আইনের সাহায্য নিন।
                </Typography>
              </Paper>
            </div>
          </Grid>

          <Grid item lg={2} xs={0}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Faq;
