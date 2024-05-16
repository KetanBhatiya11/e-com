import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
import { LoginDto } from 'src/user/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('user/signup')
  userSignUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.userSignUp(createUserDto);
  }

  @Post('user/login')
  userLogin(@Body() userLoginDto: LoginDto) {
    return this.authService.userLogIn(userLoginDto);
  }

  @Post('/admin/signup')
  adminSignUp(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.adminSignUp(createAdminDto);
  }

  @Post('/admin/login')
  adminLogIn(@Body() adminLoginDto: LoginDto) {
    return this.authService.adminLogIn(adminLoginDto);
  }
}
