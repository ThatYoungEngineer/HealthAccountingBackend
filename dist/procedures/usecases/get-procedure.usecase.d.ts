import { ProcedureRepository } from '../procedure.repository';
import { ReadProcedureDto } from '../dto/read-procedures.dto';
export default class GetProcedureUseCase {
    private procedureRepository;
    constructor(procedureRepository: ProcedureRepository);
    getProceduresByCategoryID(category_id: number): Promise<ReadProcedureDto[]>;
    getProcedures(): Promise<ReadProcedureDto[]>;
}
