import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import HorarioIcon from '../assets/IconBusiness.svg';
import EmailIcon from '../assets/IconEmail.svg';
import LocationIcon from '../assets/IconLocation.svg';
import TelefoneIcon from '../assets/IconTelephone.svg';
import map from '../assets/map.png';
import Funilaria from '../fotos/funilaria.png';
import Mecanica from '../fotos/mecanica.png';
import Sinistro from '../fotos/sinistro.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    maxWidth: '1600px',
    margin: 'auto',
  },
  contatoLista: {
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#308654',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  legendTest: {
    fontSize: '56px !important',
    opacity: '1 !important',
    background: 'none !important',
    fontWeight: 'bold !important',
    bottom: '40% !important',
    textShadow: '5px 5px 5px #0F0E0E',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px !important',
      bottom: '30% !important',
    },
  },
}));

const Home = () => {
  const MyCarousel = ({ classes }) => {
    const [position, setPosition] = useState(0);

    const updateCurrentSlide = (item) => {
      console.log(item);
      setPosition(item);
    };

    return (
      <Container>
        <h3
          style={{
            textAlign: 'center',
            marginTop: 0,
            paddingTop: 40,
            fontSize: 26,
          }}
        >
          Nossos Serviços
        </h3>
        <Carousel
          autoPlay
          showThumbs={false}
          showStatus={false}
          infiniteLoop={false}
          onChange={updateCurrentSlide}
          selectedItem={position}
        >
          <div>
            <img src={Funilaria} alt="foto1" />
            <p className={`legend ${classes.legendTest}`}>
              FUNILARIA E PINTURA
            </p>
          </div>
          <div>
            <img src={Mecanica} alt="foto1" />
            <p className={`legend ${classes.legendTest}`}>
              MECANICA E ELETRICA
            </p>
          </div>
          <div>
            <img src={Sinistro} alt="foto1" />
            <p className={`legend ${classes.legendTest}`}>SINISTROS</p>
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
          {position === 0
            ? 'Nosso objetivo é fornecer um excelente serviço, utilizando equipamentos modernos e material de excelente qualidade. Entre em contato e marque um orçamento sem compromisso!'
            : position === 1
            ? 'Na WM Renovadora, a nossa dedicação e o nosso diferencial. Nossa equipe de mecânicos está sempre preparada para que você volte a andar com seu carro da forma mais rápida e segura possível.'
            : 'Atendemos clientes das seguradoras: Mapfre, Alianz, Zurich, HDI e SulAmerica.'}
        </div>
      </Container>
    );
  };

  const Contato = ({ classes }) => {
    return (
      <Container>
        <Grid container style={{ background: 'rgba(112, 112, 112, 0.5)' }}>
          <Grid item md={6} sm={12} style={{ width: '100%' }}>
            <h2 style={{ textAlign: 'center', fontFamily: 'IBM Plex Sans' }}>
              Contato
            </h2>
            <div
              style={{
                width: 350,
                margin: 'auto',
                display: 'flex',
                height: 300,
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <div className={classes.contatoLista}>
                <a
                  href="tel:1334733683"
                  style={{ color: 'black', display: 'flex' }}
                >
                  <img
                    style={{ marginRight: 25 }}
                    src={TelefoneIcon}
                    alt="icon"
                  />
                  <p>(13) 3473-3683</p>
                </a>
              </div>
              <div className={classes.contatoLista}>
                <a
                  href="mailto: wmrenovadoradeveiculos@bol.com.br"
                  style={{ color: 'black', display: 'flex' }}
                >
                  <img style={{ marginRight: 25 }} src={EmailIcon} alt="icon" />
                  <p>wmrenovadoradeveiculos@bol.com.br</p>
                </a>
              </div>
              <div className={classes.contatoLista}>
                <img style={{ marginRight: 25 }} src={HorarioIcon} alt="icon" />
                <p>
                  Seg-Sex: 08:00 - 18:00 <br />
                  Sab: 09:00 - 12:00
                </p>
              </div>
              <div className={classes.contatoLista}>
                <img
                  style={{ marginRight: 25 }}
                  src={LocationIcon}
                  alt="icon"
                />
                <p>
                  Av. Ministro Marcos Freire, 4238 - Vila Antartica, <br />{' '}
                  Praia Grande - SP, 11717-260
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

  const Form = ({ classes }) => {
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          'gmail',
          'template_soQ41gPU',
          e.target,
          process.env.REACT_APP_EMAIL_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
      <div className={classes.paper}>
        <Container style={{ maxWidth: 450 }}>
          <h2 style={{ textAlign: 'center' }}>Fale Conosco</h2>
          <form
            className={classes.form}
            onSubmit={sendEmail}
            data-netlify="true"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="nome"
                  variant="outlined"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="telefone"
                  label="Telefone"
                  name="telefone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="assunto"
                  label="Assunto"
                  id="assunto"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  variant="outlined"
                  required
                  fullWidth
                  name="assunto"
                  label="Digite aqui sua menssagem..."
                  id="menssagem"
                />
              </Grid>
            </Grid>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Enviar
              </Button>
            </div>
          </form>
        </Container>
      </div>
    );
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ width: '100%', height: '100%' }}>
        <MyCarousel classes={classes} />
        <Contato classes={classes} />
        <Form classes={classes} />
      </div>
    </div>
  );
};

export default Home;
