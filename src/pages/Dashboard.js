import Ticket from "../components/Ticket";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import CategoriesContext from "../context";

const Dashboard = () => {
	const [tickets, setTickets] = useState(null);
	const { categories, setCategories } = useContext(CategoriesContext);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get("http://localhost:8000/tickets");
			const dataObject = response.data.data;
			const arrayOfKeys = Object.keys(dataObject);
			const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
			const formattedArray = [];
			arrayOfKeys.forEach((key, index) => {
				const formattedData = { ...arrayOfData[index] };
				formattedData["documentId"] = key;
				formattedArray.push(formattedData);
			});
			console.log(arrayOfKeys);
			console.log(arrayOfData);
			setTickets(formattedArray);
		};

		getData();
	}, []);

	const uniqueCategories = [
		...new Set(tickets?.map(({ category }) => category)),
	];

	useEffect(() => {
		setCategories([...new Set(tickets?.map(({ category }) => category))]);
	}, [tickets]);

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
