import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(90),
      height: theme.spacing(100),
    },
  },
}));

export const Form = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <form {...props} noValidate>
        {children}
      </form>
    </Paper>
  );
};
