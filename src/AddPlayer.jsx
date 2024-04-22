import { useState } from 'react'

function AddPlayer (props) {

	const [inputNewPlayer, setInputNewPlayer] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Add Player");
		props.updatePlayers(inputNewPlayer)
		setInputNewPlayer("");
	}
	return (
		<form onSubmit = {handleSubmit}>
			{inputNewPlayer} <br />
			<input type="text" value={inputNewPlayer} onChange={(e) => setInputNewPlayer(e.target.value)}/>
			<button>Add player</button>
		</form>
	)
}

export default AddPlayer;