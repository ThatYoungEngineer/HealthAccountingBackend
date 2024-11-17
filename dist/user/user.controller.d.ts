import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { Response } from 'express';
import CreateUserUseCase from './usecases/create-user.usecase';
import GetUserUseCase from './usecases/get-user.usecase';
export declare class UserController {
    private userRepository;
    private createUserUseCase;
    private getUserUseCase;
    constructor(userRepository: UserRepository, createUserUseCase: CreateUserUseCase, getUserUseCase: GetUserUseCase);
    getUsers(): Promise<string>;
    store(createUserDto: CreateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getUser(userId: number): Promise<string>;
    deleteUser(userId: number): Promise<string>;
}
