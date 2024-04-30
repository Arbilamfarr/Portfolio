import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiEclipseide,
  SiAnaconda,
  SiAudacity,
  SiOxygen,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAudacity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOxygen />
      </Col>
    </Row>
  );
}

export default Toolstack;
