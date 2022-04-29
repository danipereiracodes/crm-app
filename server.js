const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

const url =
	"https://53423326-448f-4a94-856a-85ed1a1d610b-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";

const token =
	"AstraCS:PGoDGqcaUQHyINyOWCjIYgOu:84da8fac2f60923ffcc20fc031aa170dd7b225c883c0f6bb35539497052eac2f";

app.post("/tickets", async (req, res) => {
	const formData = req.body.formData;

	const options = {
		method: "POST",
		headers: {
			Accepts: "application/json",
			"X-Cassandra-Token": token,
			"Content-Type": "application/json",
		},
		data: formData,
	};
	try {
		const response = await axios(url, options);
		res.status(200).json(response.data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error });
	}
});

app.listen(PORT, () => console.log("Server running on PORT", +PORT));
