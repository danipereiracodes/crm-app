import Ticket from "./Ticket";

const Status = ({ status }) => {
	const getStatusColor = (status) => {
		let color;
		switch (status) {
			case "done":
				color = "green";
				break;
			case "in-progress":
				color = "orange";
				break;
			case "stuck":
				color = "red";
				break;
			default:
				color = "blue";
		}

		return color;
	};

	return (
		<div
			className="status-display"
			style={{ backgroundColor: getStatusColor(status) }}
		>
			{status}
		</div>
	);
};

export default Status;
