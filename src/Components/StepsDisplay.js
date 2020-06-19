import React, { useState } from 'react';
import Steps from './Steps';
import './StepsDisplay.css';

function StepsDisplay(props) {
    let games = Object.keys(Steps);
    let steps = [];
    games.map(game => {
        if(game === props.game) {
            steps = Steps[game];
        }
    });

    return (
        <div>
            <div className="stepsDiv">
                <table>
                    <tbody>
                        <tr>
                            <th>Steps</th>
                        </tr>

                        {steps.map((step, index) => (<tr key={index}>
                            <td><button id={index} className={props.steps === step ? "activeStep" : "inactiveStep"} onClick={() => props.changeStep(step)}> 
                            {step} </button></td></tr>
                        ))}

                    </tbody>
                </table>
            </div>

            <div className="display">
                <table>
                    <tr>
                        <th></th>
                        <th>Display</th>
                    </tr>
                    
                    <tr>
                        <td><h3>Game Selected :</h3></td>
                        <td><h3>{props.game}</h3></td> 
                    </tr>
                    <tr>
                        <td><h3>Step Selected :</h3></td>
                        <td><h3>{props.step}</h3></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default StepsDisplay;