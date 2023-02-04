import { app } from "./app";
import { UserController } from "./controller/UserController";
import { PostController } from "./controller/PostController";

const userController = new UserController

const postController = new PostController

app.post('/create', userController.createUser)

app.post('/posts', postController.createPost)
// app.get('/find', postController.findPostById)


