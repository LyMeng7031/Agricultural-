import { Request, Response } from "express";
import { getAllUserService } from "@/service/userServoce";

// get all user
export const getAllUserController = async (req: Request, res: Response) => {
  const result = await getAllUserService(req, res);
  return result;
};
