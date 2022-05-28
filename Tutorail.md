# Tutorial: BattleShip

In this workshop, we'll go through Prince's Bounty Hack submission, the Battleship game; where two players have to try to guess the positions of each ship on a Gameboard. The is one stage in which the game runs indefinitely till a player's ships are destroyed. The program checks if all ships have been hit, then it computes the winner based on the total number of ships hit.

This workshop assumes that you've completed the rock, paper, scissors tutorial.

We assume that you’ll go through this workshop in a directory named ~/reach/workshop-battleship:

```$ mkdir -p ~/reach/workshop-battleship```

And that you have a copy of Reach installed in ~/reach so you can write

```$ ../reach version```

You should start by initializing your project

```$ ../reach init```

## Problem Analysis
Having a fair implementation of Battleship on the blockchain is fairly difficult, and that's exactly what is implemented on this repo using reach.

A few questions encountered while trying to build this application are:

```
Who is involved in this application?

What information do they know at the start of the program?

What information are they going to discover and use in the program?

Waht are the steps to be taken in the course of the program?

What funds change ownership during the application and how?
```

**Question Answers!** 
```
Our application involves 2 roles: One deployer and one attacher.

Deployer knows about the price of the wager they want to set for the game, and the deadline for deployer to connect.

Attacher will be informed about the price of the wager set by the deployer.

Both attacher and deployer pay wager to the contract.

Deployer and attacher place the ships on their gameboard. 

Deplopyer and Attacher take turns guessing the position of the ships of the other

At the end of the game, the winner gets paid all the wagers, or in the case of a draw, both players get refunded.
```

## Data Definition
For the next step, we are going to define the data type equivalents of the values used in our answers from the previous section. Also, in this step we'll be deciding what functions our participants will have.

* What functions/values does Deployer need to deploy the game, play and observe outcomes?

* What functions/values does attacher need to attach, play and observe outcomes?

* What functions do both participants have in common?

It's time to see our answers!

First we'll define a common object that contains the functions both participants have in common.

```js
const common = {
  getBoard: Fun([], Array(UInt, 100)),
  Ship: Array(Bool, 15),
  informTimeout: Fun([], Null),
  seeOutcome: Fun([Bool], Null),
  updateShip: Fun([], Null),
  getShip: Fun([], Array(Bool, 15)),
  getHand: Fun([], UInt),
  setPlayer: Fun([Bool], Null),
};
```
Then we'll define each individual participant's unique function, but also pass the generic ones to both.
```js
export const main = Reach.App(() => {

  const Alice = Participant("Alice", {
    ...common,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant("Bob", {
    ...common,
    acceptWager: Fun([UInt], Null),
  });
```

We're going to represent the cost of a wager with UInt (Unsigned Integer). Deployer will set this value after deploying the contract. We'll also represent the duration of a deadline with UInt.

Attacher has a function that lets them view and accept the wager set by the deployer. They'll have the option of refusing it and thus terminating the contract.

For the actual gameplay, both participants have 7 functions.
* `getBoard` for getting the gameboard information of each player, and it specifies the positions of the ships,
* `Ship` which is an array that contains booleans that signify the number of ships each player is allowed to have,
* `informTimeout` for letting them know when there is a timeout,
* `seeOutcome` for telling them the overall winner of all three stages,d
* `updateShip` for updateing the the ships object to show how many ships have been hit,
* `getShip` getting the updated ship value from the front-end,
* `getHand` for getting each players guess.

## Communication Construction
Now we can design the structure and flow of communication of our application.

```
1. Deployer sets wager, deploys contract and pays wager.
2. Attacher sees, accepts and pays wager.
3. Attacher and Deployer both get their board information.
4. Program checks for dishonest actors
5. In multiple iterations: 
  i.  Deployer plays hand and the program checks if it correlates with a ship position on the Attacher's board
  ii. Attacher confirms if Deployer's hand correlates and plays hand
  iii. Program checks if Attacher's hand correlates with ship position on Deployer's board
  iv. Program checks if all ships on any participant's board has been hit.
6. Program checks winner.
5. Program pays winner both wagers or refunds both players in the case of a draw.
```

