import Gameboard from "./gameboardFactory";
import * as backend from "../build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const callbackFn = () => {
  let fn;
  const setFn = (fxn) => {
    fn = fxn;
    console.log("fxn", fxn);
  };
  const callFn = (val) => {
    fn(val);
  };
  return {
    setFn,
    callFn,
  };
};
const Fxn = callbackFn();
const Waiter = callbackFn();
const waitFxn = () => {};

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

class Player {
  constructor(name, acc) {
    this.name = name;
    this.ctc = null;
    this.ships = [];
    this.Ship = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    this.acc = acc;
    this.gameBoard = new Gameboard();
  }
  updateShip() {
    for (let singleShip in this.Ship) {
      if (this.Ship[singleShip] === false) {
        this.Ship[singleShip] = true;
        break;
      }
    }
  }
  getBoard() {
    return this.gameBoard.board.map((item) => {
      if (item.hasShip !== false) return 1;
      return 0;
    });
  }
  getShip() {
    return this.Ship;
  }
  informTimeOut() {
    console.log("You observed a timeout");
  }
  setPlayer(Bool) {
    this.currentPlayer = Bool;
  }
  async getHand() {
    console.log(`Please Play your hand ${this.name}`);
    if (this.name.toLowerCase() === "computer") {
      Waiter.callFn(true);
    }
    const hand = await new Promise((resolveHandP) => {
      console.log(resolveHandP);
      this.resolveHandP = resolveHandP;
      Fxn.setFn(resolveHandP);
    });
    return hand;
  }
  async waitTillHandGot() {
    const hand = await new Promise((resolveHandP) => {
      console.log(resolveHandP);
      Waiter.setFn(resolveHandP);
    });
    return hand;
  }
  playHand(hand) {
    console.log("hand,", hand);
    Fxn.callFn(hand);
    // this.resolveHandP(hand)
  }
  fireShot(location, gameboard) {
    if (gameboard.opponentBoard()[location] === "empty") {
      gameboard.receiveShot(location);
    }
  }
}

export class Deployer extends Player {
  setWager(wager) {
    this.wager = wager;
    console.log(this);
  }
  async deploy(reach) {
    this.ctc = this.acc.contract(backend);
    // !TODO publish this variable and make it accessible to all
    this.wager = reach.parseCurrency(this.wager); // UInt
    this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector]; // UInt
    backend.Alice(this.ctc, this);
    const ctcInfoStr = JSON.stringify(await this.ctc.getInfo(), null, 2);
    console.log("info", ctcInfoStr);
    // !TODO display the info string
    this.ctcInfoStr = ctcInfoStr;
  }
}

export class Attacher extends Player {
  acceptWager(wagerAtomic) {
    const wager = reach.formatCurrency(wagerAtomic, 4);
    console.log("Accepted Wager, ", wager);
  }

  attach(ctcInfoStr) {
    this.ctc = this.acc.contract(backend, JSON.parse(ctcInfoStr));
    backend.Bob(this.ctc, this);
  }
}

export default Player;
