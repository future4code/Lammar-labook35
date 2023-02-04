export type authenticationData = {
    id: string
 }

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    
 }
 export interface PostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES

 }