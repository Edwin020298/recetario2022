import React, { memo } from "react";
import { Label, Card, CardBody, Container, Row, Col, Button } from "reactstrap";
import "./Formulario.css";

const Formulario = memo(
  ({
    values,
    ingrediente,
    setingrediente,
    ingredientes,
    validateButton,
    GuardaReceta,
    handleChange,
    addIngredient,
    borrarIngrediente,
  }) => {
    return (
      <div>
        <Container>
          <form onSubmit={GuardaReceta}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Row>
                      <Label htmlFor="name">NOMBRE</Label>
                      <input
                        name="name"
                        type="text"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={values.name}
                      />
                    </Row>
                    <Row>
                      <Label htmlFor="calorias">CALORIAS</Label>
                      <input
                        value={values.calories}
                        name="calories"
                        type="text"
                        className="form-control mb-2"
                        onChange={handleChange}
                      />
                    </Row>

                    <Row>
                      <Label htmlFor="descripcion">DESCRIPCION</Label>
                      <input
                        name="description"
                        type="textarea"
                        className="form-control mb-2"
                        value={values.description}
                        onChange={handleChange}
                      />
                    </Row>

                    <Row>
                      <Col>
                        <Label htmlFor="ingredientes">INGREDIENTES</Label>
                        <input
                          name="ingredients"
                          type="text"
                          className="form-control mb-2"
                          onChange={(e) => setingrediente(e.target.value)}
                          value={ingrediente}
                        />
                      </Col>

                      <Col>
                        <Button
                          onClick={addIngredient}
                          outline
                          color="primary"
                          type="button"
                        >
                          +
                        </Button>
                      </Col>
                    </Row>

                    <Button
                      disabled={validateButton()}
                      className="p-2 mt-2 btn btn-success btn-block"
                      type="submit"
                    >
                      GUARDAR
                    </Button>
                  </Col>

                  <Col>
                    <Card>
                      <CardBody>
                        <h3>LISTA DE INGREDIENTES</h3>
                        {ingredientes.map((res) => {
          
                          return ( 
                            
                            <div key={res.id}>
                              {res.name}
                              <br></br>
                              <button
                                className="btn btn-success btn"
                                onClick={() => borrarIngrediente(res.id)}
                              >
                                Eliminar
                              </button>
                              <br></br>
                            </div>
                          );
                        })}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </form>
        </Container>

        <br></br>
      </div>
    );
  }
);

export default Formulario;
