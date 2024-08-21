import { Module } from "@nestjs/common";
import { ConversionJobModuleBase } from "./base/conversionJob.module.base";
import { ConversionJobService } from "./conversionJob.service";
import { ConversionJobController } from "./conversionJob.controller";
import { ConversionJobResolver } from "./conversionJob.resolver";

@Module({
  imports: [ConversionJobModuleBase],
  controllers: [ConversionJobController],
  providers: [ConversionJobService, ConversionJobResolver],
  exports: [ConversionJobService],
})
export class ConversionJobModule {}
