import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validate = (schema: z.ZodType) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        schema.parse(req.body);

        next();
    };
};