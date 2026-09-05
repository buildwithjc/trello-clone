import { Router } from "express";
import { getCard, createCard } from "../controllers/card.controller.js";
import { createCardSchema } from "../schemas/card.schema.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/:id", getCard);
router.post("/", validate(createCardSchema), createCard);

export default router;