// AuthModule
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { jwtConstants } from './strategies/constant';
import { UserModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
          secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
        UserModule,
        PassportModule,
        

    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
    controllers:[AuthController]
})
export class AuthModule {}