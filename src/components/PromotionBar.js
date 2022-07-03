import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    color: "#f1f1f1",
  },
  toolbar: {
    backgroundColor: '#D6281B',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
    fontFamily: 'roboto, sans-serif',
    fontSize: '14px'
  },
  textProm: {
    marginRight: '10px',
    fontSize: '1rem',
  }
}));

export default function PromotionBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} >
        <Toolbar className={classes.toolbar}>
          <Grid container justify="center">
            <Grid item>
              <a
                style={{textDecoration: 'none', color: '#F1F1F1', fontFamily: 'roboto, sans-serif', fontSize: '14px'}}
                href='https://www.coppel.com/outlet-saldos'
              >
                <strong className={classes.textProm}>¡Hasta 50% de descuento en nuestro outlet!</strong>
                <Button
                  variant="contained"
                  className={classes.menuButton}
                >
                  Comprar Aqu&iacute;
                </Button>
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}