const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Connection successful!'))
	.catch((e) => {
		console.error(
			'!!! Error connecting to database !!!',
			'\n\n=======================Problem=======================\n',
			e.message
		);
	});

app.listen(5000, () => {
	console.log('Server running...');
});
