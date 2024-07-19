import Joi from "joi";

export const contactCreateValidator = Joi.object({
    firstName:Joi.string().required().messages({
        "any.required": "First name is required",
        "string.base": "First name must be a string",

    }),
    lastName:Joi.string().optional().messages({
        "string.base": "Last name must be a string",    
    }),
    companyName:Joi.string().optional().messages({
        "string.base": "Company name must be a string",    
    }),
    companyWebsite:Joi.string().optional().messages({
        "string.base": "Company website must be a string",    
    }),
    email:Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.base": "Email must be a string",
        "string.email": "Email must be a valid email",
    }),
    phone:Joi.string().required().messages({
        "any.required": "Phone number cannot be empty.",
        "string.empty": "Phone number cannot be empty.",
        "string.min": "Phone number should have a minimum length of 10.",
        "string.max": "Phone number should have a maximum length of 10.",
        "string.base": "Phone number should be a type of 'text'.",
    }),
    typeOfEnquiry:Joi.string().required().messages({
        "any.required": "Type of enquiry is required",  
        "string.base": "Type of enquiry must be a string",
    }),
    enquiry:Joi.string().required().messages({
        "any.required": "Message is required",
        "string.base": "Message must be a string",
    }),
})
