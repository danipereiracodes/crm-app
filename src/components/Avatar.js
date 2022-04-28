import blankavatar from "../images/blank.png";

const Avatar = ({ ticket }) => {
	console.log(ticket);
	return (
		<div className="avatar-container">
			<div className="image-container">
				<img
					src={ticket.avatar ? ticket.avatar : blankavatar}
					alt={`Photo of ${ticket.owner}`}
				/>
			</div>
		</div>
	);
};

export default Avatar;
