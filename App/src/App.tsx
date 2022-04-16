import React, { useEffect, useState } from "react";
import useShip from "./Components/Ships/Ship";
import { Split } from "./Components/GameBoard/GameBoardFactory";
import useGameBoardFactory from "./Components/GameBoard/GameBoardFactory";
const App = () => {
 const Sh = useShip({length:4})
   
    const { PlaceOnGameBoard, arrayObj, setArray } = useGameBoardFactory();
  useEffect(() => {
    Sh.forEach((element, index: number) => {
      // console.log("Element,")
      PlaceOnGameBoard(element, [ index,0], index);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {arrayObj?.map((array) => {
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                {array?.map(({ Element, coordinates, width, index }) => {
                  console.log("Element:",<Element coordinates={coordinates}/>)
                  return <Element coordinates={coordinates} width={width} index={index} />
                })}
              </div>
            );
          })}
          {useShip({length:3}).map((Item:React.ElementType, index)=>{return <Item index={index}/>})}
        </div>
          {useShip({length:4}).map((Item:React.ElementType, index)=>{return <Item index={index}/>})}
      </div>
    </>
  );
};

export default App;

