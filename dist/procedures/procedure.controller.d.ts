import GetProcedureUseCase from './usecases/get-procedure.usecase';
import UpdateProcedureUseCase from './usecases/update-procedure.usecase';
import CreateProcedureUseCase from './usecases/create-procedure.usecase';
import DeleteProcedureUseCase from './usecases/delete-procedure.usecase';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { ReadProcedureDto } from './dto/read-procedures.dto';
export declare class ProcedureController {
    private getProcedureUseCase;
    private createProcedureUseCase;
    private updateProecdureUseCase;
    private deleteProcedureUseCase;
    constructor(getProcedureUseCase: GetProcedureUseCase, createProcedureUseCase: CreateProcedureUseCase, updateProecdureUseCase: UpdateProcedureUseCase, deleteProcedureUseCase: DeleteProcedureUseCase);
    get(): Promise<ReadProcedureDto[]>;
    getByCategoryID(category_id: number): Promise<ReadProcedureDto[]>;
    post(createProcedureDto: CreateProcedureDto[]): Promise<string>;
    put(id: number, category_id: number, updateProcedureDto: UpdateProcedureDto): Promise<string>;
    deete(id: number, category_id: number): Promise<string>;
}
