import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import Status from "../components/Status";
import Priority from "../components/Priority";
import Progress from "../components/Progress";
import DeleteBlock from "../components/DeleteBlock";

const Ticket = ({ color, ticket }) => {
	return (
		<div className="ticket-color">
			<div className="ticket-card">
				<Link to={`/ticket/${ticket.documentId}`} id="link">
					<h3>{ticket.title}</h3>
					<Avatar ticket={ticket} />
					<Status status={ticket.status} />
					<Priority priority={ticket.priority} />
					<Progress progress={ticket.progress} />
				</Link>
				<DeleteBlock />
			</div>
		</div>
	);
};

export default Ticket;
