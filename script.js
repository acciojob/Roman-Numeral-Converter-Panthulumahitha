const express = require("express");
const { convertToRoman } = require("./path-to-your-function");
const app = express();

app.use(express.json());

app.post("/romanConverter", (req, res) => {
    const { input } = req.body;
    if (typeof input !== "number" || input < 0 || input > 100000) {
        return res.status(400).json({ error: "Invalid input" });
    }
    try {
        const roman = convertToRoman(input);
        res.status(200).json({ roman });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
