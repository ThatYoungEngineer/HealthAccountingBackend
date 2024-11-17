import { UserRepository } from '../user.repository';
export default class LoginUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAllUsers(): Promise<string | null>;
    getUserbyID(id: number): Promise<string | null>;
}
