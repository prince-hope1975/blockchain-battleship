import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const interact = { ...stdlib.hasRandom };

const fmt = (x) => stdlib.formatCurrency(x, 4);
const createArray = (num, content) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = [];
    for (let j = 0; j < num; j++) {
      // @ts-ignore
      arr[i][j] = content;
    }
  }
  return arr;
};
const arr = createArray(10, 0);

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
  const updateShip =()=>{
    Ship = [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
  }
  const seeShip=()=>console.log(Ship)
  const informTimeout = ()=>{
    console.log(`someone observed a timeout`);
  }
  const seeOutcome = ()=>{
    console.log(`someone saw outcome `);
  }
  const sendToFront = (value) =>{
     value.forEach((bigNumber) => {
       console.log(stdlib.bigNumberToNumber(bigNumber));
     });
  }
  return { Ship, getBoard, updateShip, informTimeout, seeOutcome, sendToFront, seeShip };
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
      if (Math.random() <= 0.5) {
        for (let i = 0; i < 10; i++) {
          console.log(`  Bob takes his sweet time...`);
          await stdlib.wait(1);
        }
      } else {
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
