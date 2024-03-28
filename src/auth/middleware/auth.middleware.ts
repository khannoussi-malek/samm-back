// auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../strategies/constant';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (token) {
      try {
        const decodedToken: any = jwt.verify(token, jwtConstants.secret); 
        req.user = decodedToken; 
      } catch (error) {
        console.error(error);
      }
    }

    next();
  }
}
