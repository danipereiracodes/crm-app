import Ticket from "../components/Ticket";

const Dashboard = () => {
	const tickets = [
		{
			category: "Work",
			color: "red",
			title: "Task number 1",
			owner: "Dani Pereira",
			avatar:
				"https://gravatar.com/avatar/b43cd049ac5ec1a6b9cf1e742da1891e?s=400&d=robohash&r=x",
			status: "done",
			priority: 5,
			progress: 40,
			description: "Lorem Ipsum por la gloria de tu padre",
			timestamps: "2022/02/11T:07:36:17+0000",
		},
		{
			category: "Work",
			color: "blue",
			title: "Task number 2",
			owner: "Silvia Balsa",
			avatar:
				"https://gravatar.com/avatar/3e792514cbcf08c79032cb49c5c213f8?s=400&d=robohash&r=x",
			status: "stuck",
			priority: 3,
			progress: 60,
			description: "Lorem Ipsum por la gloria de tu padre",
			timestamps: "2022/02/11T:07:45:17+0000",
		},
		{
			category: "Home stuff",
			color: "orange",
			title: "Task number 3",
			owner: "Dani Pereira",
			avatar:
				"https://gravatar.com/avatar/b43cd049ac5ec1a6b9cf1e742da1891e?s=400&d=robohash&r=x",
			status: "in-progress",
			priority: 1,
			progress: 10,
			description: "Lorem Ipsum por la gloria de tu padre",
			timestamps: "2022/03/11T:07:36:17+0000",
		},
	];

	const uniqueCategories = [
		...new Set(tickets?.map(({ category }) => category)),
	];

	console.log("unique", uniqueCategories);

	return (
		<div className="dashboard">
			<h1>
				My tasks
				<div className="ticket-container">
					{tickets &&
						uniqueCategories?.map((uniqueCategory, categoryIndex) => (
							<div key={categoryIndex}>
								<h3>Category: {uniqueCategory}</h3>
								{tickets
									?.filter((ticket) => ticket.category === uniqueCategory)
									.map((filteredTicket, _index) => (
										<Ticket
											key={_index}
											id={_index}
											color={filteredTicket.color}
											ticket={filteredTicket}
										/>
									))}
							</div>
						))}
				</div>
			</h1>
		</div>
	);
};

export default Dashboard;
