import fsPromises from "fs/promises";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import { getImageFromGDrive } from "@/utils/getImageFromGDrive";
import { data } from "types/data";

const dataFilePath = path.join(process.cwd(), "/tmp/data.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Read the existing data from the JSON file
    const jsonData: any = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
    res.status(200).json(objectData);
  } else if (req.method === "POST") {
    try {
      // Read the existing data from the JSON file
      const jsonData: any = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      // Get the data from the request body
      const { src, alt, downloadUrl, name, desc } = req.body;

      // Add the new data to the object
      const newData: data = {
        alt: alt,
        downloadUrl: downloadUrl,
        src: getImageFromGDrive(src),
        // src: src,
        name: name,
        desc: desc,
      };

      objectData.push(newData);
      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      // res.status(200).redirect("/");
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: "Error coy" });
    }
  }
}
