import React from 'react';
import  MUICheckbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';


const useStyles = makeStyles((theme) => ({
    icon: {
      width: "15px",
      height: "15px",
    },
    control: {
      padding: theme.spacing(1.25)
    }
  }));

const Checkbox = ({checked, disabled, label, onChange}) => {
    const classes = useStyles();
    return(
        <FormControlLabel
            control={<MUICheckbox 
                className={classes.control}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                name={label}
                // icon={<CheckBoxOutlineBlankIcon color="primary" className={classes.icon}/>}
                // checkedIcon={<CheckBoxOutlinedIcon color="primary" className={classes.icon}/>}
            />}
            data-testid={"checkbox"}
            label={<Typography variant="body1"  color="textPrimary" >{label}</Typography>}
          />
        
    );
}

export default Checkbox;
