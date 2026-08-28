import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.get("/api/cards/:id", (req, res) => {
    res.json({
        cardId: req.params.id
    });
});

app.get("/api/search", (req, res) => {
    res.json({
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