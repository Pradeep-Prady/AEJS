import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  totalExperience: {
    type: String,
  },
  relevantExperience: {
    type: String,
  },
  applicationOfPost: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  resume: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => {
      const date = new Date();
      const timeZoneOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
      const indianDate = new Date(date.getTime() + timeZoneOffset);
      return indianDate;
    }
  }
});

const Career = mongoose.model("Career", careerSchema);
export default Career;
