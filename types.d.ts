// types.d.ts (ou un autre nom de fichier de votre choix)
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Définir la propriété user
    }
  }
}
