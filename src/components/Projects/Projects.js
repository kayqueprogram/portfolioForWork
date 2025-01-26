import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/img2.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/img1.png";
import chatify from "../../Assets/Projects/img1.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/img2.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos  <strong className="purple">recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Game Visual Novel"
              description="Game Visual Novel, utilizando a Engine Ren'py, disponibilizando o game para diversas plataformas, incluindo Linux, Windows e Android"
              ghLink="https://github.com/kayqueprogram/Entre-Mundos-Project---Game"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Site Entre mundos"
              description="uma landing page desenvolvida para o game Visual Novel, utilizando NEXT 13 e Tailwind CSS"
              ghLink="https://github.com/kayqueprogram/Entre-Mundos-Project---Site"
              demoLink="https://www.entremundosvn.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Site Institucional E. E. Omar Donato Bassani"
              description="Site em React + Typescript + Styled-components. Contendo as
rotas, Home, Blog, Galeria e Sobre, possuindo acessibilidade em Libras."
              ghLink="https://github.com/kayqueprogram/website-school-reformuled"
              demoLink="https://omardonatobassani.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ABBA LOGISTICS"
              description="Site desenvolvido com ReactJS e Argon Design, para uma empresa de Logística"
              ghLink="https://github.com/kayqueprogram/abbalogistcs"
              demoLink="https://abbalogistcs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ia para o bem social"
              description="Utiliza 'Processamento de Linguagem Natural' para detectar postagens relacionadas ao suicídio e ideação suicida de usuários no ciberespaço e assim ajudar na prevenção do suicídio."
              ghLink="https://github.com/kayqueprogram"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
