import { DbService } from 'src/common/config/database/db.service';
import { CreateShotDto } from './dto/create-shot.dto';
import { UpdateShotDto } from './dto/update-shot.dto';
import { ReadShotDto } from './dto/read-shot.dto';
export declare class ShotRepository {
    private Db;
    constructor(Db: DbService);
    getShots(): Promise<ReadShotDto[]>;
    getShotsByCategoryID(category_id: number): Promise<ReadShotDto[]>;
    getShotByID(id: number): Promise<ReadShotDto[]>;
    findExistingShotCode(code: string): Promise<boolean>;
    insertShot(createShotDto: CreateShotDto[]): Promise<string | null>;
    updateShot(id: number, category_id: number, updateShotDto: UpdateShotDto): Promise<string | null>;
    deleteShot(id: number, category_id: number): Promise<string | null>;
}
