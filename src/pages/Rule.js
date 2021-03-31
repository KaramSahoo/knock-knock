import React from 'react'

const Rule = () => {
    const rowStyle = {
        borderRadius: '8px',
        padding: '10px 0',
        width: '70%',
        borderBottom: '1px solid white',
        textAlign: 'center',
        margin: '10px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)'
    }
    return (
        <div className='holder'>
            <p className='rule-row' style={rowStyle}>Questions based on aptitude, mathematical and logical reasoning with points allotted. Participants scoring maximum scores with less time taken are declared as winner.</p>
            <p className='rule-row' style={rowStyle}>Exclusively for first years</p>
            <p className='rule-row' style={rowStyle}>Scores will be allotted for questions with time factor i.e., if a participant completes early, he/she will have preference in the leaderboard</p>
            <p className='rule-row' style={rowStyle}>2 Day event</p>
            <p className='rule-row' style={rowStyle}>Total no. of questions - 15 each day</p>
            <p className='rule-row' style={rowStyle}>Time - 60 minutes without auto submission if you fail to end in time.</p>
            <p className='rule-row' style={rowStyle}>Marks Alloted +3</p>
            <p className='rule-row' style={rowStyle}>Negative Marking -1</p>
        </div>
    )
}

export default Rule
