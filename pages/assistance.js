import PropTypes from "prop-types";

import Layout from "../components/Layout";
import AppointmentForm from "../components/assistance/appointmentForm";
import EnterMeeting from "../components/assistance/enterMeeting";

import { Grid, Typography, Divider, makeStyles, Paper, Tabs, Tab, Box, colors, Hidden } from "@material-ui/core";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      align="left"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box style={{ padding: 20 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    height: "100%",
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: colors.grey[200],
  },
  formContainer: {
    height: 300,
    ["@media (max-width:600px)"]: {
      height: "auto",
    },
    position: "relative",
    marginTop: 20,
    padding: 10,
  },
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

const Assistance = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={2} xs={0}></Grid>

          <Grid item lg={8} xs={12}>
            <div className={classes.container}>
              <Typography variant="h3">ব্যক্তিগত সহায়তা</Typography>

              <Divider classes={{ root: classes.divider }} />

              <Typography variant="body1">
                আপনার সমস্যাটির এক্সপার্ট মতামতের জন্য অভিজ্ঞ ব্যাক্তির সাথে কথা বলুন। আপনি চাইলে পরিচয় গোপন রেখেই
                পরামর্শ নিতে পারেন। যেভাবে স্বাচ্ছন্দ্য বোধ করবেন সেভাবে যোগাযোগের মাধ্যম আপনিই ঠিক করুন, -চ্যাট, -ভয়েস
                কল, -ভিডিও কনফারেন্স
              </Typography>

              <Paper className={classes.formContainer}>
                <Grid container style={{ height: "100%" }}>
                  <Hidden smDown>
                    <Grid item lg={3}>
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        className={classes.tabs}
                      >
                        <Tab label="সাক্ষাতকার ঠিক করুন" {...a11yProps(0)} />
                        <Tab label="যোগাযোগ শুরু করুন" {...a11yProps(1)} />
                      </Tabs>
                    </Grid>
                  </Hidden>

                  <Grid item lg={9} xs={12}>
                    <Hidden smUp>
                      <Tabs
                        variant="centered"
                        value={value}
                        onChange={handleChange}
                        style={{ backgroundColor: colors.grey[200] }}
                      >
                        <Tab label="সাক্ষাতকার ঠিক করুন" {...a11yProps(0)} />
                        <Tab label="যোগাযোগ শুরু করুন" {...a11yProps(1)} />
                      </Tabs>
                    </Hidden>

                    <TabPanel value={value} index={0}>
                      <AppointmentForm />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <EnterMeeting />
                    </TabPanel>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>

          <Grid item lg={2} xs={0}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Assistance;
