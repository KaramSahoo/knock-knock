import React, { useState, useEffect } from 'react'
import Firebase from '../firebase.js'
import './Leaderboard.css'
import _ from 'lodash';

function Leaderboard() {
    const database = Firebase.database();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const secondDay = new Date('April 3, 2021 15:00:00 GMT+0530').getTime();
        const now = new Date().getTime();
        if (now > secondDay) {
            const rootRef2 = database.ref('/scores/day2/');
            var tutorials = [];
            rootRef2.on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var data = childSnapshot.val();
                    tutorials.push({ key: key, name: data.name, score: data.score });
                });
            });
            var uniqueNames = _.uniqBy(tutorials, 'name')
            setPlayers(_.orderBy(uniqueNames, 'score', 'desc'));
        }
        else {
            const rootRef1 = database.ref('/scores/day1/');
            var tutorials = [];
            rootRef1.on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var data = childSnapshot.val();
                    tutorials.push({ key: key, name: data.name, score: data.score });
                });
            });
            var uniqueNames = _.uniqBy(tutorials, 'name')
            setPlayers(_.orderBy(uniqueNames, 'score', 'desc'));
        }
    }, [])

    // console.log(players);

    return (
        <div className='holder'>
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                top: '0',
                alignItems: 'center',
                justifyContent: 'center',
                width: '70%'
            }}>
                <h2 id='leaderboard'>Leaderboard</h2>
                <div className='player--container'>
                    {players.map(player => {
                        return (
                            <div className='playerRow'>
                                <p>{player.name}</p>
                                <p>{player.score}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
