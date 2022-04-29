const Priority = ({ priority }) => {
	console.log("prio", priority);
	return (
		<div className="priority-display">
			<div className="star-container">
				<h3>{priority <= 1 ? "★" : ""}</h3>
				<h3>{priority === 2 ? "★★" : ""}</h3>
				<h3>{priority === 3 ? "★★★" : ""}</h3>
				<h3>{priority === 4 ? "★★★★" : ""}</h3>
				<h3>{priority === 5 ? "★★★★★" : ""}</h3>
			</div>
		</div>
	);
};

export default Priority;
