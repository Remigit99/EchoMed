import * as sdk from "node-appwrite"  

export const {
    PROJECT_ID,
    API_ENDPOINT,
    API_KEY_SECRET,
    DATABASE_ID,
    USER_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_API_ENDPOINT

}= process.env


const client = new sdk.Client()

client.setEndpoint(NEXT_PUBLIC_API_ENDPOINT)
       .setProject(PROJECT_ID)
       .setKey(API_KEY_SECRET)

export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const user = new sdk.Users(client)
export const messaging = new sdk.Messaging(client)