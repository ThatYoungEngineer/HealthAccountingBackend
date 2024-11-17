import { TestsRepository } from '../tests.repository';
import { CreateTestsDto } from '../dto/create-tests.dto';
export default class CreateTestsUseCase {
    private testsRepository;
    constructor(testsRepository: TestsRepository);
    createTest(createTestDto: CreateTestsDto[]): Promise<string | null>;
}
