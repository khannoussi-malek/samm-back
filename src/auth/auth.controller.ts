// AuthController
import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Get,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() user: User) {
    const loggedInUser = await this.authService.validateUser(
      user.email,
      user.password,
    );

    if (loggedInUser) {
      const token = await this.authService.login(loggedInUser);
      return { access_token: token.access_token };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  @Get('info')
  async getMe(@Headers('authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    const user = await this.authService.getUserFromToken(token);
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    return user;
  }
  @Post('signupstudent')
  async signupStudent(@Body() userSignupDto: CreateUserDto) {
    return this.authService.signup(userSignupDto, 'Student');
  }
  @Post('signupTeacher')
  async signupTeacher(@Body() userSignupDto: CreateUserDto) {
    return this.authService.signup(userSignupDto, 'teacher');
  }
}
