"reach 0.1";

// Get the board from each user
// Iterate through each users turn and try and let them try to hit the other user
// if it hit give them another chance to hit
// once all a users box has been hit stop the game and declare the winner
//


const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (handAlice, handBob) => (handAlice + (4 - handBob)) % 3;

assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

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
  sendToFront: Fun([Array(UInt, 10)], Null),
  Ship: Array(Bool, 15),
  updateShip:Fun([], Null)
};
const Player = {
  // ...hasRandom,
  // getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...Player,
    ...common,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant("Bob", {
    ...common,
    ...Player,
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
