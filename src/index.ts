import { app } from "./app";
import { UserController } from "./controller/UserController";
import { postRouter } from "./routes/postRouter";


const userController = new UserController

app.post('/create', userController.createUser)

app.use("/post",postRouter)




