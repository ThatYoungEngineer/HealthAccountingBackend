import { LabsRepository } from '../labs.repository';
import { UpdateLabsDto } from '../dto/update-labs.dto';
export default class UpdateLabsUseCase {
    private labsRepository;
    constructor(labsRepository: LabsRepository);
    updateLabs(id: number, category_id: number, updateLabsDto: UpdateLabsDto): Promise<string | null>;
}
