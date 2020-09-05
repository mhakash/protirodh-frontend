import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { useEffect } from "react";

import Router from "next/router";

const useStyles = makeStyles({
  root: {
    margin: 20,
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

const Placard = ({ title }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [highlight, setHighlight] = React.useState();

  useEffect(() => {
    if (title === "আপনি জানেন কি?") {
      setHighlight("হলের বড় ভাইরা ঠাট্টা মশকরার নামে আপনাকে হ্যারাস....");
    } else if (title === "FAQ") {
      setHighlight("প্রশ্নঃ আমি আমার স্বামীর কাছে শারীরিক নির্যাতনের....");
    } else {
      setHighlight("বাংলাদেশে আইনে মানহানি একই সঙ্গে দেওয়ানি....");
    }
  });

  const handleClick = () => {
    if (title === "আপনি জানেন কি?") {
      Router.push("/know");
    } else if (title === "FAQ") {
      Router.push("/faq");
    } else {
      Router.push("/law");
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={title} />

      <Divider />

      <CardContent>
        <Typography variant="body2" component="p">
          {bull} {highlight}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleClick}>
          আরও জানুন
        </Button>
      </CardActions>
    </Card>
  );
};

export default Placard;
