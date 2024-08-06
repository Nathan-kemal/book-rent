import { v2 as cloudinary } from "cloudinary";
// const cloudinary = require('cloudinary').v2;

export async function POST(request: Request) {
  //   const body = (await request.json()) as {
  //     paramsToSign: Record<string, string>;
  //   };
  //   const { paramsToSign } = body;
  //   const signature = cloudinary.utils.api_sign_request(
  //     paramsToSign,
  //     process.env.CLOUDINARY_API_SECRET as string
  //   );
  //   return Response.json({ signature });
}
// cloudinary.v2.uploader
// .upload("dog.mp4",
//   {resource_type: "video", public_id: "my_dog",
//   overwrite: true, notification_url: "https://mysite.example.com/notify_endpoint"})
// .then(result=>console.log(result));
