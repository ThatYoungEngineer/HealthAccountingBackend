import { TestsRepository } from '../tests.repository';
export default class DeleteTestsUseCase {
    private testsRepository;
    constructor(testsRepository: TestsRepository);
    deleteTest(id: number, category_id: number): Promise<string | null>;
}
