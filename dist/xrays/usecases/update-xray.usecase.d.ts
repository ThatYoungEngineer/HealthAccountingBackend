import { XrayRepository } from '../xray.repository';
import { UpdateXrayDto } from '../dto/update-xray.dto';
export default class UpdateXrayUseCase {
    private xrayRepository;
    constructor(xrayRepository: XrayRepository);
    updateXrays(id: number, category_id: number, updateXrayDto: UpdateXrayDto): Promise<string | null>;
}
