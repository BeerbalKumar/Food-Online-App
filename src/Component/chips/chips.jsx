import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  
  chip: {
    margin: theme.spacing(1),
    backgroundColor:"#c270e5"
  
  },
}));

export default function Chips() {
  const classes = useStyles();


  return (
     

      <Chip
      
        label="Pizzavg"
        
        className={classes.chip}
        color="secondary"
      />

  );
}
