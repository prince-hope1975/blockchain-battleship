import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

export const Data = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
export const playerChoice = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8
];

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const getBalance = async (who) =>
  stdlib.formatCurrency(await stdlib.balanceOf(who), 4);
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const Player = () => {
  let Ship = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
  let i =0
  const getBoard = () => {
    console.log(`Bob asked to give the preimage.`);
    return Data;
  };
  const updateShip = () => {
    for (let singleShip in Ship) {
      if (Ship[singleShip] === false) {
        Ship[singleShip] = true;
        break;
      }
    }
  };
  const getShip = () => {
    return Ship;
  };
  const informTimeout = () => {
    console.log(`someone observed a timeout`);
  };
  const seeOutcome = () => {
    console.log(`someone saw outcome `);
  };
  const getHand = ()=>{
    i++
    return  playerChoice[(i-1)%10]
  }
  return {
    Ship,
    getBoard,
    updateShip,
    informTimeout,
    seeOutcome,
    getShip,
    getHand
  };
};

await Promise.all([
  backend.Alice(ctcAlice, {
    ...Player(),
    amt: stdlib.parseCurrency(25),
    deadline: 10,
    wager: stdlib.parseCurrency(10),
  }),
  backend.Bob(ctcBob, {
    ...Player(),
    acceptWager: async () => {
      if (Math.random() >= 1) {
        for (let i = 0; i < 10; i++) {
          console.log(`  Bob takes his sweet time...`);
          await stdlib.wait(1);
        }
      } else {
          await stdlib.wait(1);
        console.log(`Bob accepts the wager .`);
      }
    },
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
//
