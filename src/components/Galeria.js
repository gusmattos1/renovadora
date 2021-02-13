import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef } from 'react';
import Gallery from 'react-photo-gallery';
import foto1 from '../fotos/reduzidas/foto-1.jpeg';
import foto2 from '../fotos/reduzidas/foto-2.jpeg';
import foto3 from '../fotos/reduzidas/foto-3.jpeg';
import foto4 from '../fotos/reduzidas/foto-4.jpeg';
import foto5 from '../fotos/reduzidas/foto-5.jpeg';
import foto6 from '../fotos/reduzidas/foto-6.jpeg';
import foto7 from '../fotos/reduzidas/foto-7.jpeg';
import foto8 from '../fotos/reduzidas/foto-8.jpeg';
import foto9 from '../fotos/reduzidas/foto-9.jpeg';
import foto10 from '../fotos/reduzidas/foto-10.jpeg';
import foto11 from '../fotos/reduzidas/foto-11.jpeg';
import foto12 from '../fotos/reduzidas/foto-12.jpeg';
import foto13 from '../fotos/reduzidas/foto-13.jpeg';
import './styles.css';

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
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    margin: 'auto',
  },
}));

const Galeria = () => {
  const myRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if (myRef.current && myRef.current.offsetTop) {
      setTimeout(() => {
        window.scrollTo(0, myRef.current.offsetTop - 40);
      }, 400);
    }
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
        <div style={{ minHeight: 800 }} className="galery-div">
          <Gallery photos={fotos} direction={'column'} />
        </div>
      </Container>
    </div>
  );
};

export default Galeria;
