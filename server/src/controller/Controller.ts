import { Request, Response } from "express";

interface Controller {
    get (req: Request, response: Response): Promise<void>
    post (req: Request, response: Response): Promise<void>
    put (req: Request, response: Response): Promise<void>
    delete (req: Request, response: Response): Promise<void>
    getById (req: Request, response: Response): Promise<void>
}

export default Controller