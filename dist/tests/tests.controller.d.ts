import GetTestsUseCase from './usecases/get-tests.usecase';
import CreateTestsUseCase from './usecases/create-tests.usecase';
import UpdateTeststUseCase from './usecases/update-tests.usecase';
import DeleteTestsUseCase from './usecases/delete-tests.usecase';
import { CreateTestsDto } from './dto/create-tests.dto';
import { UpdateTestsDto } from './dto/update-tests.dto';
import { ReadTestsDto } from './dto/read-tests.dto';
export declare class TestsController {
    private getTestsUseCase;
    private createTestsUseCase;
    private updateTestsUseCase;
    private deleteTestsUseCase;
    constructor(getTestsUseCase: GetTestsUseCase, createTestsUseCase: CreateTestsUseCase, updateTestsUseCase: UpdateTeststUseCase, deleteTestsUseCase: DeleteTestsUseCase);
    get(): Promise<ReadTestsDto[]>;
    getByCategoryID(category_id: number): Promise<ReadTestsDto[]>;
    post(createTestsDto: CreateTestsDto[]): Promise<string>;
    put(id: number, category_id: number, updateTestsDto: UpdateTestsDto): Promise<string>;
    deete(id: number, category_id: number): Promise<string>;
}
