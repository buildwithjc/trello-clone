import express, { Request, Response, NextFunction } from "express";
import cardRoutes from "./routes/card.routes.js";
import { env } from "./config/env.js";
const app = express();

app.use(express.json());

app.use("/api", (req, res, next) => {
    if (req.path === "/blocked") {
        res.status(403).json({
            error: "This route is blocked"
        });

        return;
    }

    next();
});

app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.get("/api/search", (req, res) => {
    if (!req.query.search) {
        res.status(400).json({
            error: "Search term is required"
        });

        return;
    }

    res.status(200).json({
        search: req.query.search
    });
});

app.get("/api/error", (_req, _res) => {
    throw new Error("Something went wrong");
});

app.use("/api/cards", cardRoutes);

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(error);

    res.status(500).json({
        error: "Internal server error"
    });
});

app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
});