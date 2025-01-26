import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/kayque (2).png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Sou desenvolvedor full stack com experiência em criar soluções
completas, desde o design de interfaces intuitivas até a implementação
de funcionalidades no back-end. Tenho atenção aos detalhes, facilidade
para resolver problemas e gosto de colaborar em equipe para
transformar ideias em projetos funcionais e de impact
              <br />
              <br />Eu dominmo linguagens como
              <i>
                <b className="purple">Javascript, Typescript & Node.js  </b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse são a construção de novas   &nbsp;
              <i>
                <b className="purple">tecnologias e produtos Web  </b> e
               assuntos relacionados a{" "}
                <b className="purple">
                  Cybersegurança.
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Sinta-se á vontade para se  <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kayqueprogram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kayque-de-jesus-4008312b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kayque.prof"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
