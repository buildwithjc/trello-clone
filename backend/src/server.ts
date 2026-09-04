import express from "express";

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

app.get("/api/cards/:id", (req, res) => {
    if (req.params.id === "999") {
        res.status(404).json({
            error: "Card not found"
        });

        return;
    }

    res.status(200).json({
        cardId: req.params.id
    });
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

app.post("/api/cards", (req, res) => {
    res.json({
        received: req.body
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});