The phrase "In multiple iterations" indicates a loop in the game that runs an unknown amount of times, until a conditionis met. With this information we can implement the logic for our contract.
Main logic of our contract should now look like:

```js
    const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };
  const countShips = (ships) => Array.count(ships, (item) => {
    return item == true;
  });
  const winner = (AliceShips, BobShips) => AliceShips[14] ? true : BobShips[14] ? false : true


  Alice.only(() => {
    const board = declassify(interact.getBoard());
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
    const shipAlice = declassify(interact.Ship);
  });

  Alice.publish(wager, deadline, shipAlice).pay(wager);
  commit();

  Bob.only(() => {
    const board = declassify(interact.getBoard());
    interact.acceptWager(wager);
  });

  /** 
   * Make sure neither parties have acces to each other board
   */
  unknowable(Bob, Alice(board));
  unknowable(Alice, Bob(board));


  Bob.pay(wager).timeout(relativeTime(deadline), () =>
    closeTo(Alice, informTimeout)
  );
  require(balance() == 2 * wager);

  var statement = [true, 0, 0, shipAlice, shipAlice];
  invariant(balance() == 2 * wager);
  while (statement[0]) {
    const [isTrue, aliceShipCount, BobShipsCount, A, B] = statement
    commit();

    // Get Alice's Hand
    Alice.only(() => {
      const handAlice = declassify(interact.getHand());
    });
    Alice.publish(handAlice);
    commit();

    // Bob Plays his Hand
    // Compare with bobs Board and check if it's been hit

    Bob.only(() => {
      const bobHand = declassify(interact.getHand());
      const BobVal = board[handAlice % 100] == 1;
      if (BobVal) {
        interact.updateShip();
      }
      const BobShips = declassify(interact.getShip());
      check(countShips(BobShips) <= BobShipsCount + 1, "Dishonest front")
    });
    Bob.publish(bobHand, BobShips);
    commit();

    // Alice Checks if the she has been hit and then publishes the result
    Alice.only(() => {
      const val = board[bobHand % 100] == 1;
      if (val) {
        interact.updateShip();
      }
      const AliceShips = declassify(interact.getShip());
      check(countShips(AliceShips) <= aliceShipCount + 1, "Dishonest front")

    });
    Alice.publish(AliceShips);

    const countBob = countShips(BobShips)
    const countAlice = countShips(AliceShips);

    statement = [
      AliceShips[14] || BobShips[14] ? false : true,
      countAlice,
      countBob,
      AliceShips, BobShips
    ]
    continue;
  }

  const [isTrue, aliceShipCount, BobShipsCount, AliceShips, BobShips] = statement

  const outcome = winner(AliceShips, BobShips);
  transfer(2 * wager).to(outcome ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
```

## Assertion Insertion
Due to simplicity of the program, there's no need for assertions in the code.

## Possible Additions
Our code works perfectly fine as it is now. But can be implemented and represented better by using APIs instead of Participants for the player interactions

## Testing 
We test our application by creating a file `index.mjs` in the same directory as the `index.rsh`
```bash
touch index.mjs
```
We define our test data to use for simulating user input and data
```js
export const Data = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
export const playerChoice = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8
];
```
On the Data array "0"s represent spaces on the board without ships and the "1"s represent ships.

The player choice array contains all the moves the test suite will guess on the board.

Now we run the tests below:
```js
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

export const Data = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
export const playerChoice = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8
];

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
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
    return  playerChoice[i%10]
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
```




## Interaction Introduction
Now we have a complete contract backend and test suite, now we can write the frontend. You can use any frontend library of your choice. In our case, we have chosen to use React.

