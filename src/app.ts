import express from "express";
import { User } from "./schema/User";

import "dotenv/config";

const app = express();

app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(express.json({ limit: "20mb" }));

User.findAll().then((data: User[]) => {
	console.log(data[0].getEmailAndPassword());
});

app.listen(3000, () => {
	console.log("test");
});
