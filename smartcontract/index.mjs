import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

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

const thePass = stdlib.randomUInt();
const common = {
  getBoard: () => {
    console.log(`Bob asked to give the preimage.`);
    console.log(`Returning: ${thePass}`);
    return thePass;
  },
  sendToFront: (value) => {
    value.forEach((bigNumber) => {
      console.log(stdlib.bigNumberToNumber(bigNumber));
    });
  },
  ship: [
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
    false,
  ],
  informTimeout: () => {
    console.log(`someone observed a timeout`);
  },
  seeOutcome: (outcome) => {
    console.log(`someone saw outcome ${[outcome]}`);
  },
};

await Promise.all([
  backend.Alice(ctcAlice, {
    amt: stdlib.parseCurrency(25),
    deadline: 10,
    wager: stdlib.parseCurrency(10)
  }),
  backend.Bob(ctcBob, {
    ...common,
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
//