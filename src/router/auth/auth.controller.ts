import { Request, Response, NextFunction } from "express";

import Controller from "../controller";

export default class AuthController extends Controller {
	public async signIn(req: Request, res: Response, next: NextFunction) {}
	public async signUp(req: Request, res: Response, next: NextFunction) {}
}
