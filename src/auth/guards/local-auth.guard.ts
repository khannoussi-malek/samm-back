import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
class TokenGuard extends AuthGuard ('local'){}
