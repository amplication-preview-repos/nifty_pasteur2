import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversionJobService } from "./conversionJob.service";
import { ConversionJobControllerBase } from "./base/conversionJob.controller.base";

@swagger.ApiTags("conversionJobs")
@common.Controller("conversionJobs")
export class ConversionJobController extends ConversionJobControllerBase {
  constructor(protected readonly service: ConversionJobService) {
    super(service);
  }
}
