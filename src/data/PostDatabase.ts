import { insertPostInputDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    private postTable = 'labook_posts'

    public insertPost = async (
        task: insertPostInputDTO
    ) => {
        try {
            PostDatabase.connection.initialize()
            await PostDatabase.connection(this.postTable)
                .insert(task)
        } catch (error: any) {
            throw new Error(error.message)
        }finally{
            PostDatabase.connection.destroy();
         }
    }
}



















// import { Post } from "../model/postDTO";
// import { BaseDatabase } from "./BaseDatabase";

// export class PostDatabase extends BaseDatabase{
//     createPost = async(post:Post): Promise<void> =>{
//         try{
//             await PostDatabase.connection.insert({
//                 id: post.id,
//                 photo: post.photo,
//                 description: post.description,
//                 type: post.type,
//                 createdAt: post.createdAt.toISOString().substring(0, 10),
//                 author_id: post.author_id
                

//             }).into('labook_posts')
//         }catch (error:any) {
//             throw new Error (error.message)
//         } 
 
//     }
// }