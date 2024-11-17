import { ShotRepository } from '../shot.repository';
import { UpdateShotDto } from '../dto/update-shot.dto';
export default class UpdateShotUseCase {
    private shotRepository;
    constructor(shotRepository: ShotRepository);
    updateShot(id: number, category_id: number, updateShotDto: UpdateShotDto): Promise<string | null>;
}
