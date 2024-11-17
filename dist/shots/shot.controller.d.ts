import GetShotUseCase from './usecases/get-shot.usecase';
import CreateShotUseCase from './usecases/create-shot.usecase';
import UpdateShotUseCase from './usecases/update-shot.usecase';
import DeleteShotUseCase from './usecases/delete-shot.usecase';
import { CreateShotDto } from './dto/create-shot.dto';
import { UpdateShotDto } from './dto/update-shot.dto';
import { ReadShotDto } from './dto/read-shot.dto';
export declare class ShotController {
    private getShotUseCase;
    private createShotUseCase;
    private updateShotUseCase;
    private deleteShotUseCase;
    constructor(getShotUseCase: GetShotUseCase, createShotUseCase: CreateShotUseCase, updateShotUseCase: UpdateShotUseCase, deleteShotUseCase: DeleteShotUseCase);
    get(): Promise<ReadShotDto[]>;
    getByCategoryID(category_id: number): Promise<ReadShotDto[]>;
    post(createShotDto: CreateShotDto[]): Promise<string | null>;
    put(id: number, category_id: number, updateShotDto: UpdateShotDto): Promise<string>;
    deete(id: number, category_id: number): Promise<string>;
}
