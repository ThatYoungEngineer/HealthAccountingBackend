import { DbService } from 'src/common/config/database/db.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { ReadProcedureDto } from './dto/read-procedures.dto';
export declare class ProcedureRepository {
    private Db;
    constructor(Db: DbService);
    getProcedures(): Promise<ReadProcedureDto[]>;
    getProcedureByID(id: number): Promise<ReadProcedureDto[]>;
    getProceduresByCategoryID(category_id: number): Promise<ReadProcedureDto[]>;
    insertProcedure(createProcedureDto: CreateProcedureDto[]): Promise<string | null>;
    updateProcedure(id: number, category_id: number, updateProcedureDto: UpdateProcedureDto): Promise<string | null>;
    findExistingProcedureCode(code: string): Promise<boolean>;
    deleteProcedure(id: number, category_id: number): Promise<string | null>;
}
