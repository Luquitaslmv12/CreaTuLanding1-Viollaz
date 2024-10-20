import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Button from "../Boton/Button";

export const ItemListContainer = ({ mensaje, fn }) => {
  return (
    <>
      <div>{mensaje}</div>
      <Button fn={fn} text="Agregar al carrito" />
    </>
  );
};

export default ItemListContainer;
