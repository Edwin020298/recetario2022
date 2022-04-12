import React, { useState } from "react";
import "./App.css";
import shortid from "shortid";
import TituloLogo from "./Titulo/TituloLogo";
import Formulario from "./Formulario/Formulario";
import Receta from "./Receta/Receta";

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
      <TituloLogo />

      <Formulario
        values={values}
        ingrediente={ingrediente}
        setingrediente={setingrediente}
        ingredientes={ingredientes}
        validateButton={validateButton}
        GuardaReceta={GuardaReceta}
        handleChange={handleChange}
        addIngredient={addIngredient}
        borrarIngrediente={borrarIngrediente}
      />

      <Receta BorrarReceta={BorrarReceta} recetas={recetas} />
    </div>
  );
}

export default App;
