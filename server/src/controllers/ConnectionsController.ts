import { Request, Response } from "express";
import db from "../database/connection";

// Connections Controller
export default class ConnectionsController {
  // search connections
  async index(req: Request, res: Response) {
    const totalConnections = await db("connections").count("* as total");
    const { total } = totalConnections[0];

    return res.json({ total });
  }
  // create connections
  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db("connections").insert({
      user_id,
    });

    return res.status(201).send();
  }
}
