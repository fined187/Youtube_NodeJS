import express from "express";
import morgan from "morgan";
import logger from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();

app.use(logger('combined'));
app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/users", userRouter);


const handleUser = (req, res) => res.send("Edit User");
const handleListening = () => {
  console.log(`Server listening on port http://localhost: ${PORT}`)
}

app.listen(PORT, handleListening); //   PORT open.

