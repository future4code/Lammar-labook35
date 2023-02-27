 import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/postDTO";

export class PostController {

    public createPost = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { photo, description, type, authorId } = req.body

            const input: PostInputDTO = {
                photo,
                description,
                type,
                authorId
            }

            const postBusiness = new PostBusiness()

            await postBusiness.createPost(input)
            
            res.status(201).send({ message: "Post criada!" })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
}










// export class PostController {
//     createPost = async(req: Request, res: Response): Promise<void> => {
//         try{
//             const { photo, description, type, authorId } = req.body

//             const input: PostInputDTO = {
//                 photo: req.body.photo,
//                 description: req.body.description,
//                 type: req.body.type,
//                 authorId: req.body.authorId
//             };

//             const postBusiness = new PostBusiness()

//             await postBusiness.createtPost(input)

//             res.status(201).send({message: "Post criado!"}); 
//         }catch (error: any) {
//             res.status(400).send(error.message)
//         }

//     }
    
// }