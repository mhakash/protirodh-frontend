import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 20,
    ["@media (max-width:600px)"]: {
      margin: 0,
      marginBottom: 10,
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 6px",
    transform: "scale(3)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ExpertPlacard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader title="অভিজ্ঞ ব্যাক্তির সাথে কথা বলুন" />

      <CardContent>
        <Typography variant="body2" component="p">
          আপনার সমস্যাটির এক্সপার্ট মতামতের জন্য অভিজ্ঞ ব্যাক্তির সাথে কথা বলুন। আপনি চাইলে পরিচয় গোপন রেখেই পরামর্শ
          নিতে পারেন।
          <br />
          <br />
          যেভাবে স্বাচ্ছন্দ্য বোধ করবেন সেভাবে যোগাযোগের মাধ্যম আপনিই ঠিক করুন,
          <br />
          -চ্যাট
          <br />
          -ভয়েস কল
          <br />
          -ভিডিও কনফারেন্স
        </Typography>
      </CardContent>

      <CardActions>
        <Link href="/assistance">
          <Button size="small">আরও জানুন</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ExpertPlacard;
