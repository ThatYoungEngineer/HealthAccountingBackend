import GetHelloUseCase from './usecases/get-hello.usecase';
export declare class HelloController {
    private getHelloUseCase;
    constructor(getHelloUseCase: GetHelloUseCase);
    get(): Promise<string>;
}
