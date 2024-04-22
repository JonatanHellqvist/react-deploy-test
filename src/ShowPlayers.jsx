function ShowPlayer (props) {

	return(
		<div>
			{props.player.player}
			<p onClick={() => props.addPoint(props.player.id)}>+</p>
			<p> {props.player.points}</p>
			<p onClick={() => props.removePoint(props.player.id)}>-</p>	
		</div>
	)

}

export default ShowPlayer;