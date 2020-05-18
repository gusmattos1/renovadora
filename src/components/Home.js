import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/Logo.png';
import WhatsIcon from '../assets/whatsapp.png';
import TelefoneIcon from '../assets/IconTelephone.svg';
import EmailIcon from '../assets/IconEmail.svg';
import map from '../assets/map.png';
import HorarioIcon from '../assets/IconBusiness.svg';
import LocationIcon from '../assets/IconLocation.svg';
import Funilaria from '../assets/funilaria.png';
import CarImage from '../assets/car1.png';
import Grid from '@material-ui/core/Grid';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
  },
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
  test: {
    fontSize: '3em',
    opacity: 1,
  },
  contatoLista: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Header = ({ classes }) => {
  console.log(classes);

  return (
    <Grid
      container
      spacing={3}
      style={{ backgroundColor: '#F8F8F8', width: '100%', margin: 0 }}
    >
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
          <img src={Logo} alt="logo" style={{ margin: 10 }} />
        </div>
      </Grid>
      <Grid item sm={6}>
        <div className={classes.list}>
          <ul
            style={{
              color: '#FF5B28',
              fontSize: '2em',
              listStyleType: 'square',
            }}
          >
            <li style={{ marginLeft: 0 }}>
              <p className={classes.listText}>MECANICA</p>
            </li>
            <li style={{ marginLeft: 20 }}>
              <p className={classes.listText}>FUNILARIA E PINTURA</p>
            </li>
          </ul>{' '}
          <ul
            style={{
              color: '#FF5B28',
              fontSize: '2em',
              listStyleType: 'square',
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
              style={{
                width: 200,
                // width: 31, height: 31, marginLeft: 10
              }}
            />
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

const Body = () => (
  <div
    style={{
      backgroundImage: `url(${CarImage})`,
      width: '100%',
      height: 325,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div
      style={{ fontSize: '3em', color: 'white', marginLeft: '5%', width: 550 }}
    >
      Serviço rápido, profissional e de confiança
    </div>
  </div>
);

const MyCarousel = ({ classes }) => {
  return (
    <Container>
      <h3 style={{ textAlign: 'center', marginTop: 40, fontSize: 26 }}>
        Nossos Serviços
      </h3>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
      >
        <div>
          <img src={Funilaria} alt="foto1" />
          <p className={`${classes.test} legend`}>Legend 1</p>
        </div>
        <div>
          <img src={Funilaria} alt="foto1" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Funilaria} alt="foto1" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div
        style={{
          background: '#308654',
          fontSize: '20px',
          color: 'white',
          padding: 15,
          textAlign: 'center',
          marginBottom: 50,
        }}
      >
        Trabalhamos com o objetivo de fornecer um serviço de qualidade,
        utilizando equipamentos modernos e material de excelente qualidade.
        Entre em contato e marque um orçamento sem compromisso!
      </div>
    </Container>
  );
};

const Contato = ({ classes }) => {
  return (
    <Container>
      <Grid container>
        <Grid item md={6} sm={12} style={{ width: '100%' }}>
          <h2 style={{ textAlign: 'center' }}>Contato</h2>
          <div
            style={{
              width: 350,
              margin: 'auto',
            }}
          >
            <div className={classes.contatoLista}>
              <img style={{ marginRight: 25 }} src={TelefoneIcon} alt="icon" />
              (13) 3473-3683
            </div>
            <div className={classes.contatoLista}>
              <img style={{ marginRight: 25 }} src={EmailIcon} alt="icon" />
              <p>wmrenovadoradeveiculos@bol.com.br</p>
            </div>
            <div className={classes.contatoLista}>
              <img style={{ marginRight: 25 }} src={HorarioIcon} alt="icon" />
              <p>Seg-Sex: 9:00-18:00</p>
              <p>Sab: 10:00-14:00</p>
            </div>
            <div className={classes.contatoLista}>
              <img style={{ marginRight: 25 }} src={LocationIcon} alt="icon" />
              <p>
                Av. Ministro Marcos Freire, 4238 - Vila Antartica, <br /> Praia
                Grande - SP, 11717-260
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Av.%20Min.%20Marcos%20Freire,%204238%20-%20Vila%20Antartica,%20Praia%20Grande%20-%20SP,%2011717-260,%20Brazil">
            <img src={map} alt="map" style={{ width: '100%' }} />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ width: '100%', height: '100%' }}>
        <Header classes={classes} />
        <Body classes={classes} />
        <MyCarousel classes={classes} />
        <Contato classes={classes} />
      </div>
    </div>
  );
};

export default Home;
