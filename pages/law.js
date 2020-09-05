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

const Law = () => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={2} xs={0}></Grid>

          <Grid item lg={8} xs={12}>
            <div className={classes.container}>
              <Typography variant="h3">আইন</Typography>
              <Divider classes={{ root: classes.divider }} />
              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} .বাংলাদেশে আইনে মানহানি একই সঙ্গে দেওয়ানি এবং ফৌজদারি অপরাধ।
                </Typography>
              </Paper>
              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} দণ্ডবিধির ৪৯৯ ধারা বলা হয়েছে মৃত ব্যক্তিরও খ্যাতি বা সুনাম নষ্ট হয় এমন কোনো বক্তব্য দিলেও
                  মানহানির মামলা হতে পারে।
                </Typography>
              </Paper>
              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} দণ্ডবিধিতে মানহানির ফৌজদারি মামলা করতে হয় ম্যাজিস্ট্রেটের আদালতে।
                </Typography>
              </Paper>
              <Paper className={classes.point}>
                <Typography variant="body1">{bull} আর ক্ষতিপূরণ চেয়ে দেওয়ানি মামলা করতে হয় সিভিল কোর্টে।</Typography>
              </Paper>
              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} দণ্ডবিধিতে মানহানি একটি লঘু এবং আপস-যোগ্য অপরাধ হলেও দেখা যাচ্ছে কাউকে কাউকে মানহানি মামলায়
                  গ্রেপ্তার হয়ে জামিন পর্যন্ত জেল খাটতে হয়েছে।
                </Typography>
              </Paper>

              <Paper className={classes.point}>
                <Typography variant="body1">
                  {bull} জনগণের কল্যাণে কারও প্রতি সত্য দোষারোপ করলে, তাতে মানহানি হবে না।
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

export default Law;
