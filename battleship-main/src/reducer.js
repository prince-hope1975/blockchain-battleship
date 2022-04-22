function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_TIMELINE": {
      return {
        ...state,
        timeline: payload,
      };
    }
    case "SET_PLAYERS": {
      return {
        ...state,
        players: payload,
      };
    }
    case "SET_SHIPS": {
      const { player, ships } = payload;
      const newState = { ...state };
      newState.players[player].ships = ships;
      return { ...newState };
    }
    case "SET_SHIP_HITS": {
      const { player, ship, hits } = payload;
      const newState = { ...state };
      newState.players[player].ships.find(
        (item) => item.name === ship.name
      ).hits = hits;
      return { ...newState };
    }
    case "SET_SHIP_ON_BOARD": {
      const { locationArray, player, ship } = payload;
      const newState = { ...state };
      const newBoard = newState.players[player].gameBoard.board.map(
        (cell, index) => {
          if (locationArray.includes(index)) {
            cell.hasShip = ship.name;
          }
          return cell;
        }
      );
      newState.players[player].gameBoard.board = newBoard;
      return { ...newState };
    }
    case "SET_BOARD": {
      const newState = { ...state };
      const { player, board } = payload;
      newState.players[player].gameBoard.board = board;
      return { ...newState };
    }
    case "SET_MESSAGE": {
      return {
        ...state,
        message: payload,
      };
    }
    case "RESET_MESSAGE": {
      return {
        ...state,
        message: "",
      };
    }
    case "FIRE_SHOT": {
      const { player, location } = payload;
      const opponent = player === "human" ? "computer" : "player";
      const newState = { ...state };
      newState.players[player].fireShot(
        location,
        newState.players[opponent].gameBoard
      );
      console.log("location", location);

      return { ...newState };
    }
    case "SET_TURN": {
      const newState = { ...state };
      newState.turn = payload;
      return { ...newState };
    }
    case "SET_WINNER": {
      const newState = { ...state };
      newState.winner = payload;
      return {
        ...newState,
      };
    }
    case "RESET_GAME": {
      const initialState = {
        timeline: "init",
        players: [],
        turn: 0,
        message: "",
        winner: "",
      };
      return {
        ...initialState,
      };
    }
    // for testing
    case "CHEAT_CODE": {
      const newState = { ...state };
      newState.players.computer.ships.forEach(
        (ship) => (ship.hits = ship.position)
      );
      return { ...newState };
    }
    // Added  cases
    case "SET_ACC": {
      const newState = { ...state };
      newState.ctcAlice = payload;
      // console.log(payload);
      return newState;
    }
    case "SET_BOB": {
      const newState = { ...state };
      newState.ctcBob = payload;
      console.log("payload", payload);
      return newState;
    }
    case "SET_RESOLVE": {
      const newState = { ...state };
      newState.resolve = payload;
      console.log("payload", payload);
      return newState;
    }
    case "SET_ALICE_RESOLVE": {
      const newState = { ...state };
      newState.AliceR = payload;
      console.log("payload", payload);
      return newState;
    }

    default:
      return state;
  }
}
export function reducerFunc(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ACC":
      const newState = { ...state };
      newState.ctcAlice = payload;
      console.log(payload);
      return newState;
    default:
      return (state.ctcAlice = "Hi");
  }
}
export default reducer;
