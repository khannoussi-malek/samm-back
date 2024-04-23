import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { signupStudentDto } from 'src/users/dto/signup-student.dto';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';
import { Role } from './guards/roles.enum';
import { jwtConstants } from './strategies/constant';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(req: User): Promise<{ access_token: string }> {
    const user = await this.userService.findByEmail(req.email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (user.password !== req.password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = {
      email: user.email,
      id: user.id,
      role: user.role,
      nom: user.nom,
      prenom: user.prenom,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async getUserFromToken(token: string) {
    try {
      const userFromToken = await jwt.verify(token, jwtConstants.secret);
      const user = await this.userService.findOne(userFromToken['id']);
      const { password, ...result } = user;
      return result;
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
  async signup(userSignupDto: signupStudentDto, role: Role) {
    if (role === 'teacher' || role === 'Student') {
      const existingUser = await this.userService.findByEmail(
        userSignupDto.email,
      );
      if (existingUser) {
        throw new ConflictException(` ${role} with this email already exists`);
      }

      await this.userService.create({ ...userSignupDto, role });

      return { message: `${role} signed up successfully` };
    } else {
      throw new BadRequestException(
        'Role must be either "teacher" or "student"',
      );
    }
  }
}
