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
    width?:number
  ) => {
    console.log("array, ", array);
    let mockArray = array;
    mockArray[coordinate[0]][coordinate[1]] = {
      ...mockArray[coordinate[0]][coordinate[1]],
      Element: elem,
      // @ts-ignore 
      width:width=width
    };
    console.log(mockArray);
    setArray(mockArray);
  };

  return {
    PlaceOnGameBoard,
    arrayObj,
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

export const Split = (Elem: { length: number  } & Function) => {
  const arr = Elem({length:5});
  console.log("Ship",arr.props.children)
  return arr.props.children;
};
export default useGameBoardFactory;
