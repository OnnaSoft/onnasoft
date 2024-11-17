import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { HttpError } from "http-errors-enhanced";

export const validateRequest = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(new HttpError(400, `Validation error: ${error.message}`));
    }
    next();
  };
};
