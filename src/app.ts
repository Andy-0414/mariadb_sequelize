import express from "express";
import { User } from "./schema/User";

import "dotenv/config";

const app = express();

User.findAll().then((data: User[]) => {
	console.log(data);
});

app.listen(3000, () => {
	console.log("test");
});
