import { TestsRepository } from '../tests.repository';
import { ReadTestsDto } from '../dto/read-tests.dto';
export default class GetTestsUseCase {
    private testsRepository;
    constructor(testsRepository: TestsRepository);
    getTestsByCategoryID(category_id: number): Promise<ReadTestsDto[]>;
    getTests(): Promise<ReadTestsDto[]>;
}
