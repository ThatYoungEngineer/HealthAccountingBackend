import GetLabsUseCase from './usecases/get-labs.usecase';
import CreateLabsUseCase from './usecases/create-labs.usecase';
import UpdateLabsUseCase from './usecases/update-labs.usecase';
import DeleteLabsUseCase from './usecases/delete-labs.usecase';
import { CreateLabsDto } from './dto/create-labs.dto';
import { UpdateLabsDto } from './dto/update-labs.dto';
import { ReadLabsDto } from './dto/read-labs.dto';
export declare class LabsController {
    private getLabsUseCase;
    private createLabsUseCase;
    private updateLabsUseCase;
    private deleteLabsUseCase;
    constructor(getLabsUseCase: GetLabsUseCase, createLabsUseCase: CreateLabsUseCase, updateLabsUseCase: UpdateLabsUseCase, deleteLabsUseCase: DeleteLabsUseCase);
    get(): Promise<ReadLabsDto[]>;
    getByCategoryID(category_id: number): Promise<ReadLabsDto[]>;
    post(createLabsDto: CreateLabsDto[]): Promise<string>;
    put(id: number, category_id: number, updateLabsDto: UpdateLabsDto): Promise<string>;
    deete(id: number, category_id: number): Promise<string>;
}
