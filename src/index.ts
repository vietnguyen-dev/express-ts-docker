import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app: Application = express();

const port = process.env.PORT;

app.use("/", express.static(path.join(__dirname, "..", "public")));

// Serve index.html file when accessing the root route
app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/hello", (req: Request, res: Response) => {
	res.send("get info here!");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
