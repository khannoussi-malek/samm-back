import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from './strategies/constant';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


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

    async login(user: User): Promise<{ access_token: string }> {
        const payload = { email: user.email, id: user.id, role: user.role ,nom:user.nom , prenom:user.prenom};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async getUserFromToken(token: string) {
        try {
            return jwt.verify(token, jwtConstants.secret);
           
           
        } catch (e) {
            throw new UnauthorizedException('Invalid token');
        }
    }
    async signup(userSignupDto: CreateUserDto,role:"teacher"|"Student"|"Admin") {
        if (role === 'teacher' || role === 'Student') {
            
            const existingUser = await this.userService.findByEmail(userSignupDto.email);
            if (existingUser) {
                throw new ConflictException( ` ${role} with this email already exists`);
            }
    
          
            await this.userService.create({...userSignupDto,role});
           
            return {}
        } else {
            throw new BadRequestException('Role must be either "teacher" or "student"');
        }
    }
    
}
