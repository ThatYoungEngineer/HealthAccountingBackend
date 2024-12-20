import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Delete,
    Param,
  } from '@nestjs/common';
  import GetXrayUseCase from './usecases/get-xray.usecase';
  import CreateXrayUseCase from './usecases/create-xray.usecase';
  import UpdateXrayUseCase from './usecases/update-xray.usecase';
  import DeleteXrayUseCase from './usecases/delete-xray.usecase';
  import { CreateXrayDto } from './dto/create-xray.dto';
  import { UpdateXrayDto } from './dto/update-xray.dto';
import { ReadXrayDto } from './dto/read-xray.dto';
  
  @Controller('xrays')
  export class XrayController {
    constructor(private getXrayUseCase: GetXrayUseCase, private createXrayUseCase: CreateXrayUseCase,
      private updateXrayUseCase: UpdateXrayUseCase, private deleteXrayUseCase: DeleteXrayUseCase){}

    @Get()
    async get(): Promise<ReadXrayDto[]> {
      return this.getXrayUseCase.getXrays();
    }

    @Get(':id')
    async getByID(@Param('id') id: number): Promise<ReadXrayDto[]> {
      return this.getXrayUseCase.getXrayByID(id);
    }

    @Get('getByCategoryID/:category_id')
    async getByCategoryID(@Param('category_id') category_id: number): Promise<ReadXrayDto[]> {
      return this.getXrayUseCase.getXrayByCategoryID(category_id);
    }

    @Post()
    async addXray(@Body() createXrayDto: CreateXrayDto[]): Promise<string | null>{
      try {
        return await this.createXrayUseCase.createXray(createXrayDto);
      } catch (error) {
        return error;
      }
    }
    @Put(':id/:category_id')
    async put(
      @Param('id') id: number,
      @Param('category_id') category_id: number,
      @Body() updateXrayDto: UpdateXrayDto
    ): Promise<string> {
      try {
        return await this.updateXrayUseCase.updateXrays(id, category_id, updateXrayDto);
      } catch (error) {
        return 'Error during update: ' + error;
      }
    }

    @Delete(':id/:category_id')
    async deete(@Param('id') id: number,
    @Param('category_id') category_id: number): Promise<string>{
      try {
        return await this.deleteXrayUseCase.deleteXray(id, category_id);
      } catch (error) {
        return 'Error during delete:' +  error;
      }
    }

  }
  