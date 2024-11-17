import { DbService } from 'src/common/config/database/db.service';
import { CreateXrayDto } from './dto/create-xray.dto';
import { UpdateXrayDto } from './dto/update-xray.dto';
import { ReadXrayDto } from './dto/read-xray.dto';
export declare class XrayRepository {
    private Db;
    constructor(Db: DbService);
    getXrayByCategoryID(category_id: number): Promise<ReadXrayDto[]>;
    getXrayByID(id: number): Promise<ReadXrayDto[]>;
    getXrays(): Promise<ReadXrayDto[]>;
    findExistingXrayCode(code: string, category_id: number): Promise<boolean>;
    insertXrays(createXrayDtos: CreateXrayDto[]): Promise<string | null>;
    insertXray(createXrayDto: CreateXrayDto): Promise<string | null>;
    updateXray(id: number, category_id: number, updateXrayDto: UpdateXrayDto): Promise<string | null>;
    deleteXray(id: number, category_id: number): Promise<string | null>;
}
