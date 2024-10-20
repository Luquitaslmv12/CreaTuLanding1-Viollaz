import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Boton/Button";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  const [valor, setValor] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar valor={valor} />

      <ItemListContainer mensaje="Prueba superada!!! (creo)" fn={setValor} />
    </>
  );
}

export default App;
