import { ShotRepository } from '../shot.repository';
export default class DeleteShotUseCase {
    private shotRepository;
    constructor(shotRepository: ShotRepository);
    deleteShot(id: number, category_id: number): Promise<string | null>;
}
