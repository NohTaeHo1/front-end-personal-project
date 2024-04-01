'use client'

import { Button } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";


const ComponentPage:NextPage = () => {
  const [count, setcount] = useState(0);
  const handlePlus = () => {
    setcount(count + 1);
  };
  const handleMinus = () => {
    setcount(count - 1);
  };

  return (
    <>
      <div>
        <h1>Counter : {count}</h1>
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={handleMinus}>-</Button>
      </div>
    </>
  );
}

export default ComponentPage;
