import { HelloRepository } from '../hello.repository';
export default class GetHelloUseCase {
    private helloRepository;
    constructor(helloRepository: HelloRepository);
    execute(): Promise<string | null>;
}
