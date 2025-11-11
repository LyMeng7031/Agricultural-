import { Request, Response, NextFunction } from "express";

export const roleCheck = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user; // should be set by authMiddleware
    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient role" });
    }
    next();
  };
};
