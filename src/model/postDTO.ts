export type authenticationData = {
    id: string
 }

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
export interface insertPostInputDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    author_id: string
    
 }
 export interface PostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
 }