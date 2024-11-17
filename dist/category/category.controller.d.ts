import GetCategoryUseCase from './usecases/get-category.usecase';
import CreateCategoryUseCase from './usecases/create-category.usecase';
import UpdateCategoryUseCase from './usecases/update-category.usecase';
import DeleteCategoryyUseCase from './usecases/delete-category.usecase';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ReadCategoryDto } from './dto/read-category.dto';
export declare class CategoryController {
    private getCategoryUseCase;
    private createCategoryUseCase;
    private updateCategoryUseCase;
    private deleteCategoryUseCase;
    constructor(getCategoryUseCase: GetCategoryUseCase, createCategoryUseCase: CreateCategoryUseCase, updateCategoryUseCase: UpdateCategoryUseCase, deleteCategoryUseCase: DeleteCategoryyUseCase);
    get(): Promise<ReadCategoryDto[]>;
    getByID(id: number): Promise<ReadCategoryDto[]>;
    addCategory(createCategoryDto: CreateCategoryDto): Promise<string | null>;
    put(id: number, updateCategoryDto: UpdateCategoryDto): Promise<string>;
    deete(id: number): Promise<string>;
}
