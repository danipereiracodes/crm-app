const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const url =
	"https://53423326-448f-4a94-856a-85ed1a1d610b-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
	"AstraCS:KminqMMKcJyEjNswooOcIWfM:702ae7f74ce57f40c5d9811aa7e5a483df8e03b7e1430d32e804af0586d2e437";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/tickets", async (req, res) => {
	const formData = req.body.formData;

	const options = {
		method: "GET",
		headers: {
			Accepts: "application/json",
			"X-Cassandra-Token": token,
		},
		data: formData,
	};

	try {
		const response = await axios(`${url}?page-size=20`, options);
		res.status(200).json(response.data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
});

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
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
});

app.delete("/tickets/:id", async (req, res) => {
	const documentId = req.params.id;

	const options = {
		method: "DELETE",
		header: {
			Accepts: "application/json",
			"X-Cassandra-Token": token,
		},
	};

	try {
		const response = await axios(`${url}/${documentId}`, options);
		res.status(200).json(response.data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
});

app.listen(PORT, () => console.log("Server running on PORT", +PORT));
