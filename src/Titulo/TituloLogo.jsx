import React, { memo } from 'react';
import logo from "../logo.svg";
import "./TituloLogo.css";
import { Card, CardBody, Container, Row } from "reactstrap";

const TituloLogo = memo(() => {
    return (
        <Container>
        <Card>
          <CardBody>
            <Row>
              <header className="App-header">
                <p>
                  <img src={logo} className="App-logo" alt="logo" />
                  EL PRIMER RECETARIO DE EDWIN MAY
                  <img src={logo} className="App-logo" alt="logo" />
                </p>
              </header>
            </Row>
          </CardBody>
        </Card>
      </Container>
    );
});

export default TituloLogo;