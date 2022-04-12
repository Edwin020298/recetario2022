import React, { useState, useEffect } from "react";
import shortid from "shortid";
import TituloLogo from "./components/Titulo/TituloLogo";
import Formulario from "./components/Formulario/Formulario";
import Receta from "./components/Receta/Receta";
import axios from "axios";
const initialData = {
  name: "",
  calories: "",
  description: "",
};

function Recetario() {
  const [values, setValues] = useState(initialData);
  const [ingrediente, setingrediente] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const getBerrys = async () => {
      axios({
        method: "get",
        url: "https://pokeapi.co/api/v2/berry",
        responseType: "stream",
      })
        .then((res) => {
          console.log("berris",res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBerrys()
  }, []);

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

export default Recetario;
