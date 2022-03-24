import React from "react";
import logo from "./logo.svg";
import "./App.css";
import shortid from "shortid";
import { Label, Card, CardBody } from "reactstrap";

function App() {
  const [nombreReceta, setNombreReceta] = React.useState("");
  const [recetas, setRecetas] = React.useState([]);
  
  const [modoEdicion] = React.useState(false);

  const agregarReceta = (e) => {
    e.preventDefault();
    if (!nombreReceta.trim()) {
      return;
    }
    setRecetas([...recetas, { nombreReceta, id: shortid.generate() }]);
    setNombreReceta("");
  };

  const eliminareceta = (id) => {
    const arrayFiltrado = recetas.filter((item) => item.id !== id);
    setRecetas(arrayFiltrado);
  };

  const editarReceta = () => {};

  return (
    <div className="container mt-5">
      <header className="App-header">
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          EL PRIMER RECETARIO DE EDWIN MAY
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </header>

      <h4 className="text-center"></h4>
      <form onSubmit={modoEdicion ? editarReceta : agregarReceta}>
        <Card>
          <CardBody>
            <Label for="name">Nombre</Label>
            <input
              name="nombreReceta"
              type="text"
              className="form-control mb-2"
              onChange={(e) => setNombreReceta(e.target.value)}
              value={nombreReceta}
            />

            <Label for="calorias">calorias</Label>
            <input
              name="Calorias"
              type="text"
              className="form-control mb-2"
              
            />
            <Label for="descripcion">descripcion</Label>
            <input
              name="descripcion"
              type="textarea"
              className="form-control mb-2"
             
            />

            <Label for="ingredientes">ingredientes</Label>
            <input
              name="nombreReceta"
              type="text"
              className="form-control mb-2"
              
            />

            {modoEdicion ? (
              <button className="btn btn-warning btn-block" type="submit">
                Editar
              </button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">
                GUARDAR
              </button>
            )}
          </CardBody>
        </Card>
        <br></br>
      </form>
      <ul className="list-group">
        {recetas.length === 0 ? (
          <li className="list-group-item">NO HAY RECETAS HASTA EL MOMENTO</li>
        ) : (
          recetas.map((item) => (
            <li className="list-group-item" key={item.id}>
              <span className="lead">{item.nombreReceta}</span>
              <button
                className="btn btn-sm btn-danger float-right mx-2"
                onClick={() => eliminareceta(item.id)}
              >
                Eliminar
              </button>
            </li>
          ))
        )}
        <br></br>
      </ul>
      <br></br>
    </div>
  );
}

export default App;
