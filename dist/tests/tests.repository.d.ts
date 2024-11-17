import { DbService } from 'src/common/config/database/db.service';
import { CreateTestsDto } from './dto/create-tests.dto';
import { UpdateTestsDto } from './dto/update-tests.dto';
import { ReadTestsDto } from './dto/read-tests.dto';
export declare class TestsRepository {
    private Db;
    constructor(Db: DbService);
    getTests(): Promise<ReadTestsDto[]>;
    getTestByID(id: number): Promise<ReadTestsDto[]>;
    getTestsByCategoryID(category_id: number): Promise<ReadTestsDto[]>;
    insertTest(createTestsDto: CreateTestsDto[]): Promise<string | null>;
    findExistingTestCode(code: string): Promise<boolean>;
    updateTest(id: number, category_id: number, updateTestsDto: UpdateTestsDto): Promise<string | null>;
    deleteTest(id: number, category_id: number): Promise<string | null>;
}
