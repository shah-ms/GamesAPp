import React, {useState} from 'react';
import './Games.css';
import StepsDisplay from './StepsDisplay';

function Games(props) {
    const [gameSelected, changeGame] = useState('');
    const [stepSelected, setStep] = useState('');

    function setGame(e) {
        changeGame(e.target.id);
        setStep('');
    }

    return (
        <div class="gameButtons">
        
            <button id="Dota" className={gameSelected==="Dota" ? "activeGame" : "inactiveGame"} onClick={(e) => setGame(e)}>
                DOTA
            </button>

            <button id="Pubg" className={gameSelected==="Pubg" ? "activeGame" : "inactiveGame"} onClick={(e) => setGame(e)}>
                PUBG
            </button>

            <button id="Cs" className={gameSelected==="Cs" ? "activeGame" : "inactiveGame"} onClick={(e) => setGame(e)}>
                CS
            </button>

            <button id="Tod" className={gameSelected==="Tod" ? "activeGame" : "inactiveGame"} onClick={(e) => setGame(e)}>
                TOD
            </button>
            
            <div>
                <StepsDisplay game={gameSelected} step={stepSelected} changeStep={setStep}/>
            </div>
        
        </div>
    );
}

export default Games;