import { Request, Response } from "express";

export const getCard = (req: Request, res: Response) => {
    if (req.params.id === "999") {
        res.status(404).json({
            error: "Card not found"
        });

        return;
    }

    res.status(200).json({
        cardId: req.params.id
    });
};

export const createCard = (req: Request, res: Response) => {
    res.status(201).json({
        received: req.body
    });
};