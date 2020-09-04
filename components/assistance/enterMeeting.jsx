import Link from "next/link";

import { Button, Typography, TextField, FormControl, Select, MenuItem, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const EnterMeeting = () => {
  const classes = useStyles();

  return (
    <Grid container align="center" direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Typography variant="h6">সাক্ষাতকার শুরু করার জন্য কুপন কোডটি প্রবেশ করুন</Typography>
      </Grid>

      <Grid item>
        <TextField
          multiline
          margin="dense"
          variant="outlined"
          //onChange={handleDescriptionChange}
        />
      </Grid>

      <Grid item>
        <Link href="/chat">
          <Button variant="contained" color="primary">
            প্রবেশ
          </Button>
        </Link>
      </Grid>

      <Grid item>
        <Typography variant="body2">কুপন কোড নেই? সাক্ষাতকার ঠিক করুন</Typography>
      </Grid>
    </Grid>
  );
};

export default EnterMeeting;
