import express from "express";
import cardRoutes from "./routes/card.routes";

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

app.use("/api/cards", cardRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});