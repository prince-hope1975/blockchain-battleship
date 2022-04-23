import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { Data, arrData } from "./trial.js";

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const interact = { ...stdlib.hasRandom };

let currentPlayer;

const fmt = (x) => stdlib.formatCurrency(x, 4);

const arr = Data

console.log(arr);

const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const getBalance = async (who) =>
  stdlib.formatCurrency(await stdlib.balanceOf(who), 4);
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const Player = () => {
  const interact = { ...stdlib.hasRandom };
  let Ship = [
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
  const getBoard = () => {
    console.log(`Bob asked to give the preimage.`);
    return arr;
  };
  let i =0
  const updateShip = () => {
    for (let singleShip in Ship) {
      if (Ship[singleShip] === false) {
        Ship[singleShip] = true;
        break;
      }
    }
    interact.Ship = Ship
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
  const sendToFront = (value) => {
    value.forEach((bigNumber) => {
      console.log(stdlib.bigNumberToNumber(bigNumber));
    });
  };
  const print =(data)=>{
    console.log("val",data)
  }
  const getHand = ()=>{
    i++
    return  arrData[i%10]
  }
  const setPlayer =(bool)=>{currentPlayer = bool}
  return {
    Ship,
    getBoard,
    updateShip,
    informTimeout,
    seeOutcome,
    sendToFront,
    getShip,
    print, 
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
        console.log(`Bob accepts the wager of
        .`);
        //  ${fmt(interact.amt)}
      }
    },
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
//
