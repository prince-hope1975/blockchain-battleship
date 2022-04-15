"reach 0.1";

// Get the board from each user
// Iterate through each users turn and try and let them try to hit the other user
// if it hit give them another chance to hit
// once all a users box has been hit stop the game and declare the winner
//

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (handAlice, handBob) => (handAlice + (4 - handBob)) % 3;
const win = (alice, bob) => (alice ? 1 : bob ? 1 : 0);

forall(UInt, (handAlice) =>
  forall(UInt, (handBob) => assert(isOutcome(winner(handAlice, handBob))))
);

forall(UInt, (hand) => assert(winner(hand, hand) == DRAW));
function didShipGetHit(board, position) {
  if (board[position[0]][position[1]] == 1) {
    return true;
  } else {
    return false;
  }
}
const IsSunk = (arr) => {
  return Array.any(arr, (val) => val == true);
};
const common = {
  getBoard: Fun([], Array(Array(UInt, 10), 10)),
  Ship: Array(Bool, 15),
  updateShip: Fun([], Null),
  seeOutcome: Fun([Bool], Null),
  informTimeout: Fun([], Null),
  getShip: Fun([], Array(Bool, 15)),
  print: Fun([Bool], Null),
  getHand: Fun([], Array(UInt, 2)),
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

  var statement = Array.includes(shipAlice, false);
  invariant(balance() == 2 * wager);
  while (statement) {
    commit();

    Alice.only(() => {
      const handAlice = declassify(interact.getHand());
    });
    Alice.publish(handAlice);
    // commit()

    var turn = true;
    invariant(balance() == 2 * wager);
    while (turn) {
      commit();
      Bob.only(() => {
        const bobHand = declassify(interact.getHand());
        const [leftBob, rightBob] = bobHand;
      });
      Bob.publish(leftBob, rightBob);
      commit();

      Alice.only(() => {
        const val = board[leftBob % 10][rightBob % 10] == 1;
        interact.print(val);
        if (val) {
          interact.updateShip();
        }
      });
      Alice.publish(val);
      turn = val;
      continue;
    }

    var bobTurn = true;
    invariant(balance() == 2 * wager);
    while (bobTurn) {
      commit();
      Alice.only(() => {
        const aliceHand = declassify(interact.getHand());
        const [leftAlice, rightAlice] = aliceHand;
      });
      Alice.publish(leftAlice, rightAlice);
      commit();

      Bob.only(() => {
        const board = declassify(interact.getBoard());
        const val = board[leftAlice % 10][rightAlice % 10] == 1;
        interact.print(val);
        if (val) {
          interact.updateShip();
        }
      });
      Bob.publish(val);
      bobTurn = val;
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

    statement = AliceShips[14] || BobShips[14] ? false : true;
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
  // assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * wager).to(outcome ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
