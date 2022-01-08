import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from 'src/file/file.module';
import { ClotheController } from './clothe.controller';
import { Clothe, ClotheSchema } from './clothe.model';
import { ClotheService } from './clothe.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clothe.name, schema: ClotheSchema }]),
    FileModule,
  ],
  controllers: [ClotheController],
  providers: [ClotheService],
})
export class ClotheModule {}
