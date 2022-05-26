"reach 0.1";

// Get the board from each user
// Iterate through each users turn and try and let them try to hit the other user
// if it hit give them another chance to hit
// once all a users box has been hit stop the game and declare the winner



const common = {
  getBoard: Fun([], Array(UInt, 100)),
  Ship: Array(Bool, 15),
  updateShip: Fun([], Null),
  seeOutcome: Fun([Bool], Null),
  informTimeout: Fun([], Null),
  getShip: Fun([], Array(Bool, 15)),
  getHand: Fun([], UInt),
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