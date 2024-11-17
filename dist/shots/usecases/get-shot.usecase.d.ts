import { ShotRepository } from '../shot.repository';
import { ReadShotDto } from '../dto/read-shot.dto';
export default class GetShotUseCase {
    private shotRepository;
    constructor(shotRepository: ShotRepository);
    getShots(): Promise<ReadShotDto[]>;
    getShotsByCategoryID(category_id: number): Promise<ReadShotDto[]>;
}
