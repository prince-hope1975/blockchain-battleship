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
const didShipGetHit = (board, position) => {
  if (board[position[0]][position[1]] == 1) {
    return true;
  } else {
    return false;
  }
};
const common = {
  getBoard: Fun([], Array(Array(UInt, 10), 10)),
  Ship: Array(Bool, 15),
  updateShip: Fun([], Null),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  seeShip: Fun([Array(Bool, 15)], Null),
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
    const _board = interact.getBoard()
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
      const ship = declassify(interact.Ship);
      interact.seeShip(ship);
      interact.updateShip();
      interact.seeShip(ship);
  });

  Alice.publish(wager, deadline).pay(wager);
  commit();

  Bob.only(() => {
    interact.updateShip()
    const _board = interact.getBoard()
    interact.acceptWager(wager);
  });
  Bob.pay(wager).timeout(relativeTime(deadline), () =>
    closeTo(Alice, informTimeout)
  );

  require(balance() == 2 * wager );

 const  outcome =1
  // assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
