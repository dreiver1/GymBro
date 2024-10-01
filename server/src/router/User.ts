import { Router } from "express";
import User from "../controller/User";

const router = Router();
const userController = new User();

router.get("/", userController.get);
router.get("/:id", userController.getById);
router.post("/", userController.post);
router.put("/:id", userController.put);
router.delete("/:id", userController.delete);

export default router;