import React from "react";
import logo from "./logo.svg";
import "./App.css";
import shortid from "shortid";
import { Label, Card, CardBody } from "reactstrap";

function App() {
  const [Nombre, setNombre] = React.useState();
  const [nombreR, setNombreR] = React.useState([]);

  const [Calorias, setCalorias] = React.useState();
  const [caloriasR, setCaloriasR] = React.useState([]);

  const GuardaReceta = (e) => {
    e.preventDefault();
    if (!Nombre.trim()) {
       if (!Calorias.trim()) return; 
    }
    setNombreR([...nombreR, { Nombre, id: shortid.generate() }]);
    setNombre("");
     setCaloriasR([...caloriasR, { Calorias, id: shortid.generate() }]);
    setCalorias(""); 
  };

  const BorrarReceta = (id) => {
    const arrayFiltrado = nombreR.filter((item) => item.id !== id);
    setNombreR(arrayFiltrado);
  };

  return (
    <div className="container mt-5">
      <header className="App-header">
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          EL PRIMER RECETARIO DE EDWIN MAY
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </header>

      <form onSubmit={GuardaReceta}>
        <Card>
          <CardBody>
            <Label for="name">Nombre</Label>
            <input
              name="Nombre"
              type="text"
              className="form-control mb-2"
              onChange={(e) => setNombre(e.target.value)}
              value={Nombre}
            />

            <Label for="calorias">calorias</Label>
            <input
              name="Calorias"
              type="text"
              className="form-control mb-2"
              onChange={(e) => setCalorias(e.target.value)}
              value={Calorias}
            />

            <Label for="descripcion">descripcion</Label>
            <input
              name="descripcion"
              type="textarea"
              className="form-control mb-2"
            />

            <Label for="ingredientes">ingredientes</Label>
            <input name="Nombre" type="text" className="form-control mb-2" />

            <button className="btn btn-dark btn-block" type="submit">
              GUARDAR
            </button>
          </CardBody>
        </Card>
        <br></br>
      </form>

      <ul className="list-group">
        {nombreR.length === 0 ? (
          <div className="card mb-3">NO HAY RECETAS</div>
        ) : (
          nombreR.map((item) => (
            <div className="list-group-item" key={item.id}>
              <span className="lead">{item.Nombre}</span>
              <span className="res">{item.Calorias}</span>

              <button
                className="btn btn-sm btn-danger float-right mx-2"
                onClick={() => BorrarReceta(item.id)}
              >
                Eliminar
              </button>
            </div>
          ))
        )}
        <br></br>
      </ul>
    </div>
  );
}

export default App;
