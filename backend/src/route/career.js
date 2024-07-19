import { Router } from "express";
import {
  createCareer,
  deleteCareer,
  getAllCareers,
  getSingleCareer,
} from "../controller/careerController.js";
import multer from "multer";
import { fileURLToPath } from "url";

import path from "path";
import { isAuthenticatedAdminUser } from "../utils/middlewares/authenticate.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/resume"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});


router.route("/create").post(upload.single("resume"), createCareer);
// Admin
router.route("/admin/all-careers").get(isAuthenticatedAdminUser , getAllCareers);
router.route("/admin/single-career/:id").get(isAuthenticatedAdminUser,getSingleCareer);
router.route("/admin/delete-career/:id").delete(isAuthenticatedAdminUser,deleteCareer);

export default router;
