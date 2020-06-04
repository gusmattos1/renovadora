import Grid from '@material-ui/core/Grid';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import WhatsIcon from '../assets/whatsapp.png';
import fachada from '../fotos/fachada.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  listText: {
    color: 'black',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6em',
    },
  },
  link: {
    margin: '10px 20px',
    textDecoration: 'none',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textShadow: '5px 5px 5px #00000033',
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      style={{ backgroundColor: '#F8F8F8', width: '100%', maxWidth:1600, margin:'auto' }}
    >
      <Grid item xs={5} sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={Logo}
          alt="logo"
          style={{ maxWidth: 300, height: 'auto' }}
        />
      </Grid>
      <Grid item sm={6}>
        <div className={classes.list}>
          <ul
            style={{
              color: '#FF5B28',
              padding: 0,
              fontSize: '24px',
              listStyleType: 'square',
              lineHeight: '40px',
            }}
          >
            <li style={{ marginLeft: 0 }}>
              <p className={classes.listText}>MECANICA</p>
            </li>
            <li style={{ marginLeft: 20 }}>
              <p className={classes.listText}>FUNILARIA E PINTURA</p>
            </li>
          </ul>
          <ul
            style={{
              color: '#FF5B28',
              fontSize: '24px',
              padding: 0,
              listStyleType: 'square',
              lineHeight: '40px',
            }}
          >
            <li style={{ marginLeft: 40 }}>
              <p className={classes.listText}>REPAROS RAPIDOS</p>
            </li>
            <li style={{ marginLeft: 60 }}>
              <p className={classes.listText}>SINISTROS</p>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={5} sm={3}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <a
            href="https://whats.link/wmrenovadora"
            alt="whatslink"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              flexDirection: 'column',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img
              src={WhatsIcon}
              alt="whatsapp icon"
              style={{ maxWidth: 300, height: 'auto' }}
            />
          </a>
        </div>
      </Grid>

      <img
        src={fachada}
        style={{ maxWidth: '100%', height: 'auto' }}
        alt="fachada"
      />
      {/* MENU */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          background: '#308654',
        }}
      >
        <Link className={classes.link} to="/">
          Home
        </Link>
        <Link className={classes.link} to="/quem_somos">
          Quem Somos
        </Link>
        <Link className={classes.link} to="/galeria">
          Galeria
        </Link>
      </div>
    </Grid>
  );
};
