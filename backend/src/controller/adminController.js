import jwt from "jsonwebtoken";
import AppError from "../utils/response-handlers/app-error.js";
import {
  BADREQUEST,
  SUCCESS,
  UNAUTHORIZED,
} from "../utils/constants/statusCode.js";
import AppSuccess from "../utils/response-handlers/app-success.js";
import { getAll as getAllCareers } from "../service/careerService.js";
import { getAll as getAllContacts } from "../service/contactService.js";
export const getDashboard = async (req, res, next) => {
  try {
    const careerCount = await getAllCareers();
    const contactCount = await getAllContacts();

    return next(
      new AppSuccess(
        {
          admin: true,
          careerCount: careerCount.length,
          contactCount: contactCount.length,
        },
        "Dashboard Data successfully Send",
        SUCCESS
      )
    );
  } catch (err) {
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

// Auth

export const loginAdmin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (username === process.env.USERID && password === process.env.PASSWORD) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
      });

      const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Adjust SameSite attribute based on environment
      };

      res.cookie("at", token, options);

      res.status(200).json({
        success: true,
        admin: true,
      });
    } else {
      return next(new AppError("Invalid Credentials", UNAUTHORIZED));
    }
  } catch (err) {
    console.log(err);
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

export const getAdminProfile = async (req, res, next) => {
  try {
    return next(
      new AppSuccess(
        {
          admin: true,
        },
        "Admin Available ",
        SUCCESS
      )
    );
  } catch (error) {
    return next(new AppError("Invalid or expired token", BADREQUEST));
  }
};

export const logoutAdmin = async (req, res, next) => {
  const options = {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: process.env.NODE_ENV === "prod",  
    sameSite: process.env.NODE_ENV === "prod" ? "None" : "Lax", // Adjust SameSite attribute based on environment
  };

  res.cookie("at", null, options);

  res.status(200).json({
    success: true,
    admin: false,
  });

  return next(new AppSuccess({ admin: false }, "Logout successfully", SUCCESS));
};
