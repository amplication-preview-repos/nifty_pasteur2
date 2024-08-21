import { Module } from "@nestjs/common";
import { CadFileModuleBase } from "./base/cadFile.module.base";
import { CadFileService } from "./cadFile.service";
import { CadFileController } from "./cadFile.controller";
import { CadFileResolver } from "./cadFile.resolver";

@Module({
  imports: [CadFileModuleBase],
  controllers: [CadFileController],
  providers: [CadFileService, CadFileResolver],
  exports: [CadFileService],
})
export class CadFileModule {}
