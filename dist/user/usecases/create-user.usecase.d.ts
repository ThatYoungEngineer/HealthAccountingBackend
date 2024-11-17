import { UserRepository } from '../user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
export default class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(createUserDto: CreateUserDto): Promise<string | null>;
}
