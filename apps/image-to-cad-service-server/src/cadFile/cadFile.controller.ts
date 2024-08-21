import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CadFileService } from "./cadFile.service";
import { CadFileControllerBase } from "./base/cadFile.controller.base";

@swagger.ApiTags("cadFiles")
@common.Controller("cadFiles")
export class CadFileController extends CadFileControllerBase {
  constructor(protected readonly service: CadFileService) {
    super(service);
  }
}
