import { HttpStatus, Injectable } from '@nestjs/common';
import { AppException } from 'src/common/exception/app.exception';
import { ProcedureRepository } from '../procedure.repository';

@Injectable()
export default class DeleteProcedureUseCase {
  constructor(private procedureRepository: ProcedureRepository) {}

  async deleteProcedure(id: number, category_id:number): Promise<string | null> {
    try{
    const result = await this.procedureRepository.deleteProcedure(id, category_id);

    return result;
  } catch (error) {

    const appException = new AppException(
      'Internal server error',
      'An unexpected error occurred',
      HttpStatus.INTERNAL_SERVER_ERROR,
      true,
    );

    // Throw the custom exception
    throw appException;
  
  
  }
}
}
