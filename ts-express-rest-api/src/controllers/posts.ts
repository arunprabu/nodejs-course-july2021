import { Response, Request, NextFunction } from "express";
export const getPosts = (req: Request, res: Response) => {
  res.json({
    msg:"Success!!!"
  });
};