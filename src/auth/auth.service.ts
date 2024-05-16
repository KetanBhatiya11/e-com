import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from 'src/user/dto/login-user.dto';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';

@Injectable()
export class AuthService {
  userSignUp(createUserDto: CreateUserDto) {
    return 'User signup';
  }

  userLogIn(userLoginDto: LoginDto) {
    return 'User Login';
  }

  adminSignUp(createAdminDto: CreateAdminDto) {
    return 'Admin Sign Up';
  }

  adminLogIn(adminLoginDto: LoginDto) {
    return 'Admin Login';
  }
}
