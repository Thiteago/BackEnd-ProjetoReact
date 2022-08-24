import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


type TokenPayLoad = {
    id: string;
    iat: number;
    exp: number;
}

export function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
){
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Token not provided"});
    }

    const [, token] = authorization.split(" ");
    try{
        const decoded = verify(token, "secret");
        const {id} = decoded as TokenPayLoad;
        req.userId = id;
        next()
    }catch (error){
        return res.status(401).json({error: "Token Invalid"})
    }
}