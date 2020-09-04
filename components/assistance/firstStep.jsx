import { Button, Typography, TextField, FormControl, Select, MenuItem, Grid } from "@material-ui/core";

const categories = [
  "Sexual Harrassment",
  "Gender Discrimination",
  "Domestic Violence",
  "Ragging/Bullying",
  "Eve Teasing",
  "Social Media Harrassment",
  "Dowry",
  "Snatching/Theft",
];

const FirstStep = ({ category, description, setStep, setFormData }) => {
  const handleDescriptionChange = (event) => {
    setFormData("description", event.target.value);
  };

  const handleCategoryChange = (event) => {
    setFormData("category", event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h5">প্রথম ধাপ</Typography>

      <Grid container alignItems="center" style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid item>
          <Typography variant="body1">আপনার সমস্যাটির ধরন ঠিক করুন:</Typography>
        </Grid>

        <Grid item>
          <FormControl style={{ marginLeft: 10, minWidth: 100 }}>
            <Select value={category} onChange={handleCategoryChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {categories.map((ctg, index) => (
                <MenuItem key={index} value={ctg}>
                  {ctg}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Typography variant="body1">সমস্যাটির সংক্ষেপ বর্ণনা দিন:</Typography>

      <TextField
        defaultValue={description}
        placeholder="কয়েক লাইন লিখুন..."
        fullWidth
        multiline
        variant="outlined"
        margin="dense"
        rows={4}
        onChange={handleDescriptionChange}
      />

      <div style={{ position: "absolute", bottom: 10, right: 10 }}>
        <Button onClick={() => setStep(2)}>Next</Button>
      </div>
    </React.Fragment>
  );
};

export default FirstStep;
