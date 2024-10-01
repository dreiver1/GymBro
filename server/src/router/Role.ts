import { Router } from "express";
import Role from "../controller/Role";

const router = Router();
const roleController = new Role();

router.get("/", roleController.get);
router.get("/:id", roleController.getById);
router.post("/", roleController.post);
router.put("/:id", roleController.put);
router.delete("/:id", roleController.delete);

export default router;
