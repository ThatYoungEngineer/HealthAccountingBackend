import { XrayRepository } from '../xray.repository';
export default class DeleteXrayUseCase {
    private xrayRepository;
    constructor(xrayRepository: XrayRepository);
    deleteXray(id: number, category_id: number): Promise<string | null>;
}
