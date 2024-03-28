// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Role[]>(
      ROLES_KEY,
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true; // Si aucun rôle requis n'est défini, autoriser l'accès
    }
    
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Utilisateur extrait du token JWT

    return user && requiredRoles.includes(user.role); // Vérifie si l'utilisateur et son rôle sont définis et autorisés
  }
}
