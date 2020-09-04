import Post from "./post";
import useSWR from "swr";
import { Typography, Divider, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useEffect, useState } from "react";

const testContent = `আমার সঙ্গে যখন ওই ভাষায় অনলাইন চ্যাট হতো, আমি পিডোফেলিয়া শব্দটির সঙ্গে পরিচিত ছিলাম না। এবং ভাবতাম উনি একমাত্র
আমাকেই এসব বলছেন। এত বছর পর আমার যে সমস্ত বন্ধুবান্ধব এই ঘটনার কথা জানত, তারা আমায় মুখ খুলতে বলে। আমি পুলিশে
অভিযোগ জানাব, বা আদালতে লড়ব, সে সব ভাবিইনি। সমাজে ওঁর যথেষ্ট প্রভাব প্রতিপত্তি রয়েছে। আইনি পথে লড়লে ওঁর কীই বা
শাস্তি হবে? কিন্তু সোশ্যাল মিডিয়ায় এত মানুষ যে ওঁর এই দিকগুলো সম্পর্কে জানতে পারছেন, ওঁর এত বছর ধরে একটু একটু
করে গড়ে তোলা ভাবমূর্তি ধ্বসে পড়ছে, এটাই সবচেয়ে বড় শাস্তি।`;

const useStyles = makeStyles((theme) => ({
  divider: {
    height: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: grey[600],
  },
}));

const fetcher = (url) => fetch(url).then((r) => r.json());

const Feed = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const { data, error } = useSWR("http://localhost:5000/api/posts", fetcher, { refreshInterval: 10 });

  return (
    <React.Fragment>
      <Typography variant="h5" color="textSecondary" style={{ marginTop: 20 }}>
        কমিউনিটি
      </Typography>
      {/* {error ? "error" : data.posts.toString()} */}
      <Divider classes={{ root: classes.divider }} />
      {data ? data.posts.map((post) => <Post post={post} key={post._id} />) : ""}
      <Post post={{ content: testContent, author: "testuser" }} />
      <Post post={{ content: testContent, author: "testuser" }} />
      <Post post={{ content: testContent, author: "testuser" }} />
    </React.Fragment>
  );
};
export default Feed;
