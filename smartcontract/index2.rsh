
"reach 0.1";

// Get the board from each user
// Iterate through each users turn and try and let them try to hit the other user
// if it hit give them another chance to hit
// once all a users box has been hit stop the game and declare the winner
//
const didShipGetHit = (board, position) => {
  if (board[position[0]][position[1]] == 1) {
    return true;
  } else {
    return false;
  }
};
const common = {
  getBoard: Array(Array(UInt, 10), 10),
  informTimeout: Fun([], Null),
  sendToFront: Fun([Array(UInt, 10)], Null),
  Ship: Array(Bool, 15),
};
export const main = Reach.App(
  {},
  [
    Participant("Alice", {
      ...common,
      amt: UInt,
      pass: UInt,
      wager: UInt,
      deadline: UInt,
    }),
    Participant("Bob", {
      ...common,
      getPass: Fun([], UInt),
      sendToFront: Fun([Array(UInt, 10)], Null),
      Ship: Array(Bool, 15),
      acceptWager: Fun([UInt], Null),
    }),
  ],
  (Alice, Bob) => {
    // init();

    const informTimeout = () => {
      each([Alice, Bob], () => {
        interact.informTimeout();
      });
    };

    Alice.only(() => {
      const wager = declassify(interact.wager);
      const deadline = declassify(interact.deadline);
    });

    Alice.publish(wager, deadline).pay(wager);
    commit();

    Bob.only(() => {
      interact.acceptWager(wager);
    });
    Bob.pay(wager).timeout(relativeTime(deadline), () =>
      closeTo(Alice, informTimeout)
    );
    commit();
    // !Issues arrise from here onward
    Alice.only(() => {
      const _pass = interact.pass;
      const board = declassify(digest(interact.getBoard));
      const [amt, passDigest] = declassify([interact.amt, digest(_pass)]);
    });
    Alice.publish(passDigest, amt).pay(amt);
    commit();

    unknowable(Bob, Alice(_pass));
    Bob.only(() => {
      const pass = declassify(interact.getPass());
      assume(passDigest == digest(pass));
    });
    Bob.publish(pass);
    require(passDigest == digest(pass));
    transfer(amt).to(Bob);
    commit();
    // invariant();
    // invariant(balance() == 2 * wager);
    //  while()
    transfer(wager * 2).to(Alice);
    commit();

    exit();
  }
);
