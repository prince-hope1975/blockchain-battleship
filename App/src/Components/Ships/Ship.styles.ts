import styled from "styled-components";
import { ShipProps } from "./ShipFactory";

export const Wrapper = styled.div<{
  hitPosition: ShipProps[];
  index: number;
  isSunk: boolean;
}>`
  background-color: ${({ hitPosition, index }) => {
    if (hitPosition[index]?.isHit)
    return "blue";
    return "grey";
  }};
  width: 2rem;
  aspect-ratio: 1;
  border: 1px solid black;
  position: relative;
  
 
  ${({ isSunk }) => {
    if (isSunk)
      return `background-color : red;
              border: 1px solid white;
               &::before,
  &::after {
    content: "";
    height: 2px;
    background: white;
    width: 100%;
    position: absolute;
    top:50%
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before{
    transform: rotate(-45deg);
  }
                         
                         `;
    return;
  }};
`;
