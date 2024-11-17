import { CategoryRepository } from '../category.repository';
import { UpdateCategoryDto } from '../dto/update-category.dto';
export default class UpdateCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    updateCategorys(id: number, updateCategoryDto: UpdateCategoryDto): Promise<string | null>;
}
