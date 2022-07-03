import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  IconButton,
  Hidden,
} from '@material-ui/core';
import {
  Search,
  ShoppingCartOutlined,
  Menu,
  Phone,
} from '@material-ui/icons';
import LogoCoppel from '../images/Coppel_80_Web.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar:{
    padding: 0,
  },
  buttonSearch: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    color: "#F1F1F1",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: '5px 5px',
    minWidth: '33px',
  },
  searchText: {
    height: '25px',
    fontSize: 'small',
    paddingLeft: '8px',
    minWidth:'45%',
  },
  searchTextSelect: {
    height: '31px',
    fontSize: '16px',
    paddingLeft: '8px', 
  },
  shopCar:{
    color: theme.palette.secondary.main,
    '&:hover':{
      backgroundColor: 'transparent',
    },
  },
  divShop: {
    width: '50px',
    height: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  shopCarWeb:{
    color: '#F1F1F1',
    backgroundColor: theme.palette.secondary.main,
    '&:hover':{
      backgroundColor: theme.palette.secondary.dark,
    },
    borderRadius: 0,
  },
  menu:{
    color: theme.palette.secondary.main,
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Hidden
            mdUp
          >
            <Grid container>
              <Grid
                item
                xs={6}
                sm={6}
              >
                <Grid container justify="flex-start" alignItems="center" style={{height: '100%'}}>
                  <IconButton className={classes.menu}>
                    <Menu fontSize='large' />
                  </IconButton>
                  <img src={LogoCoppel} alt="logoCoppel" />
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
              >
                <Grid container justify="flex-end" alignItems="center">
                  <input
                    type="text"
                    placeholder="Busca tus productos"
                    className={classes.searchText}
                  >
                  </input>
                  <Button
                    variant="contained"
                    className={classes.buttonSearch}
                  >
                    <Search fontSize="small" />
                  </Button>
                  <IconButton className={classes.shopCar}>
                    <ShoppingCartOutlined fontSize='large' />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden
            smDown
          >
            <Grid container>
              <Grid
                item
                md={2}
                lg={2}
                xl={2}
              >
                <Grid container justify="flex-start" alignItems="center" style={{height: '100%'}}>
                  <img src={LogoCoppel} alt="logoCoppel" />
                </Grid>
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                xl={4}
              >
                <Grid container justify="flex-start" alignItems="center" style={{height: '100%'}}>
                  <select
                    type="text"
                    placeholder="Busca tus productos"
                    className={classes.searchTextSelect}
                  >
                    <option value={1}>Todos</option>
                    <option value={2}>Celulares</option>
                    <option value={3}>Electronica</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Busca tus productos"
                    className={classes.searchText}
                  >
                  </input>
                  <Button
                    variant="contained"
                    className={classes.buttonSearch}
                  >
                    <Search fontSize="small" />
                  </Button>
                </Grid>
              </Grid>
              <Grid
                  item
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Grid container justify="flex-end" alignItems="center">
                    <Grid
                      item
                      md={3}
                      lg={3}
                      xl={3}
                    >
                      <a href="tel:8002207735" style={{textDecoration: 'none', color: 'black'}}>
                        <Grid container justify="flex-end">
                          <div style={{width: '30px'}}>
                            <Phone></Phone>
                          </div>
                          <div style={{width: '110px'}}>
                            <span><strong>Compra ahora</strong></span>
                          </div>
                          <div style={{width: '100px'}}>
                            <span style={{textDecoration: 'underline'}}>
                              800 220 7735
                            </span>
                          </div>
                        </Grid>
                      </a>
                    </Grid>
                    <Grid
                      item
                      md={3}
                      lg={3}
                      xl={3}
                    >
                      {/* <Button> */}
                        <div>Hola</div>
                        <div>
                          <span><strong>Iniciar sesion</strong></span>
                        </div>
                      {/* </Button> */}
                    </Grid>
                    <Grid
                      item
                      md={1}
                      lg={1}
                      xl={1}
                    >
                      <Grid container justify="flex-end" alignItems="center">
                        <IconButton className={classes.shopCarWeb}>
                          <ShoppingCartOutlined fontSize='large' />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Grid
                  item
                  md={1}
                  lg={1}
                  xl={1}
                >
                  <Grid container justify="flex-end" alignItems="center">
                    <IconButton className={classes.shopCarWeb}>
                      <ShoppingCartOutlined fontSize='large' />
                    </IconButton>
                  </Grid>
                </Grid> */}
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}