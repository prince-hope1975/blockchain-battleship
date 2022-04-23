import React, { useState, useContext } from 'react';
import Player from '../../factories/playerFactory';
import { Deployer,Attacher } from '../../factories/playerFactory';
import {
	InitWindow,
	PlayerForm,
} from '../styled_components/gameControllerStyles';
import { store } from '../../GameController';
import { loadStdlib } from '@reach-sh/stdlib';



const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
function Init({ setDismount, dismount, playBgSound, checkIfMusicPaused }) {
	const { dispatch, state } = useContext(store);
	const {ctcAlice, ctcBob} = state

	const [name, setName] = useState('');
	const [error, setError] = useState('');
	const [wager, setWager] = useState(0)

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleFocus = () => {
		if (checkIfMusicPaused()) {
			playBgSound('music');
		}
	};
	 const tryToFund = async (...acc) => {
     acc.forEach(async (single_acc) => {
       const bool = await reach.canFundFromFaucet(single_acc);
       try {
         if (bool) {
           await reach.fundFromFaucet(single_acc);
         } else {
           throw 43;
         }
       } catch (error) {
        
         console.error(error);
       }
     });
   };

	const handleSubmit = async(e) => {
		// do not refresh page
		e.preventDefault();

		// remove whitespace, reject space-only names
		// this does nothing for this function, only if there is an error
		// and needs to rerender. the setState would occur after this function completed
		setName(name.trim());

		// can't do if(!name) because setName hasn't yet updated
		if (!name.trim()) {
			setError('Name required');
			return;
		} else if (name.length > 20) {
			setError('Name is too long');
			return;
		} else {
			//remove the error if they enter a valid name after an invalid one
			setError('');
		}
		 


		await tryToFund(ctcAlice, ctcBob)
		const human = new Deployer(name.trim(), ctcAlice, {dispatch, state});
		human.setWager(wager)
		
		const computer = new Attacher('Computer', ctcBob, {dispatch, state});
		computer.acceptWager(wager)
		dispatch({ type: 'SET_PLAYERS', payload: { human, computer } });

		// this allows for the component to render with
		// the fade out animation into the next app state
		setDismount(true);
	};
	const handleWager = (e)=> setWager(e.target.value)

	// this triggers if the component is fading out into next app state
	const handleAnimationEnd = () => {
		if (dismount) dispatch({ type: 'SET_TIMELINE', payload: 'setup' });
	};
  const connectWallet = async () =>{
        const acc = await reach.getDefaultAccount();
        dispatch({ type: "SET_ACC", payload: acc });
        

  }

	return (
    <InitWindow>
      <PlayerForm
        style={{ animation: dismount ? "fadeout 1.5s" : "fadein 6s ease-in" }}
        onSubmit={handleSubmit}
        onAnimationEnd={handleAnimationEnd}
      >
        <label htmlFor="name">Enter player name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Battleship combatant"
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="off"
          value={name}
        />
        <span style={{ marginTop: "20px" }}>Wager Amount:</span>
        <input
          required
          type="number"
          name="name"
          id="name"
          placeholder="Wager Amount"
          onChange={handleWager}
          onFocus={handleFocus}
          autoComplete="off"
          value={wager}
        />

        <span style={{ marginTop: "20px" }}>Use Default Account <br/>Or</span>
        <input type="button" onClick={connectWallet} value={"Connect Wallet"}/>
        {/* <WalletSelector returnWallet={returnWallet} /> */}
        {/* displays errors if name is invalid */}

        <p style={{ color: "red" }}>{error}</p>
        <button type="submit">Start game</button>
      </PlayerForm>
    </InitWindow>
  );
}

export default Init;
