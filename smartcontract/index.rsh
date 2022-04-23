"reach 0.1";

// Get the board from each user
// Iterate through each users turn and try and let them try to hit the other user
// if it hit give them another chance to hit
// once all a users box has been hit stop the game and declare the winner
//

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (handAlice, handBob) => (handAlice + (4 - handBob)) % 3;

forall(UInt, (handAlice) =>
  forall(UInt, (handBob) => assert(isOutcome(winner(handAlice, handBob))))
);

forall(UInt, (hand) => assert(winner(hand, hand) == DRAW));

const common = {
  getBoard: Fun([], Array(UInt, 100)),
  Ship: Array(Bool, 15),
  updateShip: Fun([], Null),
  seeOutcome: Fun([Bool], Null),
  informTimeout: Fun([], Null),
  getShip: Fun([], Array(Bool, 15)),
  getHand: Fun([], UInt),
  setPlayer: Fun([Bool], Null),
};

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
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const board = declassify(interact.getBoard());
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
    const shipAlice = declassify(interact.Ship);
  });

  Alice.publish(wager, deadline, shipAlice).pay(wager);
  commit();
  unknowable(Bob, Alice(board));

  Bob.only(() => {
    interact.updateShip();
    const _board = interact.getBoard();
    interact.acceptWager(wager);
  });
  Bob.pay(wager).timeout(relativeTime(deadline), () =>
    closeTo(Alice, informTimeout)
  );
  require(balance() == 2 * wager);

  var statement = {isTrue: true, shipsBob:0, shipsAlice:0};
  invariant(balance() == 2 * wager);
  while (statement["isTrue"]) {
    commit();
    // Get Alice's Hand
    Alice.only(() => {
      const handAlice = declassify(interact.getHand());
    });
    Alice.publish(handAlice);
    commit();

    // Bob Plays his Hand
    Bob.only(() => {
      const bobHand = declassify(interact.getHand());
    });
    Bob.publish(bobHand);
    commit();

    // Alice Checks if the she has been hit and then publishes the result
    Alice.only(() => {
      const val = board[bobHand % 100] == 1;
      if (val) {
        interact.updateShip();
      }
      const AliceShips = declassify(interact.getShip());
    });
    Alice.publish(AliceShips);
    commit();
    // Compare with bobs Board and check if it's been hit
    Bob.only(() => {
      const board = declassify(interact.getBoard());
      const BobVal = board[handAlice % 100] == 1;
      if (BobVal) {
        interact.updateShip();
      }
      const BobShips = declassify(interact.getShip());
    });

    // Checking the number of times the ship object was updated in the last update
    Bob.publish(BobShips);
    const countBob =Array.count(BobShips,(item)=>{
      return item == true
    })
    const countAlice =Array.count(BobShips,(item)=>{
      return item == true
    })

    // Checking if the front end cheated and provided dishonest values
    possible(countBob<=statement["shipsBob"]+1 && countAlice<= statement["shipsAlice"]+1, "You are dishonest")
    statement = {
      isTrue: AliceShips[14] || BobShips[14] ? false : true,
      shipsAlice: countAlice,
      shipsBob: countBob,
    };
    continue;
  }
  commit();

  Bob.only(() => {
    const BobShips = declassify(interact.getShip());
  });
  Bob.publish(BobShips);
  commit();

  Alice.only(() => {
    const AliceShips = declassify(interact.getShip());
  });
  Alice.publish(AliceShips);

  const outcome = AliceShips[14] ? true : BobShips[14] ? false : true;
  transfer(2 * wager).to(outcome ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
