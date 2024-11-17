import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/user.repository';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserRepository, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../user/dto/create-user.dto").CreateUserDto[]>;
}
