import React, { memo } from "react";
import { Container } from "reactstrap";
import "./Receta.css";

const Receta = memo(({ BorrarReceta, recetas }) => {
  return (
    <Container>
      <h5> RECETAS AGREGADAS: </h5>
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
                <h8>Nombre:</h8> <span>{item.name}</span>
                <br></br>
                <h8>Calorias:</h8> <span>{item.calories}</span>
                <br></br>
                <h8>Descripcion:</h8> <span>{item.description}</span>
                <br></br>
                <h8>Ingredientes:</h8><ul>{renderIngredientes}</ul>
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
  );
});
<br></br>;

export default Receta;
