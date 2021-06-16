import { Request, Response } from "express";


export class AuthController {
    
    echo(req: Request, res: Response) {
        res.send('echo');
    }
}