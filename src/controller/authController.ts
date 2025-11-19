import { Request, Response } from "express";
import { Registerservice } from "@/service/authService";
import { Loginservice } from "@/service/authService";

export const registerController = async (req: Request, res: Response) => {
  const result = await Registerservice(req, res);
  return result;
};
export const loginController = async (req: Request, res: Response) => {
  const result = await Loginservice(req, res);
  return result;
};
