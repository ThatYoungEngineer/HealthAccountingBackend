import { DbService } from 'src/common/config/database/db.service';
import { CreateLabsDto } from './dto/create-labs.dto';
import { UpdateLabsDto } from './dto/update-labs.dto';
import { ReadLabsDto } from './dto/read-labs.dto';
export declare class LabsRepository {
    private Db;
    constructor(Db: DbService);
    getLabs(): Promise<ReadLabsDto[]>;
    getLabsByCategoryID(category_id: number): Promise<ReadLabsDto[]>;
    getLabsByID(id: number): Promise<ReadLabsDto[]>;
    insertLabs(createLabsDto: CreateLabsDto[]): Promise<string | null>;
    findExistingLabsCode(code: string): Promise<boolean>;
    updateLabs(id: number, category_id: number, updateLabsDto: UpdateLabsDto): Promise<string | null>;
    deleteLabs(id: number, category_id: number): Promise<string | null>;
}
