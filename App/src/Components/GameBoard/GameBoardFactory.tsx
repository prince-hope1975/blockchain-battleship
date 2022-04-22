import React, { useEffect, useState } from "react";
import { createArray } from ".";
import Div from "./GameBoard.style";



const useGameBoardFactory = () => {
  const [isHit, setIsHit] = useState(false);
  const [width, setWidth] = useState(30);
  const array = createArray(10, {
    Element: GamePiece,
    coordinates: [],
    width:width
  });

  const [arrayObj, setArray] = useState(array);
  useEffect(() => {
    console.log("isHit : ", isHit);
  }, [isHit]);

  const PlaceOnGameBoard = (
    elem: React.ReactElement,
    coordinate: Array<number>,
    index?:number,
    width?:number
  ) => {
    console.log("array, ", array);
    let mockArray = array;
    mockArray[coordinate[0]][coordinate[1]] = {
      ...mockArray[coordinate[0]][coordinate[1]],
      Element: elem,
      index:index,
      // @ts-ignore 
      width:width
    };
    console.log(mockArray[coordinate[0]][coordinate[1]]);
    setArray(mockArray);
  };

  return {
    PlaceOnGameBoard,
    arrayObj,
    setArray,
  };
};
const GamePiece = ({ width }: { width?: number }) => {
  const [isHit, setIsHit] = useState(false);

  return (
    <Div
      style={{ background: `${isHit ? "white" : "gray"}`, width: `${width}px` }}
      isHit={isHit}
      onClick={() => {
        setIsHit(true);
        console.log(isHit);
      }}
    ></Div>
  );
};

export const Split = (Elem:{length:number} & Function, numb?:number ) => {
  const arr = Elem({length:numb||5,});
  console.log("Ship",arr)
  return arr
};
export default useGameBoardFactory;
