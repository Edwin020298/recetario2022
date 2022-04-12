import React, { memo } from "react";

import "./TituloLogo.css";
import Logo from "../../../../components/Logo/Logo";
import H1 from "../../../../components/Texts/H1/H1";
import { Card, CardBody, Container, Row } from "reactstrap";

const TituloLogo = memo(() => {
  return (
    <Container>
      <Card>
        <CardBody>
          <Row>
            <header className="App-header">
              <Logo />
              <H1>EL PRIMER RECETARIO DE EDWIN MAY</H1>
              <Logo />
            </header>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
});

export default TituloLogo;
