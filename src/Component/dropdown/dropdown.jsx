import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:"100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
    // setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

  function handleChange(event) {
    console.log(event.target.value)
  props.onclick(event.target.value)
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Gender</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
         
        </Select>
      </FormControl>
     
    </form>
  );
}
