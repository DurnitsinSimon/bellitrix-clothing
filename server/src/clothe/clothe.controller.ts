import { Body, Controller, Get, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { Clothe } from './clothe.model';
import { ClotheService } from './clothe.service';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';

@Controller('clothe')
export class ClotheController {
    constructor(private readonly clotheService: ClotheService) {}

    @Post()
    @UseInterceptors(FileInterceptor('photo'))
    async create(@Body() dto: CreateClotheDto, @UploadedFile() photo: Express.Multer.File): Promise<Clothe> {
        return this.clotheService.create(dto, photo);
    }

    @Get('getAll')
    async getAll(): Promise<Clothe[]> {
        return this.clotheService.getAll();
    }

    @Get('findById')
    async findById(@Query('id') id: ObjectId): Promise<Clothe> {
        return this.clotheService.findById(id);
    }

    @Get('soldOut')
    async soldOut(@Query('id') id: ObjectId): Promise<Clothe> {
        return this.clotheService.soldOut(id);
    }

    @Put('update')
    async update(@Body() dto: UpdateClotheDto): Promise<Clothe> {
        return this.clotheService.update(dto);
    }
}
