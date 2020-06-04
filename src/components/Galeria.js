import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef } from 'react';
import Gallery from 'react-photo-gallery';
import foto1 from '../fotos/reduzidas/foto-1.jpg';
import foto2 from '../fotos/reduzidas/foto-2.jpg';
import foto3 from '../fotos/reduzidas/foto-3.jpg';
import foto4 from '../fotos/reduzidas/foto-4.jpg';
import foto5 from '../fotos/reduzidas/foto-5.jpg';
import foto6 from '../fotos/reduzidas/foto-6.jpg';
import foto7 from '../fotos/reduzidas/foto-7.jpg';
import foto8 from '../fotos/reduzidas/foto-8.jpg';
import foto9 from '../fotos/reduzidas/foto-9.jpg';
import foto10 from '../fotos/reduzidas/foto-10.jpg';
import foto11 from '../fotos/reduzidas/foto-11.jpg';
import foto12 from '../fotos/reduzidas/foto-12.jpg';
import foto13 from '../fotos/reduzidas/foto-13.jpg';
import foto14 from '../fotos/reduzidas/foto-14.jpg';
import foto15 from '../fotos/reduzidas/foto-15.jpg';
import foto16 from '../fotos/reduzidas/foto-16.jpg';
import foto17 from '../fotos/reduzidas/foto-17.jpg';
import foto18 from '../fotos/reduzidas/foto-18.jpg';
import foto19 from '../fotos/reduzidas/foto-19.jpg';
import foto20 from '../fotos/reduzidas/foto-20.jpg';

const fotos = [
  { src: foto1, width: 1, height: 1 },
  { src: foto2, width: 1, height: 1 },
  { src: foto3, width: 1, height: 1 },
  { src: foto4, width: 1, height: 1 },
  { src: foto5, width: 1, height: 1 },
  { src: foto6, width: 1, height: 1 },
  { src: foto7, width: 1, height: 1 },
  { src: foto8, width: 1, height: 1 },
  { src: foto9, width: 1, height: 1 },
  { src: foto10, width: 1, height: 1 },
  { src: foto11, width: 1, height: 1 },
  { src: foto12, width: 1, height: 1 },
  { src: foto13, width: 1, height: 1 },
  { src: foto14, width: 1, height: 1 },
  { src: foto15, width: 1, height: 1 },
  { src: foto16, width: 1, height: 1 },
  { src: foto17, width: 1, height: 1 },
  { src: foto18, width: 1, height: 1 },
  { src: foto19, width: 1, height: 1 },
  { src: foto20, width: 1, height: 1 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    maxWidth: '1600px',
    margin: 'auto',
  },
}));

const Galeria = () => {
  const myRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, myRef.current.offsetTop - 40);
    }, 800);
  }, []);

  return (
    <div className={classes.root}>
      <Container ref={myRef}>
        <h3
          style={{
            textAlign: 'center',
            marginTop: 0,
            paddingTop: 40,
            fontSize: 26,
          }}
        >
          Galeria
        </h3>
        <Gallery photos={fotos} />
      </Container>
    </div>
  );
};

export default Galeria;
