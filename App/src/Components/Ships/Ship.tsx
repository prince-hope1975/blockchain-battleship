import React, { useEffect } from "react";
import useShipFactory, { range } from "./ShipFactory";
import { Wrapper } from "./Ship.styles";
import { ShipProps } from "./ShipFactory";

const Ship = ({ length }: { length: number & range }) => {
  const { setLength, makeHit, hitPosition, isSunk } = useShipFactory();
  useEffect(() => {
    setLength(length);
  }, []);

  return (
    <div>
      {createIncreasingArray(length, 0).map(({}, index) => {
        return (
          <Box
            index={index}
            makeHit={makeHit}
            hitPosition={hitPosition}
            isSunk={isSunk}
          />
        );
      })}
    </div>
  );
};

const Box = ({
  index,
  makeHit,
  hitPosition,
  isSunk,
}: {
  index: range | number;
  makeHit: (item: number) => null | void;
  hitPosition: ShipProps[];
  isSunk: boolean;
}) => {
  return (
    //   @ts-ignore

    <Wrapper
      onClick={() => makeHit(index)}
      hitPosition={hitPosition}
      index={index}
      isSunk={isSunk}
    ></Wrapper>
  );
};

const createIncreasingArray = (
  _length: number,
  _start: undefined | number
): number[] => {
  let newArr: number[] = [];
  for (let i = _start ? _start : 0; i <= _length; i++) {
    newArr = [...newArr, i];
  }
  return newArr;
};

export default Ship;