import React, { useEffect, useState } from "react";
import Ship from "./Components/Ships/Ship";
import { Split } from "./Components/GameBoard/GameBoardFactory";
import useGameBoardFactory from "./Components/GameBoard/GameBoardFactory";
const App = () => {
  // const [ship, setShip] = useState<any>();
  // useEffect(() => {
    
    // }, [ship]);
    const Sh =Split(Ship);
    const { PlaceOnGameBoard, arrayObj, setArray } = useGameBoardFactory();
  useEffect(() => {
    Sh.forEach((element: JSX.Element, index: number) => {
      console.log("Element,")
      PlaceOnGameBoard(element, [ index,0]);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      {}
      {Ship({length:4}).props.children.map((Item:React.ElementType)=>Item)}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {arrayObj?.map((array) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              {array?.map(({ Element, coordinates, width }) => {
                // console.log("Element:",Element)
                return Element.props?[Element]:<Element coordinates={coordinates} width={width} />;
                ;  
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
