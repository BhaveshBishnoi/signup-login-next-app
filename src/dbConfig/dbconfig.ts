import mongoose from 'mongoose';

export async function DbConnection() {
	try {
		mongoose.connect(process.env.MONGO_URI!);
		const connection = mongoose.connection;

		connection.on('connected', () => {
			console.log('Great! MongoDb is connected');
		});

		connection.on('error', (err) => {
			console.log('MongoDB connected ERROR. ' + err);
			process.exit();
		});
	} catch (error) {
		console.log('Something went wrong! ' + error);
	}
}
