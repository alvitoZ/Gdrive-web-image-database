import fsPromises from "fs/promises";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import { getImageFromGDrive } from "@/utils/getImageFromGDrive";
import { data } from "types/data";
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://kitan:kitan@cluster0.fkpdyua.mongodb.net/"
    );
    const coll = client.db("coba").collection("data");
    const cursor = coll.find();
    const result = (await cursor.toArray()).reverse();

    return new res({
      json:result,
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
    
    //return res.status(200).json(result);
  } else if (req.method === "POST") {
    try {
      const { src, alt, name, desc } = req.body;

      // Add the new data to the object
      const newData: Omit<data, "_id"> = {
        alt: alt,
        downloadUrl: src,
        src: getImageFromGDrive(src),
        name: name,
        desc: desc,
      };
      const client = await MongoClient.connect(
        "mongodb+srv://kitan:kitan@cluster0.fkpdyua.mongodb.net/"
      );
      const coll = client.db("coba").collection("data");
      const cursor = await coll.insertOne(newData);
      // res.status(200).redirect("/");
      res.status(200).json(cursor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "gagal post coy" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      const client = await MongoClient.connect(
        "mongodb+srv://kitan:kitan@cluster0.fkpdyua.mongodb.net/"
      );
      const coll = client.db("coba").collection("data");
      const cursor = await coll.deleteOne({
        _id: new ObjectId(String(id)),
      });
      // res.status(200).redirect("/");
      res.status(200).json(cursor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "gagal delete coy" });
    }
  }
}
