/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware,   

  UnauthorizedException, } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtConstants } from './auth/constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  
  async use(req: Request, res: Response, next: NextFunction) {
    const token = this.extractTokenFromHeader(req);
    console.log(token);
    try {
      if(req.path != "/user/login") {
        if(token) {
          const payload = await this.jwtService.verifyAsync(
            token,
            {
              secret: jwtConstants.secret
            }
          );
          req['user'] = payload;
          next();
        } else {
          throw new UnauthorizedException();
        }
      }

    } catch(e) {
      console.log(e);
      throw new UnauthorizedException();
    }

  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
