import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CadFileServiceBase } from "./base/cadFile.service.base";

@Injectable()
export class CadFileService extends CadFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
