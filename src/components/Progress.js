const Progress = ({ progress }) => {
	return (
		<div className="progress-display">
			<div className="progress-bar">
				<div style={{ width: progress + "%" }} className="progress-indicator">
					{progress + "%"}
				</div>
			</div>
		</div>
	);
};

export default Progress;
