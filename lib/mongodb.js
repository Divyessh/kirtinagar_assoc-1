// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const mongodbUri = process.env.NEXT_PUBLIC_MONGODB_URI;
  if (!mongodbUri) {
    throw new Error(
      "The NEXT_PUBLIC_MONGODB_URI environment variable is not defined."
    );
  }
  try {
    await mongoose.connect(mongodbUri);
    // eslint-disable-next-line no-console
    console.log("Connected to MongoDB");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error connecting to MongoDB: ", error);
  }
};

export const disconnectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      // eslint-disable-next-line no-console
      console.log("Disconnected from MongoDB");
    } else {
      // eslint-disable-next-line no-console
      console.log("No active MongoDB connection to disconnect from");
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error disconnecting from MongoDB: ", error);
  }
};
