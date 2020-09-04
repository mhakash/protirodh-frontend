import { Button, Typography, FormControl, Grid, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

const SecondStep = ({ time, type, setStep, setFormData }) => {
  const handleMeetingTypeChange = (event) => {
    setFormData("meetingType", event.target.value);
  };

  const handleMeetingTimeChange = (event) => {
    setFormData("meetingTime", event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h5">দ্বিতীয় ধাপ</Typography>

      <div style={{ marginTop: 10 }}>
        <Typography variant="body1">সাক্ষাতের ধরন ঠিক করুন:</Typography>

        <FormControl>
          <RadioGroup value={type} onChange={handleMeetingTypeChange}>
            <Grid container>
              <Grid item>
                <FormControlLabel value="text" control={<Radio />} label="চ্যাট" />
              </Grid>
              <Grid item>
                <FormControlLabel value="voice" control={<Radio />} label="ভয়েস কল" />
              </Grid>
              <Grid item>
                <FormControlLabel value="video" control={<Radio />} label="ভিডিও কনফারেন্স" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        <Typography variant="body1">আপনার জন্য উপযুক্ত সাক্ষাতের সময় ঠিক করুন:</Typography>

        <FormControl>
          <RadioGroup value={time} onChange={handleMeetingTimeChange}>
            <Grid container>
              <Grid item>
                <FormControlLabel value="morning" control={<Radio />} label="সকাল (১০টা-১২টা)" />
              </Grid>
              <Grid item>
                <FormControlLabel value="afterNoon" control={<Radio />} label="বিকাল (২টা-৪টা)" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </div>

      <div style={{ position: "absolute", bottom: 10, right: 10 }}>
        <Button onClick={() => setStep(1)}>Back</Button>
        <Button onClick={() => setStep(3)}>Submit</Button>
      </div>
    </React.Fragment>
  );
};

export default SecondStep;
