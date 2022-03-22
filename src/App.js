import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";

function App() {
  const [values, setvalues] = React.useState({
    nombre: "",
    calorias: "",
    descripcion: "",
    ingredientes: "",
  });

  function handleSubmit(evt) {
    evt.preventDefauld();
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };
    setvalues(newValues);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          EL PRIMER RECETARIO DE EDWIN MAY
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </header>

      <Container className="p-10">
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Nombre</Label>
                <Input
                  type="text"
                  name="name"
                  value={values.Nombre}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="Calorias">Calorias</Label>
                <Input
                  type="text"
                  name="Calorias"
                  value={values.Calorias}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="Descripcion">Descripcion</Label>
                <Input
                  type="text"
                  name="Descripcion"
                  values={values.descripcion}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="ingredientes">ingredientes</Label>
                <Input
                  type="text"
                  name="ingredientes"
                  values={values.ingredientes}
                  onChange={handleChange}
                />
              </FormGroup>

              <Button type="submit">Guardar receta</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
