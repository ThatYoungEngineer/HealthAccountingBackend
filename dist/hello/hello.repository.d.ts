import { DbService } from 'src/common/config/database/db.service';
export declare class HelloRepository {
    private sqlDb;
    constructor(sqlDb: DbService);
    get(): string;
}
