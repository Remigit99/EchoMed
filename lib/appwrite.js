import { Client, Account, ID, Databases, Storage } from 'appwrite';


// app/services/appwrite.js


const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); 

    const account = new Account(client);
    const databases = new Databases(client);
    const storage = new Storage(client);

    export { client, account, databases, storage, ID };
