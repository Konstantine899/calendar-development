// Header.js
import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Lobster',
    margin: theme.spacing(3, 0, 2),
    textAlign: 'center',
    fontSize: '40px',
    color: 'MediumSlateBlue',
    textShadow: '1px 1px black',
  },
}));
export const HeaderCalendarDescription = () => {
  const styles = useStyles();

  return (
    <>
      <Typography className={styles.root} component="h1" variant="h5">
        Для внесения показаний выберите дату
      </Typography>
      <p></p>
    </>
  );
};
