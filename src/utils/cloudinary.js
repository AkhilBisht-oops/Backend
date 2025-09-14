import { v2 as cloudinary } from "cloudinary";  
import fs from "fs"

import dotenv from 'dotenv';
dotenv.config();

console.log("Cloudinary config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "******" : null,
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null

        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file has been uploaded
        console.log("file is uploaded on cloudinary", response.secure_url);
        fs.unlinkSync(localFilePath)
        return response
    } catch(error){
        console.error("Cloudinary upload failed:", error.message);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // remove the locally saved temp file as the upload operation got failed
        }
        return null
    }
}

export {uploadOnCloudinary} 