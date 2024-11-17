import { CategoryRepository } from '../category.repository';
import { CreateCategoryDto } from '../dto/create-category.dto';
export default class CreateCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<string | null>;
}
