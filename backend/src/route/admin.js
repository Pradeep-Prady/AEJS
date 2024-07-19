import { Router } from "express";
import { isAuthenticatedAdminUser } from "../utils/middlewares/authenticate.js";
import {
  getAdminProfile,
  getDashboard,
  loginAdmin,
  logoutAdmin,
} from "../controller/adminController.js";
const router = Router();

router.route("/dashboard").get(isAuthenticatedAdminUser ,getDashboard);
router.route("/login").post(loginAdmin);
router.route("/logout").post(isAuthenticatedAdminUser, logoutAdmin);
router.route("/me").get(isAuthenticatedAdminUser, getAdminProfile);
export default router;
