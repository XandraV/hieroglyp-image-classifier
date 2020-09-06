import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PageWrapper from "./PageWrapper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import hieroglyphfrontpage from "./assets/hieroglyphfrontpage.jpg";
import mayan from "./assets/mayan.png";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3, 0, 0),
  },
  cardGrid: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  cardsContainer: {
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgb(224, 187, 110)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  buttonwrapper: {
    backgroundColor: purple[300],
    color: "#fff",
  },
}));

export default function Page1() {
  const classes = useStyles();
  return (
    <PageWrapper pageName="page1">
      <div className={classes.content}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Glyph Identifier
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid
          className={classes.cardsContainer}
          container
          justify="center"
          spacing={4}
        >
          <Grid item key={1} xs={4}>
            <Card className={classes.card}>
              <img src={"https://hieroglyphidentifier.s3.eu-west-2.amazonaws.com/hieroglyphfrontpage.jpg"} width={260} height={200} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Egyptian Hieroglyphs
                </Typography>
                <Typography>
                  Egyptian hieroglyphs with a total of some 1,000 distinct
                  characters were the formal writing system used in Ancient
                  Egypt.
                </Typography>
              </CardContent>
              <CardActions className={classes.buttonwrapper}>
                <Button
                  component={Link}
                  to="/hieroglyph"
                  size="small"
                  color="inherit"
                >
                  Go to identifier
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item key={2} xs={4}>
            <Card className={classes.card}>
              <img src={"https://hieroglyphidentifier.s3.eu-west-2.amazonaws.com/mayan.png"} width={260} height={200} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mayan Glyphs
                </Typography>
                <Typography>
                  Maya script, also known as Maya glyphs, was the writing system
                  of the Maya civilization of Mesoamerica.
                </Typography>
              </CardContent>
              <CardActions className={classes.buttonwrapper}>
                <Button
                  component={Link}
                  to="/mayan-glyph"
                  size="small"
                  color="inherit"
                >
                  Go to identifier
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
}
