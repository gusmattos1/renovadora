import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Footer } from './Footer';
import { Header } from './Header';

const useStyles = makeStyles((theme) => ({}));

const QuemSomos = () => {
  const classes = useStyles();

  const Body = ({ classes }) => {
    return (
      <Container>
        <h3 style={{ textAlign: 'center', marginTop: 40, fontSize: 26 }}>
          Quem Somos
        </h3>

        <video
          src="https://res.cloudinary.com/drgj9p6uh/video/upload/v1590954314/video-pronto-alta-qualidade_qd5wx2.mp4"
          controls
          autoplay
          style={{ width: '100%' }}
        />

        <div style={{ fontSize: 24, marginTop: 50 }}>
          <p>
            A<span style={{ fontWeight: 'bold' }}> WM Renovadora</span>, é uma
            oficina mecânica completa com sede própria localizada em Praia
            Grande/SP. Somos especializados no conserto de veículo e automóveis
            de todas as marcas nacionais e importadas, com uma equipe
            diversificada de mecânicos devidamente uniformizados e treinados.
          </p>
          <p>
            Trabalhamos com: Mecânica Geral, Freios, Pneus, Suspensão, Troca de
            Óleo e Filtro, Troca de Correia, Injeção Eletrônica, Troca de
            Embreagem, Limpeza de Radiador, Bico Injetor, Alinhamento /
            Balanceamento.
          </p>
          <p>
            Confira abaixo com mais detalhes os serviços de conserto ou reparo
            de seu automóvel.
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Missão: </span> Oferecer com
            qualidade a prestação de seus serviços, focado na qualidade e no bom
            atendimento que sempre fizeram do Centro Automotivo General uma
            empresa de destaque em Sorocaba e região.
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Valores: </span> Para atingir
            os objetivos principais da empresa, qualidade nos produtos e bom
            atendimento, o Centro Automotivo General preserva um ótimo
            relacionamento com seus clientes, através de muita integridade,
            compromisso, desempenho, respeito ao empregado e trabalho em equipe.
          </p>
        </div>
      </Container>
    );
  };

  return (
    <div className={classes.root}>
      <div style={{ width: '100%', height: '100%' }}>
        <Header />
        <Body classes={classes} />
        <Footer />
      </div>
    </div>
  );
};

export default QuemSomos;
