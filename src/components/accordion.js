import React, { useState } from "react";
import "./accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const AccordionComponent = () => {
  const classes = useStyles();

  return (
    <div className="accordion-container">
      <div className="accordion-sub-container">
        <div className={classes.root}>
          <h2 style={{ fontWeight: "normal", color: "#333" }}>
            People also ask
          </h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What are your hobbies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              a programmer must often experience stress, almost no hobbies, when I have free time I like to open humor sites to laugh out loud, play games, go out to get a new atmosphere.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Are you open for work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes. I am always open to work on innovate projects with 
                creative projects. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                What's the fastest way to reach you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               Definitely email. Contact me at faizollama11@gmail.com.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={classes.heading}>
                What motivates you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              I always remember why I started this, join the community, invest in preparing for the future, hone skills, especially my parents and neighbors and friends who look disparaging.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
