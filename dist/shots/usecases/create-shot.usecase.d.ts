import { ShotRepository } from '../shot.repository';
import { CreateShotDto } from '../dto/create-shot.dto';
export default class CreateShotUseCase {
    private shotRepository;
    constructor(shotRepository: ShotRepository);
    createShot(createShotDto: CreateShotDto[]): Promise<string | null>;
}
