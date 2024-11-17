import GetXrayUseCase from './usecases/get-xray.usecase';
import CreateXrayUseCase from './usecases/create-xray.usecase';
import UpdateXrayUseCase from './usecases/update-xray.usecase';
import DeleteXrayUseCase from './usecases/delete-xray.usecase';
import { CreateXrayDto } from './dto/create-xray.dto';
import { UpdateXrayDto } from './dto/update-xray.dto';
import { ReadXrayDto } from './dto/read-xray.dto';
export declare class XrayController {
    private getXrayUseCase;
    private createXrayUseCase;
    private updateXrayUseCase;
    private deleteXrayUseCase;
    constructor(getXrayUseCase: GetXrayUseCase, createXrayUseCase: CreateXrayUseCase, updateXrayUseCase: UpdateXrayUseCase, deleteXrayUseCase: DeleteXrayUseCase);
    get(): Promise<ReadXrayDto[]>;
    getByID(id: number): Promise<ReadXrayDto[]>;
    getByCategoryID(category_id: number): Promise<ReadXrayDto[]>;
    addXray(createXrayDto: CreateXrayDto[]): Promise<string | null>;
    put(id: number, category_id: number, updateXrayDto: UpdateXrayDto): Promise<string>;
    deete(id: number, category_id: number): Promise<string>;
}
