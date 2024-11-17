import { CreateUserDto } from './dto/create-user.dto';
import { DbService } from 'src/common/config/database/db.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserRepository {
    private Db;
    private jwtService;
    constructor(Db: DbService, jwtService: JwtService);
    get(): Promise<string>;
    getByEmail(email: string): Promise<CreateUserDto[]>;
    getById(id: number): Promise<string>;
    insert(createUserDto: CreateUserDto): Promise<string | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<string | null>;
    delete(id: number): Promise<string | null>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
