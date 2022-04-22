import React, { createContext, useReducer } from "react";
import reducer, {reducerFunc} from "./reducer";

const store = createContext();
const { Provider } = store;

function GameController({ children }) {
  const initialState = {
    timeline: "init",
    players: {},
    turn: 0,
    message: "",
    winner: "",
  };
  const blockChainState = {
    ctcAlice:null	,
    ctcBob: null   
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [blockState, dispatchBlock] = useReducer(reducerFunc, blockChainState);
  return (
    <Provider value={{ state, dispatch, blockState, dispatchBlock }}>
      {children}
    </Provider>
  );
}

export default GameController;
export { store };
