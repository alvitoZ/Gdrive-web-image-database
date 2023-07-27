import fsPromises from "fs/promises";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import { getImageFromGDrive } from "@/utils/getImageFromGDrive";
import { data } from "types/data";

const dataFilePath = path.join(process.cwd(), "./tmp/data.json");

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
      // fsPromises
      //   .chmod(dataFilePath, 0o777)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
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
        name: name,
        desc: desc,
      };

      objectData.push(newData);
      const updatedData = JSON.stringify(objectData);
      await fsPromises.writeFile(dataFilePath, updatedData);
      res.status(200).redirect("/");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error coy" });
    }
  }
}
