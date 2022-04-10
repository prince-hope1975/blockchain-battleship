import styled from "styled-components";

const Div = styled.div<{
  isHit: boolean;
}>`
width: 100px;
aspect-ratio: 1;
border: 1px solid black;
  background: ${({ isHit }):any => {
   return  isHit ? "Gray" : "white";
  }};
`;
export default Div;
