import { ProcedureRepository } from '../procedure.repository';
import { UpdateProcedureDto } from '../dto/update-procedure.dto';
export default class UpdateProcedureUseCase {
    private procedureRepository;
    constructor(procedureRepository: ProcedureRepository);
    updateProcedure(id: number, category_id: number, updateProcedureDto: UpdateProcedureDto): Promise<string | null>;
}
