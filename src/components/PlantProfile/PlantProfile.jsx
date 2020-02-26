// PLACEHOLDER FOR HEALTH TO REPLACE TIPS, ALSO NEED TO REFACTOR FOR TAGLINE AND MONTHS AT JOB

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Divider } from "@material-ui/core";
import { axiosWithAuth } from "../../utils/axiosAuth";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 45,
    margin: "25px auto",
    width: "80%",
    maxWidth: 550
  },
  divider: {
    width: "100%",
    margin: "0 auto",
    marginBottom: 25
  },

  plantTitle: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 2
  },
  health: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "5px",
    marginBottom: 25
  },
  name: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 30,
    textAlign: "center"
  },
  info: {
    fontSize: 16
  },
  header: {
    fontSize: 25,
    marginBottom: 10
  },
  sectionRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 25
  },
  leftSection: {
    textAlign: "left",
    width: "48%"
  },
  rightSection: {
    textAlign: "right",
    width: "48%"
  }
}));

const PlantProfile = () => {
  const { id } = useSelector(state => state.plantReducer.plant);
  const [plant, setPlant] = useState({
    name: "",
    info: "",
    // month_at_job: 0, /* replace with day last watered*/
    // tagline: "",
    // tip: ""
  });
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/plant/${id}`) /* replace with plant id*/
      .then(res => {
        console.log(res);
        setPlant(res.data);
      })
      .catch(err => console.log("use: ", err));
  }, [id]);

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.name} variant="h5" component="h3">
        {plant.name}
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.health} variant="h5" component="h3">
        <span className={classes.healthTitle}>Health</span> ${plant.health}
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.sectionRow}>
        <div className={classes.leftSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Info
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {plant.info}
          </Typography>
        </div>

        <div className={classes.rightSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Months At Job
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {plant.month_at_job}
          </Typography>
        </div>
      </div>

      <div className={classes.sectionRow}>
        <div className={classes.leftSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Tagline
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {plant.tagline}
          </Typography>
        </div>

        <div className={classes.rightSection}>
          <Typography className={classes.header} variant="h5" component="h3">
            Account ID
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            component="p"
          >
            {plant.id}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PlantProfile;