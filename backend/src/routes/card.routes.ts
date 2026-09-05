import { Router } from "express";
import { getCard, createCard } from "../controllers/card.controller.js";

const router = Router();

router.get("/:id", getCard);
router.post("/", createCard);

export default router;