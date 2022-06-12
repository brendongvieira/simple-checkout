import React from "react";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Checkout</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrinho{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">Entrar</a>
      </div>
    </header>
  );
}
