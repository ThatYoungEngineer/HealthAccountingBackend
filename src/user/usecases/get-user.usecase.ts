import { HttpStatus, Injectable } from '@nestjs/common';
import { AppException } from 'src/common/exception/app.exception';
import { UserRepository } from '../user.repository';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export default class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<string | null> {
    const result = await this.userRepository.get();
    return result;
  }

  async getUserbyEmail(email : string): Promise<string | null> {
    const result = await this.userRepository.getByEmail(email);
    return JSON.parse(JSON.stringify(result[0]));;
  }

  async getUserbyID(id : number): Promise<string | null> {
    const result = await this.userRepository.getById(id);
    return result;
  }
}
