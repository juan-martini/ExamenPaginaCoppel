// import logo from './logo.svg';
import './App.css';
import Header from './conteiners/Header';
import Body from './conteiners/Body';
import Footer from './conteiners/Footer';
import {
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    fontWeight: 'bold',
    fontFamily: 'roboto, sans-serif',
    fontSize: '15px',
    padding: '13px 22px',
    color: '#64550E',
    borderRadius: '50px',
    letterSpacing: '2px',
    backgroundColor: '#ffd300',
    '&:hover': {
      backgroundColor: '#ffd300',
    },
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '99',
    textDecoration: 'none',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Body />
      <Button
        variant="contained"
        className={classes.button}
      >
        <i className="far fa-comment"></i>
        Ayuda
      </Button>
      <Footer />
    </div>
  );
}

export default App;
