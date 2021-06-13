import { Container, Typography, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { Form } from '../src/forms/form';

const useStyles = makeStyles({
  root: {
    paddingTop: 8
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 25
  },

  mainText: {
    fontSize: 48,
    marginTop: 200,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center"
  },

  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6C6B6B",
    textAlign: "center",
  },
  section1: {
    color: "#FFF",
    backgroundColor: "#4dbd90",
    minHeight: "500px",
    padding: "50px",
    paddingTop: "73px",
    paddingBottom: "200px",
  },
  section2: {
    flexGrow: 1,
    flexDirection: "row",
    minHeight: "500px",
    padding: "50px",
    paddingTop: "70px",
    paddingBottom: "200px",
  },

  heading2: {
    font: "Roboto",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  heading5: {
    font: "Roboto",
    fontWeight: "bold",
    flexGrow: 1,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: "50px",
  },
  featureheading: {
    font: "Roboto",
    fontWeight: "bold",
  },

  body1: {
    font: "Roboto",
    fontWeight: "lighter",
    marginBottom: "25px",
    fontSize: "20px",
  },

  button: {
    backgroundColor: "#000",
    color: "#FFF",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingRight: "25px",
    paddingLeft: "25px",
  },
  feature: {
    flex: 1,
    margin: 16,
  },
  features: {
    display: "flex",
    flexDirection: "row",

  },
  footer: {
    minHeight: "50px",
    padding: "20px",
    backgroundColor: "#1c1d1f",
    color: "#939596",
  },
});

export default function Index() {
  const router = useRouter()
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.logo}>FINSTATE</Typography>
      <Box className={classes.section1}>
        <Typography variant="h2" className={classes.heading2}>How profitable is your investment?</Typography>
        <Typography variant="body1" className={classes.body1}>Easily calculate the costs of your project with just a few clicks. <br />
Evaluate the costs and profit margins of your investment property.</Typography>
        <Button variant="contained" className={classes.button}>Get Started</Button>
      </Box>
      <Box className={classes.section2}>
        <Container maxWidth="md">
          <Typography variant="h5" className={classes.heading5}>Everything you need to calculate cash flow!</Typography>
          <Form />
        </Container>
      </Box>
      <Box className={classes.footer}>
        <Typography variant="body1">Copyright 2021 FINSTATE.</Typography>
      </Box>
    </div>
  )
}
