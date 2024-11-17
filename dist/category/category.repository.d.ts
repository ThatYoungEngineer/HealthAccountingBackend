import { DbService } from 'src/common/config/database/db.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ReadCategoryDto } from './dto/read-category.dto';
export declare class CategoryRepository {
    private Db;
    constructor(Db: DbService);
    getCategoryByID(id: number): Promise<ReadCategoryDto[]>;
    getCategoryByName(name: string): Promise<ReadCategoryDto[]>;
    getCategories(): Promise<ReadCategoryDto[]>;
    insertCategory(createCategoryDto: CreateCategoryDto): Promise<string | null>;
    updateCategory(id: number, updateCategoryDto: UpdateCategoryDto): Promise<string | null>;
    deleteCategory(id: number): Promise<string | null>;
}
