import { Request, Response } from "express";
import { getCardById } from "../services/service.js";

export const getCard = (
    req: Request<{ id: string }>,
    res: Response
) => {
    const card = getCardById(req.params.id);

    if (!card) {
        res.status(404).json({
            error: "Card not found"
        });

        return;
    }

    res.status(200).json(card);
};

export const createCard = (req: Request, res: Response) => {
    res.status(201).json({
        received: req.body
    });
};