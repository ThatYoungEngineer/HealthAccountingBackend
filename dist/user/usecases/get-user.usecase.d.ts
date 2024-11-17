import { UserRepository } from '../user.repository';
export default class GetUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAllUsers(): Promise<string | null>;
    getUserbyEmail(email: string): Promise<string | null>;
    getUserbyID(id: number): Promise<string | null>;
}
