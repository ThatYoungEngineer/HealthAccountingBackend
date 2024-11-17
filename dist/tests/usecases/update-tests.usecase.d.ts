import { TestsRepository } from '../tests.repository';
import { UpdateTestsDto } from '../dto/update-tests.dto';
export default class UpdateTestsUseCase {
    private testsRepository;
    constructor(testsRepository: TestsRepository);
    updateTest(id: number, category_id: number, updatetestsDto: UpdateTestsDto): Promise<string | null>;
}
