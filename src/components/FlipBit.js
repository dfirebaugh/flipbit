import React, { useState } from "react";
import "../styles/FlipBit.css";
import Bit from "./Bit";
import { PLACE_VALUES } from "../constants";

function FlipBit() {
  const [decimal, setDecimal] = useState(0);
  const [bitTable, setBitTable] = useState({});

  function updateBitTable(newBitTable) {
    setBitTable(newBitTable);
    setDecimal(updateDecimal());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>FlipBit</h1>
        <p>
          This tool is intended to help teach how binary is converted into
          decimal. Toggle the switches below to flip the bits
        </p>
      </header>

      {PLACE_VALUES.map(function renderBits(placeValue, index) {
        return (
          <Bit
            key={index}
            placeValue={placeValue}
            bitTable={bitTable}
            setBitTable={updateBitTable}
          />
        );
      })}

      <h1 style={{ color: "white" }}>Decimal: {decimal}</h1>
    </div>
  );

  function updateDecimal() {
    const keys = Object.keys(bitTable);

    const activeBits = keys.filter(function getActiveBits(placeValue) {
      return bitTable[placeValue];
    });

    if (activeBits.length <= 0) {
      return 0;
    }

    return activeBits.reduce(function sum(acc, curr) {
      return Number(acc) + Number(curr);
    });
  }
}

export default FlipBit;

// PLACE_VALUES.reduce(function mapPlaceValuesToBitTable(placeValue){
//   return
// })
