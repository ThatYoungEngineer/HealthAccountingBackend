import { CategoryRepository } from '../category.repository';
export default class DeleteCategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    deleteCategory(id: number): Promise<string | null>;
}
