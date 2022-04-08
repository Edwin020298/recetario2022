import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import shortid from "shortid";
import { Label, Card, CardBody, Container, Row, Col, Button } from "reactstrap";

const initialData = {
  name: "",
  calories: "",
  description: "",
};

function App() {
  const [values, setValues] = useState(initialData);
  const [ingrediente, setingrediente] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [recetas, setRecetas] = useState([]);

  const validateButton = () => {
    if (values.name === "") return true;
    if (values.calories === "") return true;
    if (values.description === "") return true;
    if (ingredientes.length === 0) return true;
    return false;
  };

  const GuardaReceta = (e) => {
    e.preventDefault();
    if (validateButton()) return;
    const newRecetasArray = [...recetas];
    newRecetasArray.push({ ...values, ingredientes, id: shortid.generate() });
    setingrediente("");
    setIngredientes([]);
    setRecetas(newRecetasArray);
    setValues(initialData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const BorrarReceta = (id) => {
    const arrayFiltrado = recetas.filter((item) => item.id !== id);
    setRecetas(arrayFiltrado);
  };

  const addIngredient = () => {
    if (ingrediente === "") return;
    const newIngredientes = [...ingredientes];
    const data = {
      name: ingrediente,
      id: shortid.generate(),
    };
    newIngredientes.push(data);
    setIngredientes(newIngredientes);
    setingrediente("");
  };

  const borrarIngrediente = (id) => {
    const arrayFiltrado = ingredientes.filter((item) => item.id !== id);
    setIngredientes(arrayFiltrado);
  };

  return (
    <div className="container mt-5">
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
                        color="secondary"
                        type="button"
                      >
                        +
                      </Button>
                    </Col>
                  </Row>

                  <button
                    disabled={validateButton()}
                    className="btn btn-dark btn-block"
                    type="submit"
                  >
                    GUARDAR
                  </button>
                </Col>

                <Col>
                  <Card>
                    <CardBody>
                      <h3>LISTA DE INGREDIENTES</h3>
                      {ingredientes.map((res) => {
                        return (
                          <div key={res.id}>
                            {res.name}
                            <button
                              className="Button"
                              onClick={() => borrarIngrediente(res.id)}
                            >
                              BORRAR
                            </button>
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

      <Container>
        <ul className="list-group">
          {recetas.length === 0 ? (
            <h2 className="card mb-3">NO HAY RECETAS</h2>
          ) : (
            recetas.map((item) => {
              const renderIngredientes = item.ingredientes.map((res) => {
                return <li key={res.id}>{res.name}</li>;
              });
              return (
                <div className="list-group-item" key={item.id}>
                  <span className="lead">{item.name}</span>
                  <br></br>
                  <span className="lead">{item.calories}</span>
                  <br></br>
                  <span className="lead">{item.description}</span>
                  <br></br>
                  <ul>{renderIngredientes}</ul>

                  <button
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={() => BorrarReceta(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              );
            })
          )}
          <br></br>
        </ul>
      </Container>
    </div>
  );
}

export default App;
