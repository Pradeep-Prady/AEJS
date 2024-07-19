import { careerCreateValidator } from "../utils/validator/careerCreateValidator.js";
import AppError from "./../utils/response-handlers/app-error.js";
import { BADREQUEST, SUCCESS } from "./../utils/constants/statusCode.js";
import { add, deleteById, getAll, getById } from "../service/careerService.js";
import AppSuccess from "./../utils/response-handlers/app-success.js";

// users
export const createCareer = async (req, res, next) => {
  console.log("req.body", req.body);

  let BASE_URL = `${req.protocol}://${req.get("host")}`;
  let url;
  // Add new images if there are any
  if (req?.file) {
    console.log(req.file);
    // let url = `${BASE_URL}/src/uploads/item/${file.originalname}`;
    url = `${BASE_URL}/src/uploads/resume/${req?.file.originalname}`;
  }

  req.body.resume = url;
  const { error } = careerCreateValidator.validate(req.body);
  if (error) {
    console.log(error);
    return next(new AppError(error.details[0].message, BADREQUEST));
  }

  try {
    const newCareer = await add(req.body);
    return next(new AppSuccess(newCareer, "Career Registered", SUCCESS));
  } catch (error) {
    console.log(error);

    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

//  Admin

// Get all careers
export const getAllCareers = async (req, res, next) => {
  try {
    const careers = await getAll();

    return next(new AppSuccess(careers, "All careers", SUCCESS));
  } catch (error) {
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

// Get Single Career

export const getSingleCareer = async (req, res, next) => {
  try {
    const singleCareer = await getById(req.params.id);
    return next(new AppSuccess(singleCareer, "Single Career", SUCCESS));
  } catch (error) {
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

export const deleteCareer = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const deletedContact = await deleteById(req.params.id);
    console.log(deletedContact);
    return next(new AppSuccess(deletedContact, "Contact Deleted", SUCCESS));
  } catch (error) {
    console.log(error)
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};
