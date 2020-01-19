import React, { useState } from "react";
import "../styles/bit.css";

function Bit({ toggleBit, placeValue, bitTable, setBitTable }) {
  const [bit, setBit] = useState(false);

  return (
    <label className="switch">
      <input onClick={handleClick} value={bit} type="checkbox" />
      <span className="slider" />
      <p className="bit-value">{bit ? 1 : 0}</p>
      <p className="bit-value">{placeValue}</p>
    </label>
  );

  function handleClick() {
    const newBitTable = {};
    setBit(!bit);
    newBitTable[placeValue] = !bit;

    setBitTable(Object.assign(bitTable, newBitTable));
  }
}

export default Bit;
