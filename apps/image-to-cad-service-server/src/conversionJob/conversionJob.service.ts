import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversionJobServiceBase } from "./base/conversionJob.service.base";

@Injectable()
export class ConversionJobService extends ConversionJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
