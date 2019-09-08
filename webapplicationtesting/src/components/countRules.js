import React, { useState } from 'react';
import { useCount } from '../hooks/useCount'
import Display from './display';
import Dashboard from './dashboard';

function CountRules() {

    const [ballCount, setBallCount] = useState(0);
    if (ballCount > 4) {
        setBallCount(0);
    }

    const [strikeCount, setStrikeCount] = useState(0);
    if (strikeCount > 3){
        setStrikeCount(0);
    }
    const [hitCount, setHitCount] = useState(0);
    
    const [foulCount, setFoulCount] = useState(0);

    const handleBallCount = () => {
        console.log(ballCount)
        setBallCount(ballCount + 1)
    }

    const handleStrikeCount = () => {
        setStrikeCount(strikeCount + 1)
    }

    const handleHitClick = () => {
        setHitCount(hitCount + 1);
        setStrikeCount(0);
        setBallCount(0);
    } 

    const handleFoulCount = () => {
        setFoulCount(foulCount + 1);
        if (strikeCount === 0) {
            setStrikeCount(strikeCount + 1)
        } else if(strikeCount === 1) {
            setStrikeCount(2)
        }
    }



    return(
        <div className='container'>
            <section className="scoreboard">
                <Display 
                ballCount={ballCount}
                strikeCount={strikeCount}
                />
                <div className='count ball'>
                    <p>Balls: {ballCount}</p>
                {/* <button onClick={() => setBallCount(ballCount + 1)}>Add Ball</button> */}
                </div>
                <div className="count strike">
                    <p>Strikes: {strikeCount}</p>
                    {/* <button onClick={() => setStrikeCount(strikeCount + 1)}>Add Strike</button> */}
                </div>
                <div className="count hit">
                    <p>Hits: {hitCount}</p>
                    {/* <button onClick={handleHitClick}>Add Hit</button> */}
                </div>
                <div className="count foul">
                    <p>Fouls: {foulCount}</p>
                    {/* <button onClick={handleFoulCount}>Add Foul</button> */}
                </div>
                <Dashboard
                handleBallCount={handleBallCount}
                handleStrikeCount = {handleStrikeCount}
                handleHitClick={handleHitClick} 
                handleFoulCount={handleFoulCount}/>
            </section>
        </div>
    )
}

export default CountRules;