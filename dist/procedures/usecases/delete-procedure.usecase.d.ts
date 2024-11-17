import { ProcedureRepository } from '../procedure.repository';
export default class DeleteProcedureUseCase {
    private procedureRepository;
    constructor(procedureRepository: ProcedureRepository);
    deleteProcedure(id: number, category_id: number): Promise<string | null>;
}
