import { XrayRepository } from '../xray.repository';
import { CreateXrayDto } from '../dto/create-xray.dto';
export default class CreateXrayUseCase {
    private xrayRepository;
    constructor(xrayRepository: XrayRepository);
    createXray(createXrayDto: CreateXrayDto[]): Promise<string | null>;
}
