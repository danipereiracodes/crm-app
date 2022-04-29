const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.post("/tickets", async (req, res) => {
	const formData = req.body.formData;

	const options = {
		method: "POST",
		headers: {
			Accepts: "application/json",
			"X-Cassandra-Token": process.env.TOKEN,
			"Content-Type": "application/json",
		},
		data: formData,
	};
	try {
		const response = await axios(process.env.URL, options);
		res.status(200).json(response.data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error });
	}
});

app.listen(PORT, () => console.log("Server running on PORT", +PORT));
