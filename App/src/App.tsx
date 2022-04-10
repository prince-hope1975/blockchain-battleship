import React, { useEffect, useState } from "react";
import Ship from "./Components/Ships/Ship";
import { Split } from "./Components/GameBoard/GameBoardFactory";
import useGameBoardFactory from "./Components/GameBoard/GameBoardFactory";
const App = () => {
  const [ship, setShip] = useState<any>();
  useEffect(() => {
    // console.log(arrayObj);
    // console.log(arrayObj[0][0].Element);
  }, [ship]);
  const { PlaceOnGameBoard, arrayObj } = useGameBoardFactory();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                   {/* {
                  Split(Ship).forEach((element: JSX.Element,index:number) => {
                    PlaceOnGameBoard(element, [0,index])
                  })
                } */}
      {/* {Ship({length:4}).props.children.map((Item:React.ElementType)=>Item)} */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {arrayObj?.map((array) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              {array?.map(({Element, coordinates, width}) => {
                
                // console.log("Element:",Element)
                return <Element coordinates={coordinates} width={width} />
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
