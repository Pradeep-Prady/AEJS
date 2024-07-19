import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  companyWebsite: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  typeOfEnquiry: {
    type: String,
    required: true,
  },
  enquiry: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => {
      const date = new Date();
      // Get the timezone offset for Indian Standard Time (IST) in milliseconds
      const timeZoneOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
      // Apply the offset to the current date
      const indianDate = new Date(date.getTime() + timeZoneOffset);
      return indianDate;
    },
  },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
