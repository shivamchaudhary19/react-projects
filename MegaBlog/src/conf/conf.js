const conf = {
    appwriteUrl: String(import.meta.env.
        Vite_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.
        VITE_APPWRITE_PROOJECT_ID),
    appwriteDatabaseId: String(import.meta.env.
        VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.
        VITE_APPWRITE_TABLE_ID),
    appwriteBucketId: String(import.meta.env
        .VITE_APPWRITE_BUCKET_ID)
}

export default conf