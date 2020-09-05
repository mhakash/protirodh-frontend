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
    backgroundColor: colors.grey[100],
  },
  bullet: {
    display: "inline-block",
    margin: "0 6px",
    transform: "scale(3)",
  },
}));

const Know = () => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={2} xs={0}></Grid>

          <Grid item lg={8} xs={12}>
            <div className={classes.container}>
              <Typography variant="h3">আপনি জানেন কি?</Typography>

              <Divider classes={{ root: classes.divider }} />

              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} আপনি যদি মহিলা কর্মচারী হন এবং আপনার কোনো সহকর্মী আপনাকে নিয়ে বাজে মন্তব্য করে তাহলে তা
                  সেক্সুয়াল হ্যারাস্মেন্টের মধ্যে পরে। এটা শাস্তিযোগ্য অপরাধ।
                </Typography>
              </Paper>

              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} হলের বড় ভাইরা ঠাট্টা মশকরার নামে আপনাকে হ্যারাস করেই যাচ্ছে? এটা র‍্যাগিং। আপনার কর্তৃপক্ষের
                  মাধ্যমে এর বিচার করতে পারেন।
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

export default Know;
