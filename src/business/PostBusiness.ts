import { insertPostInputDTO, PostInputDTO } from "../model/postDTO"
import { generatedId } from "../services/idGenerator"
import { PostDatabase } from "../data/PostDatabase"

export class PostBusiness {

   public createPost = async (
      input: PostInputDTO
   ) => {
      try {
         const { photo, description, type, authorId } = input

         if (
            !photo ||
            !description ||
            !type ||
            !authorId
         ) {
            throw new Error('"photo", "description", "type" e "authorId" são obrigatórios')
         }

         const id: string = generatedId()

         const postDatabase = new PostDatabase()

         const postInput: insertPostInputDTO = {
            id: id,
            createdAt: new Date(),
            photo: photo,
            description: description,
            type: type,
            author_id: authorId
         }

         await postDatabase.insertPost(postInput)

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}




// import { PostDatabase } from "../data/PostDatabase"
// import { PostInputDTO } from "../model/postDTO"
// import { generatedId } from "../services/idGenerator"

// export class PostBusiness{
//     createtPost = async(input:PostInputDTO): Promise<void> =>{
//         try{
//         const {photo, description, type, author_id} = input

//         if (!photo || !description || !type || !author_id ){
//             throw new Error ('"photo", "description", "type" e "authorId" são obrigatórios')
// }
//         const id: string = generatedId()

//         const postDatabase = new PostDatabase

//             await postDatabase.createPost({
//                 id,
//                 createdAt: new Date(),
//                 photo,
//                 description,
//                 type,
//                 author_id
//             })
//         }catch (error:any) {
//             throw new Error (error.message)
//         }  
//     }
// }