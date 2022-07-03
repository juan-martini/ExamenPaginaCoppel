import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  copyRigth: {
    backgroundColor: '#192c39',
    color: '#F1F1F1',
    padding: '30px 100px',
  },
  privacity: {
    backgroundColor: '#1D3A4E',
    color: '#F1F1F1',
    padding: '30px 100px',
  },
  listPrivacity: {
    listStyle: 'none',
  },
  listItemPrivacity: {
    textDecoration: 'none',
    color: '#F1F1F1',
  },
  anchorPrivacity: {
    color: '#fff',
    textDecoration: 'underline',
  }
}));

export default function PromotionBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.privacity}
        justify="center"
      >
        <ul className={classes.listPrivacity}>
          <li className={classes.listItemPrivacity}>
            <a
              className={classes.anchorPrivacity}
              href="https://www.coppel.com/aviso-de-privacidad">
              Aviso de privacidad
            </a>
          </li>
          <li>
            <a
              className={classes.anchorPrivacity}
              href="https://www.coppel.com/terminos-y-condiciones">
              Términos y condiciones
            </a>
          </li>
          <li>
            <a
              className={classes.anchorPrivacity}
              href="https://www.coppel.com/compra-segura">
              Seguridad en Coppel.com
            </a>
          </li>
          <li>
            <a
              className={classes.anchorPrivacity}
              href="https://www.coppel.com/mapa-del-sitio">
              Mapa del sitio
            </a>
          </li>
          <li>
            <a
              className={classes.anchorPrivacity}
              href="http://www.coppel.com.ar/">
              Coppel Argentina
            </a>
          </li>
          <li>
            <a
              className={classes.anchorPrivacity}
              href="https://www.hearcolors.com.mx/SelloAccesibilidad.php?num_clte=FA30D267">
              Declaración de accesibilidad
            </a>
          </li>
        </ul>
      </Grid>
      <Grid
        container
        className={classes.copyRigth}
        // spacing={8}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography variant="body2">
            Todos los precios en Coppel.com son en pesos mexicanos e incluyen impuestos. Los precios y promociones de nuestro sitio web son exclusivos de Coppel.com. Los abonos quincenales, el plazo o el pago inicial pueden variar según el margen de crédito y el historial de pago de cada cliente. Los quincenales contemplan: 24, 36, 48, 60 o 72 quincenas para muebles y 16 quincenas para ropa. Los productos de Marketplace que lleves con tu crédito Coppel, cuentan con un plazo de 24 quincenas y son financiados con Coppel Pay.
            </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography variant="body2">
            2020 © Coppel todos los derechos reservados
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}