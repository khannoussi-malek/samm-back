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
            const decoded = jwt.verify(token, jwtConstants.secret);
            // Dans cet exemple, `decoded` contiendrait les informations de l'utilisateur extraites du token.
            return decoded;
        } catch (e) {
            throw new UnauthorizedException('Invalid token');
        }
    }
    async signup(userSignupDto: CreateUserDto) {
        if (userSignupDto.role === 'teacher') {
            // Vérifier si l'enseignant existe déjà dans la base de données
            const existingTeacher = await this.userService.findByEmail(userSignupDto.email);
            if (existingTeacher) {
                throw new ConflictException('Teacher with this email already exists');
            }
    
            // Créer un nouvel enseignant
            const newTeacher = await this.userService.create(userSignupDto);
            // Générer un token JWT pour l'enseignant
            const token = this.jwtService.sign({ email: newTeacher.email, id: newTeacher.id, role: newTeacher.role, password:newTeacher.password });
            return { token };
        } else if (userSignupDto.role === 'Student') {
            const existingStudent = await this.userService.findByEmail(userSignupDto.email);
            if (existingStudent) {
                throw new ConflictException('Teacher with this email already exists');
            }
    
            // Créer un nouvel enseignant
            const newStudent = await this.userService.create(userSignupDto);
            // Générer un token JWT pour l'enseignant
            const token = this.jwtService.sign({ email: newStudent.email, id: newStudent.id, role: newStudent.role });
            return { token };
            
        } else {
            throw new BadRequestException('Role must be either "teacher" or "student"');
        }
    }
    
}
