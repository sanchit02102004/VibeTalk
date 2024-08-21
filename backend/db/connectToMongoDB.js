import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		console.log("Connected to MongoDB");
		await mongoose.connect("mongodb+srv://sanchitgangwar2004:1234@cluster0.ce0b7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