NOTE: To fully utilize this section you need to have the repo locally [link](https://github.com/prince-hope1975/battleship-main)

In the React App navigate to ```battleship-main/src/factories/playerFactory.js```. We are defining the logic for the participants

```js
import Gameboard from "./gameboardFactory";
import * as backend from "../build/index.main.mjs";
import { loadStdlib} from "@reach-sh/stdlib";
/*
Helper Funtions
*/
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

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
/**
 * Participant classes
*/
class Player {
  constructor(name, acc) {
    this.name = name;
    this.ctc = null;
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
    if (this.name.toLowerCase() !== "computer") {
      alert("All systems go! go! go!, Fireeeeee");
    }
    const hand = await new Promise((resolveHandP) => {
      if ((this.name).toLowerCase() === "computer") {
        Waiter.callFn(true);
      }
      this.resolveHandP = resolveHandP;
      Fxn.setFn(resolveHandP);
    });
    return hand;
  }
  async waitTillHandGot() {
    const hand = await new Promise((resolveHandP) => {
      Waiter.setFn(resolveHandP);
    });
    return hand;
  }
  playHand(hand) {
    console.log("hand,", hand);
    Fxn.callFn(hand);
    if (this.name.toLowerCase() === "computer") {
      alert("Enemy has fired, we are sendig the intel to HQ\n Please do not shoot until instructed to")
    }
  }
  fireShot(location, gameboard) {
    if (gameboard.opponentBoard()[location] === "empty") {
      gameboard.receiveShot(location);
    }
  }
}

/**
 * Deployer class which inherits from general player class
 * */
export class Deployer extends Player {
  setWager(wager) {
    this.wager = wager;
    console.log(this);
  }
  async deploy(reach) {
    this.ctc = this.acc.contract(backend);
    this.wager = reach.parseCurrency(this.wager); // UInt
    this.deadline = {
      ETH: 10,
      ALGO: 100,
      CFX: 1000
    } [reach.connector]; // UInt
    backend.Alice(this.ctc, this);
    alert("Contract is being deployed... Please wait")
    const ctcInfoStr = JSON.stringify(await this.ctc.getInfo(), null, 2);
    console.log("info", ctcInfoStr);
    alert("Contract successfully deployed, Please wait for someone to attach")
    this.ctcInfoStr = ctcInfoStr;
  }
}

export class Attacher extends Player {
  acceptWager(wagerAtomic) {
    const wager = reach.formatCurrency(wagerAtomic, 4);
    console.log("Accepted Wager, ", wager);
  }

  async attach(ctcInfoStr) {
    this.ctc = this.acc.contract(backend, JSON.parse(ctcInfoStr));
    backend.Bob(this.ctc, this);
    await this.ctc.getInfo()
    alert("Contract has been sucessfully attached to, Please wait till you are given orders to fire")
  }
}

export default Player;
```
We'll navigate to the `battleship-main/src/components/game_window/GameWindow.js` which houses the  initial game logic
```js
import React, { useState,useContext, useEffect,useRef,useCallback,} from "react";
import Init from "./Init";
import GameSetup from "./GameSetup";
import GameStart from "./GameStart";
import WinnerScreen from "./WinnerScreen";
import { store } from "../../GameController";
import { MainWindow,VolumeContainer,} from "../styled_components/gameControllerStyles";
import music from "../../assets/sounds/music.mp3";
import backgroundSound from "../../assets/sounds/background_sound.mp3";
import fireShot from "../../assets/sounds/fire_shot.mp3";
import shotHit from "../../assets/sounds/shot_hit.mp3";
import shotMiss from "../../assets/sounds/shot_miss.mp3";
import VolumeOn from "../icons/VolumeOn";
import VolumeOff from "../icons/VolumeOff";

import secret from "../../secret";

/***
 * REACH
 */
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO-live"));

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);

export default function GameWindow() {
  const { state, dispatch } = useContext(store);
  const { timeline, winner } = state;
  const [dismount, setDismount] = useState(false);
  const [volume, setVolume] = useState(true);

  // pass to props to avoiding directly passing a setState function
  const setVolumeProps = (value) => {
    value
      ? (musicPlayer.current.volume = 0.5)
      : (musicPlayer.current.volume = 0);
    setVolume(value);
  };

  const musicPlayer = useRef();
  // I provide two sound players so sound effects can "overlap"
  const soundPlayer = useRef();
  const soundPlayer2 = useRef();

  // cancel animation coming into this component
  useEffect(() => {
    setDismount(false);
    console.log("hi");
  }, [setDismount]);

  useEffect(() => {
    (async () => {
      try {
        const newAccount = await reach.newAccountFromMnemonic(secret);
        console.log("newAccount", newAccount);

        dispatch({ type: "SET_ACC", payload: newAccount });
        dispatch({ type: "SET_BOB", payload: newAccount });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // to avoid passing a setState directly, pass this helper function
  const setDismountProp = (state) => {
    setDismount(state);
  };

  const playBgSound = useCallback(
    (sound, customVolume) => {
      if (volume) {
        const newVol = customVolume || 0.5;
        if (!musicPlayer.current.paused) musicPlayer.current.pause();
        musicPlayer.current.src =
          sound === "music"
            ? music
            : sound === "bgSound"
            ? backgroundSound
            : null;
        musicPlayer.current.load();
        musicPlayer.current.volume = newVol;
        musicPlayer.current.play();
      }
    },
    [volume]
  );

  const playSound = useCallback(
    (sound, customVolume) => {
      if (volume) {
        const newVol = customVolume || 0.5;
        let player = soundPlayer;
        if (!soundPlayer.current.paused) {
          player = soundPlayer2;
        }
        player.current.src =
          sound === "fireShot"
            ? fireShot
            : sound === "shotMiss"
            ? shotMiss
            : sound === "shotHit"
            ? shotHit
            : null;
        player.current.load();
        player.current.volume = newVol;
        player.current.play();
      }
    },
    [volume]
  );

  const checkIfMusicPaused = () => {
    return musicPlayer.current.paused;
  };

  const fadeOutMusic = () => {
    const fadeOut = setInterval(() => {
      if (musicPlayer.current.volume <= 0.04) {
        musicPlayer.current.volume = 0;
        clearInterval(fadeOut);
      } else {
        musicPlayer.current.volume = musicPlayer.current.volume - 0.03;
      }
    }, 30);
  };

  // conditionally render based on the app state "timeline"
  const renderChild = (timeline) => {
    return timeline === "init" ? (
      <Init
        playBgSound={playBgSound}
        checkIfMusicPaused={checkIfMusicPaused}
        dismount={dismount}
        setDismount={setDismountProp}
      />
    ) : timeline === "setup" ? (
      <GameSetup
        dismount={dismount}
        fadeOutMusic={fadeOutMusic}
        setDismount={setDismountProp}
      />
    ) : winner ? (
      <WinnerScreen playBgSound={playBgSound} />
    ) : !winner ? (
      <GameStart
        playSound={playSound}
        playBgSound={playBgSound}
        setDismount={setDismount}
      />
    ) : null;
  };

  return (
    <MainWindow>
      <VolumeContainer timeline={timeline}>
        {volume ? (
          <VolumeOn setVolume={setVolumeProps} />
        ) : (
          <VolumeOff setVolume={setVolumeProps} />
        )}
      </VolumeContainer>
      {renderChild(timeline)}
      <>
        <audio onEnded={() => musicPlayer.current.play()} ref={musicPlayer} />
        <audio ref={soundPlayer} />
        <audio ref={soundPlayer2} />
      </>
    </MainWindow>
  );
}

```
The frontend's structure is fairly complex so you'll have to properly go through the repository to get the pieces together.

## Discussion
Congrats for finishing this workshop. You implemented the gold rush game that runs on the blockchain yourself.

If you found this workshop rewarding please let us know on [the Discord Community](https://discord.gg/AZsgcXu).

Thanks!!