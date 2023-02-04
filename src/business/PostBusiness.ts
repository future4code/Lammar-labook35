import { PostDatabase } from "../data/PostDatabase"
import { generatedId } from "../services/idGenerator"

export class PostBusiness{
    createtPost = async(input:any): Promise<void> =>{
        try{
        const {photo, description, type} = input

        if (!photo || !description || !type ){
            throw new Error ('Error Post')
}
        const id: string = generatedId()

        const postDatabase = new PostDatabase

            await postDatabase.createPost({
                id,
                createdAt: new Date(),
                photo,
                description,
                type
            })
        }catch (error:any) {
            throw new Error (error.message)
        }  
    }
}