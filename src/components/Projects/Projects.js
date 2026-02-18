import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/img2.png";
import osgestor from "../../Assets/Projects/OSGESTOR.jpg";
import editor from "../../Assets/Projects/img1.png";
import chatify from "../../Assets/Projects/img1.jpeg";
import bitsOfCode from "../../Assets/Projects/img2.jpeg";
import lifeQuest from "../../Assets/Projects/Lifequest.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Explorando soluções robustas e interfaces intuitivas em projetos reais.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Entre Mundos: Visual Novel"
              description="Desenvolvimento de um jogo interativo multiplataforma utilizando a Engine Ren'Py (Python-based). Otimizado para alta performance e portabilidade, abrangendo distribuições Linux, Windows e ecossistemas Android."
              ghLink="https://github.com/kayqueprogram/Entre-Mundos-Project---Game"
              tags={["Python", "Ren'Py", "Multiplataforma"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Entre Mundos: Web Experience"
              description="Landing page de alto desempenho desenvolvida com Next.js 13 e Tailwind CSS. Focada em SEO, design responsivo e fluidez visual, servindo como o hub oficial de marketing para o game."
              ghLink="https://github.com/kayqueprogram/Entre-Mundos-Project---Site"
              demoLink="https://entremundosgame.vercel.app/"
              tags={["Next.js", "Tailwind CSS", "SEO"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portal Educacional Omar Donato"
              description="Plataforma institucional robusta construída com React e TypeScript. Implementa arquitetura moderna e prioriza a inclusão social através de acessibilidade nativa em Libras (VLibras)."
              ghLink="https://github.com/kayqueprogram/website-school-reformuled"
              demoLink="https://omardonatobassani.vercel.app/"
              tags={["React", "TypeScript", "Styled-Components"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ABBA Logistics: Web Presence"
              description="Solução corporativa para o setor logístico utilizando ReactJS e Argon Design System. Entrega uma interface moderna, gestão de identidade visual e foco total em UI/UX para conversão de novos parceiros."
              ghLink="https://github.com/kayqueprogram/abbalogistcs"
              demoLink="https://abbalogistcs.vercel.app/"
              tags={["React", "Argon Design", "UI/UX"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={osgestor}
              isBlog={false}
              title="FKS Logistics: OS GESTOR"
              description="ERP focado em gestão de ativos críticos e manutenção preventiva. Desenvolvido com Next.js, TypeScript e Firebase para persistência em tempo real, automatizando o controle de estoque e ciclos de manutenção industrial."
              ghLink="#"
              tags={["Next.js", "Firebase", "TypeScript", "Tailwind"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={lifeQuest} // Troque pelo import da imagem do LifeQuest (ex: lifeQuestImg)
              isBlog={false}
              title="LifeQuest: Personal Hub"
              description="Plataforma holística de produtividade que integra gestão financeira, organização de tarefas e um sistema de comunidade. Focada em transformar a rotina em uma jornada gamificada, permitindo o acompanhamento de metas pessoais com suporte social."
              demoLink="https://lifequesthub.vercel.app/" // Adicione o link da demo se houver
              tags={["Next.js", "Firebase", "Context API", "Tailwind"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;