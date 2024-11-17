import { LabsRepository } from '../labs.repository';
import { ReadLabsDto } from '../dto/read-labs.dto';
export default class GetLabsUseCase {
    private labsRepository;
    constructor(labsRepository: LabsRepository);
    getLabs(): Promise<ReadLabsDto[]>;
    getLabsByCategoryID(category_id: number): Promise<ReadLabsDto[]>;
}
