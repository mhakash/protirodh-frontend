import Layout from "../components/Layout";

import { Grid, Typography, Divider, makeStyles, colors } from "@material-ui/core";

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
}));

const About = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={2} xs={0}></Grid>

          <Grid item lg={8} xs={12}>
            <div className={classes.container}>
              <Typography variant="h3">প্লাটফর্ম সম্পর্কে</Typography>

              <Divider classes={{ root: classes.divider }} />

              <Typography variant="body1">
                দৈনন্দিন জীবনে আমরা নানা ধরনের সোশ্যাল হ্যারাসমেন্ট, বুলিং, যৌন নিপীড়ন এর মক্ত ঘটনার প্রত্যক্ষ হই।
                কিন্তু তারা তাদের অভিজ্ঞতার কথা কোথাও শেয়ার করতে পারেনা যার জন্য দায়ী আমাদের সমাজ ব্যবস্থার অবকাঠামো
                অথবা উন্মোচিত হওয়ার ভয়। আমাদের প্লাটফর্মটি এই সমস্যা সমাধামের জন্য এগিয়ে আসে নতুন ধরনের কিছু পদক্ষেপ
                নিয়ে। আপনি আপনার যেকোনো ধরনের বাজে অভিজ্ঞতার কথা এখানে শেয়ার করতে পারবেন আপনার পরিচয় সম্পূর্ণ গোপন রেখে।
                এছাড়াও আপনি এখানে পাচ্ছেন একটি বিশেষজ্ঞ দল যারা বিভিন্ন সেক্টরে নিজেদের যোগ্যতা প্রমাণ করে এসেছেন।
                মনোবিজ্ঞানী, মনরোগ বিশেষজ্ঞ থেকে শুরু করে আইনজীবী সংস্থার লোকও এখানে উপস্থিত আছেন। তারা আপনার যেকোন
                ধরনের মানসিক, আইনি পরামর্শ সহ অন্যান্য সহযোগিতা দিতে সদা প্রস্তুত। এছাড়াও আপনি তাদের সাথে টেক্সট
                চ্যাটিং, অডিও বা ভিডিও কলেও কাউন্সিলিং করতে পারেন। সর্বোপরি, আপনার যেকোনো ধরনের দরকারে এই প্লাটফর্ম
                আপনাদের সর্বোচ্চ সহযোগিতা দিতে প্রস্তুত। <br />
                <br /> যোগাযোগেঃ <b>protirodh@gmail.com</b>
              </Typography>
            </div>
          </Grid>

          <Grid item lg={2} xs={0}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default About;
