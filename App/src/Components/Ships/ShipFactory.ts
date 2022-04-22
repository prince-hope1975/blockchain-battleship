import React from "react";
const useShipFactory = () => {
  const [length, setLength] = React.useState<number & range>(1);
  const [hitPosition, setHitPosition] = React.useState([] as Array<ShipProps>);
  const [isSunk, setSunk] = React.useState(false);
  const makeHit = (position: number) => {
    const newArr = hitPosition.map((item, index) => {
      if (position === index) return { isHit: true };
      return item;
    });
    console.log(`arr ${length} `, hitPosition);
    setHitPosition(newArr);
  };
  React.useEffect(() => {
    let arr = [] as any;
    for (let i = 0; i <= length; i++) {
      // !console.logs
      arr = [...arr, { isHit: false }];
    }
    setHitPosition(arr);
    console.log(`arr ${length} `,arr)
  }, [length]);

  React.useEffect(() => {
    if (hitPosition.some((e) => e.isHit === false)) return setSunk(false);
    setSunk(true);
  }, [hitPosition]);

  return { length, setLength, hitPosition, makeHit, isSunk };
};

export type range = 0 | 1 | 2 | 3 | 4 | 5;
export interface ShipProps {
  isHit: boolean;
}
export default useShipFactory;
