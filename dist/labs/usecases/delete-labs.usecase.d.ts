import { LabsRepository } from '../labs.repository';
export default class DeleteLabsUseCase {
    private labsRepository;
    constructor(labsRepository: LabsRepository);
    deleteLabs(id: number, category_id: number): Promise<string | null>;
}
