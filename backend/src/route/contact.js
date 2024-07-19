import { Router } from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getSingleContact,
} from "../controller/contactController.js";
import { isAuthenticatedAdminUser } from "../utils/middlewares/authenticate.js";

const router = Router();

router.route("/create").post(createContact);

// Admin
router
  .route("/admin/all-contacts")
  .get(isAuthenticatedAdminUser, getAllContacts);
router
  .route("/admin/single-contact/:id")
  .get(isAuthenticatedAdminUser, getSingleContact);
router
  .route("/admin/delete-contact/:id")
  .delete(isAuthenticatedAdminUser, deleteContact);

export default router;
