import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

export async function uploadImage(
  file: string,
  folder: string,
  publicId?: string
) {
  return cloudinary.uploader.upload(file, {
    folder: `churchos/${folder}`,
    public_id: publicId,
    overwrite: true,
    resource_type: "image",
  });
}

export function getCloudinaryUrl(publicId: string, transformations?: string) {
  const base = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
  return transformations
    ? `${base}/${transformations}/${publicId}`
    : `${base}/${publicId}`;
}
