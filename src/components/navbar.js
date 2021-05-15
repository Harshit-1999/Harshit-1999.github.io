import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Skill
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Projects
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Experience
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>
          <Button  onClick={() => window[`scrollTo`]({bottom:3,behavior:`smooth`}) }>Hello</Button>
          {/* <Button  color="inherit">Change Theme</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
