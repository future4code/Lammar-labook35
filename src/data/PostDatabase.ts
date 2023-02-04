import { Post } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase{
    createPost = async(post:Post): Promise<void> =>{
        try{
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                createdAt: post.createdAt.toISOString().substring(0, 10)

            }).into('labook_posts')
        }catch (error:any) {
            throw new Error (error.message)
        } 
 
    }
}