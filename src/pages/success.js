import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../../context/StateContext";
import { runConffeti } from "@/lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() =>{
    localStorage.clear();
    setCartItems([])
    setTotalPrice(0);
    setTotalQuantities(0);
    runConffeti()
  }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Gracias por tu orden!</h2>
        <p className="email-msg">Verifica tu correo por el ticket.</p>
        <p className="description">
          Si tiene alguna duda por favor envie un correo a
          <a className="email" href="mateobaltar@gmail.com">
            mateobaltar@gmail.com
          </a>
        </p>
        <Link href="/">
            <button type="button" width="300px" className="btn">Continuar comprando</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
