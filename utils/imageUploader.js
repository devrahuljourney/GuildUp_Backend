exports.uploadToCloudinary = async (filePath, folder, height, quality) => {
    try {
        const options = { folder };

        if (height) options.height = height;
        if (quality) options.quality = quality;
        options.resource_type = 'auto';

        
        return await cloudinary.uploader.upload(filePath, options);
    } catch (error) {
        console.log("Error in file upload: ", error);
        throw error; 
    }
}
