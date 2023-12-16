const mongoose = require('mongoose');

const connectDB = (uri) => {
	return mongoose.connect(uri).then(() => {
		console.log(`connection successfull.`);
	}).catch((err) => console.log(`no connection`));
}

module.exports = connectDB;