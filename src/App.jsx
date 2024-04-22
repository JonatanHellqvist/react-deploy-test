import { useState } from 'react'

import './App.css'
import ShowPlayers from './ShowPlayers'
import AddPlayer from './AddPlayer'

function App() {
 
  const [players, setPlayers] = useState([]) //alltid const för states
  //  {id:1, player: "Player1", points: 0},
  //  {id:2, player: "Player2", points: 0},
  //  {id:3, player: "Player3", points: 0} 

  const updatePlayers = (getPlayer) => {
    console.log("Hämta players", getPlayer);
    setPlayers([...players,{id: players.length +1, player:getPlayer, points: 0}])
  }
 
 const addPoint = (id) => {
    const updatedPlayers = players.map(player => {
      if (player.id === id) {
        return {...player,points: player.points +1};
      }
      return player;
    });
    setPlayers(updatedPlayers);
 }
 const removePoint = (id) => {
  const updatedPlayers = players.map(player => {
    if (player.id === id) {
      return {...player,points: player.points -1};
    }
    return player;
  });
  setPlayers(updatedPlayers);
 }

 const sortedPlayers = [...players].sort((a,b) => b.points - a.points); 

  return (
    <div>
      <AddPlayer updatePlayers={updatePlayers}/>
      {sortedPlayers.map(player => (
        <ShowPlayers key={player.id} player = {player} addPoint={addPoint} removePoint={removePoint}/>
        
      ))}
    </div>
  )
}

export default App
