import { CreateProcedureDto } from '../dto/create-procedure.dto';
import { ProcedureRepository } from '../procedure.repository';
export default class CreateProcedureUseCase {
    private procedureRepository;
    constructor(procedureRepository: ProcedureRepository);
    createProcedure(createProceduretDto: CreateProcedureDto[]): Promise<string | null>;
}
