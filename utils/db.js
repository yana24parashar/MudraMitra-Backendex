import mongoose from "mongoose";

const URI =
  "mongodb+srv://developerananyab:Ananya_is_nice@apicrud.jz55l13.mongodb.net/quizApp?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
    console.log("Database not connected properly");
    process.exit(0);
  }
};

export default connectDb;
