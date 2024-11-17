import { LabsRepository } from '../labs.repository';
import { CreateLabsDto } from '../dto/create-labs.dto';
export default class CreateLabsUseCase {
    private labsRepository;
    constructor(labsRepository: LabsRepository);
    createLabs(createLabsDto: CreateLabsDto[]): Promise<string | null>;
}
