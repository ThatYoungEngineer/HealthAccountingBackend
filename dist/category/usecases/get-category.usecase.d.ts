import { CategoryRepository } from '../category.repository';
import { ReadCategoryDto } from '../dto/read-category.dto';
export default class GetCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getCategorys(): Promise<ReadCategoryDto[]>;
    getAllCategoriesAndCharges(): Promise<ReadCategoryDto[]>;
    getCategoryByID(id: number): Promise<ReadCategoryDto[]>;
}
