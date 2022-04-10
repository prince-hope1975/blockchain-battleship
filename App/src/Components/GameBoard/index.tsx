const Index = () => {
  return <div>Index</div>;
};
export const createArray = (num:number , content:object) => {
  let arr: Array<Array<{Element:React.ReactElement, coordinates:Array<number>, width:number}>> = [];
  for (let i = 0; i < num; i++) {
    arr[i] = [];
    for (let j = 0; j < num; j++) {
      // @ts-ignore
      arr[i][j] = AddCoordinates(content, [i,j]);
    }
  }
  return arr;
};

const AddCoordinates = (Obj:object, coordinates:Array<Number>)=>{
  
  return {...Obj, coordinates}
}
export default Index;
