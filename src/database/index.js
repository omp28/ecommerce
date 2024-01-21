import mongoose from "mongoose";

const configOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectTODB = async () => {
  const connectionURL =
    "mongodb+srv://<omp28>:<omp28>@cluster0.mfkxvvj.mongodb.net/";
  mongoose
    .connect(connectionURL, configOption)
    .then(() => console.log("database connected successfull"))
    .catch((err) => console.log("error connecting database" + err));
};
export default connectTODB;
