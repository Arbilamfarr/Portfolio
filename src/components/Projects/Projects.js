import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/SangAid.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="SangAid"
              description="L'application mobile permet aux utilisateurs de planifier et de gérer facilement leurs rendez-vous pour donner du sang, en fournissant des rappels personnalisés et des fonctionnalités de suivi de l'etat de leur rendez-vous"
              ghLink="https://github.com/Arbilamfarr/Rendez_Vous"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="DirectionFSJ"
              description="L'application vise à faciliter la navigation à l'intérieur de la faculté des sciences Chouaïb Doukkali en fournissant des itinéraires personnalisés et en mettant en évidence les ressources clés, améliorant ainsi l'expérience des étudiants et du personnel."
              ghLink="https://github.com/Arbilamfarr/DirectionFSJ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="GestUniversity"
              description="
La gestion universitaire intègre la planification des cours, l'assignation des salles et des amphithéâtres de manière efficace, facilitant ainsi la gestion des professeurs et des étudiants, tout en optimisant l'utilisation des infrastructures."
              ghLink="https://github.com/Arbilamfarr/ProjetUniversity"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Recrutement"
              description="Le projet d'automatisation des processus de recrutement basé sur la blockchain vise à simplifier et sécuriser le recrutement en utilisant des contrats intelligents et une vérification transparente des données des candidats."
              ghLink="https://github.com/Arbilamfarr/ProjetUniversity"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
