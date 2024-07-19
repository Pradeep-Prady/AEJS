import Joi from "joi";

export const careerCreateValidator = Joi.object({
  firstName: Joi.string().required().messages({
    "any.required": "First name is required",
    "string.base": "First name must be a string",
  }),
  lastName: Joi.string().optional().messages({
    "string.base": "Last name must be a string",
  }),
  age: Joi.number().required().messages({
    "any.required": "Age is required",
    "number.base": "Age must be a number",
  }),
  address: Joi.string().required().messages({
    "any.required": "Address is required",
    "string.base": "Address must be a string",
  }),
  city: Joi.string().required().messages({
    "any.required": "City is required",
    "string.base": "City must be a string",
  }),
  state: Joi.string().required().messages({
    "any.required": "State is required",
    "string.base": "State must be a string",
  }),
  pinCode: Joi.string().required().messages({
    "any.required": "Pin code is required",
    "string.base": "Pin code must be a string",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required",
    "string.base": "Email must be a string",
    "string.email": "Email must be a valid email",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Phone number cannot be empty.",
    "string.empty": "Phone number cannot be empty.",
    "string.min": "Phone number should have a minimum length of 10.",
    "string.max": "Phone number should have a maximum length of 10.",
    "string.base": "Phone number should be a type of 'text'.",
  }),
  totalExperience: Joi.number().optional().messages({
    "number.base": "Total experience must be a number",
  }),
  relevantExperience: Joi.number().optional().messages({
    "number.base": "Relevant experience must be a number",
  }),
  applicationOfPost: Joi.string().required().messages({
    "any.required": "Application of post is required",
    "string.base": "Application of post must be a string",
  }),
  about: Joi.string().optional().messages({
    "string.base": "About must be a string",
  }),

  resume: Joi.string().required().messages({
    "any.required": "Resume is required",
    "string.base": "Resume must be a string",
  }),
});
