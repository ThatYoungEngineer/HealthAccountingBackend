import { XrayRepository } from '../xray.repository';
import { ReadXrayDto } from '../dto/read-xray.dto';
export default class GetXrayUseCase {
    private xrayRepository;
    constructor(xrayRepository: XrayRepository);
    getXrays(): Promise<ReadXrayDto[]>;
    getXrayByID(id: number): Promise<ReadXrayDto[]>;
    getXrayByCategoryID(category_id: number): Promise<ReadXrayDto[]>;
}
