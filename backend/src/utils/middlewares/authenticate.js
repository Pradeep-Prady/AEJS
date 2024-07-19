import jwt from "jsonwebtoken";

import { BADREQUEST } from "./../constants/statusCode.js";
import AppError from "./../response-handlers/app-error.js";

export const isAuthenticatedAdminUser = async (req, res, next) => {
  const { at } = req.cookies;

  if (!at) {
    return next(
      new AppError("Login first to access this resource", BADREQUEST)
    );
  }

  try {
    const decoded = jwt.verify(at, process.env.JWT_SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return next(new AppError("Invalid or expired token", BADREQUEST));
  }
};
