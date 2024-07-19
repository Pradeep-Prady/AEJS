import { contactCreateValidator } from "./../utils/validator/contactValidator.js";
import {
  add,
  deleteById,
  getAll,
  getById,
} from "./../service/contactService.js";
import AppError from "../utils/response-handlers/app-error.js";
import AppSuccess from "../utils/response-handlers/app-success.js";
import { BADREQUEST, SUCCESS } from "../utils/constants/statusCode.js";

// Users

export const createContact = async (req, res, next) => {
  const { error } = contactCreateValidator.validate(req.body);
  if (error) {
    return next(new AppError(error.details[0].message, BADREQUEST));
  }

  try {
    const newContact = await add(req.body);

    return next(new AppSuccess(newContact, "Contact Registered", SUCCESS));
  } catch (error) {
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

// Admin

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await getAll();
    return next(new AppSuccess(contacts, "All Contacts", SUCCESS));
  } catch (error) {
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

export const getSingleContact = async (req, res, next) => {
  try {
    const singleContact = await getById(req.params.id);
   return next( new AppSuccess(singleContact, "Single Contact", SUCCESS));
  } catch (error) {
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const deletedContact = await deleteById(req.params.id);
    return next(new AppSuccess(deletedContact, "Contact Deleted", SUCCESS));
  } catch (error) {
    return next(new AppError("Something went wrong", BADREQUEST));
  }
};
