import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesContext from "../context";

const TicketPage = ({ editMode }) => {
	let { id } = useParams();

	const [formData, setFormData] = useState({
		status: "not started",
		progress: 0,
		timestamp: new Date().toISOString(),
	});
	const navigate = useNavigate();
	const { categories, setCategories } = useContext(CategoriesContext);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (editMode) {
			const response = await axios.put(`http://localhost:8000/tickets/${id}`, {
				data: formData,
			});
			const success = response.status === 200;
			if (success) {
				navigate("/");
			}
		}

		if (!editMode) {
			const response = await axios.post("http://localhost:8000/tickets", {
				formData,
			});

			const success = response.status === 200;
			if (success) {
				navigate("/");
			}
		}
	};

	const handleChange = (e) => {
		console.log("changing");
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="ticket">
			<h1>{editMode ? "Update your ticket" : "Create your ticket"}</h1>
			<div className="ticket-container">
				<form onSubmit={handleSubmit}>
					<section>
						<label htmlFor="title">Title</label>
						<input
							id="title"
							name="title"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.title}
						/>
						<label htmlFor="description">Description</label>

						<input
							id="description"
							name="description"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.description}
						/>
						<label>Category</label>
						<select
							name="category"
							value={formData.category}
							onChange={handleChange}
						>
							{categories?.map((category, _index) => (
								<option key={_index} value={category}>
									{category}
								</option>
							))}
						</select>

						<label htmlFor="new-category">New Category</label>

						<input
							id="new-category"
							name="category"
							type="text"
							onChange={handleChange}
							value={formData.category}
						/>
						<label>Priority</label>
						<div className="multiple-input-container">
							<input
								id="priority-1"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={1}
								checked={formData.priority == 1}
							/>
							<label htmlFor="priority-1">1</label>

							<input
								id="priority-2"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={2}
								checked={formData.priority == 2}
							/>
							<label htmlFor="priority-1">2</label>

							<input
								id="priority-3"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={3}
								checked={formData.priority == 3}
							/>
							<label htmlFor="priority-1">3</label>

							<input
								id="priority-4"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={4}
								checked={formData.priority == 4}
							/>
							<label htmlFor="priority-1">4</label>

							<input
								id="priority-5"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={5}
								checked={formData.priority == 5}
							/>
							<label htmlFor="priority-1">5</label>
						</div>

						{editMode && (
							<>
								<input
									type="range"
									id="progress"
									name="progress"
									value={formData.value}
									min={0}
									max={100}
									onChange={handleChange}
								/>
								<label htmlFor="progress">Progress</label>

								<label>Status</label>
								<select
									name="status"
									value={formData.value}
									onChange={handleChange}
								>
									<option select={formData.status === "done"} value="done">
										Done
									</option>
									<option select={formData.status === "stuck"} value="stuck">
										stuck
									</option>
									<option
										select={formData.status === "in-progess"}
										value="in-progess"
									>
										in progress
									</option>
									<option
										select={formData.status === "not-started"}
										value="not-started"
									>
										Not started
									</option>
								</select>
							</>
						)}
						<button type="submit" />
					</section>
					<section>
						<label htmlFor="owner">Owner</label>
						<input
							id="owner"
							name="owner"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.owner}
						/>
						<input
							id="avatar"
							name="avatar"
							type="url"
							onChange={handleChange}
							value={formData.avatar}
						/>
						<div className="img-preview">
							{formData.avatar && (
								<img src={formData.avatar} alt="Just an image for avatar"></img>
							)}
						</div>
					</section>
				</form>
			</div>
		</div>
	);
};

export default TicketPage;
