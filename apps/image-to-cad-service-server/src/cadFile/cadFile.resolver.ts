import * as graphql from "@nestjs/graphql";
import { CadFileResolverBase } from "./base/cadFile.resolver.base";
import { CadFile } from "./base/CadFile";
import { CadFileService } from "./cadFile.service";

@graphql.Resolver(() => CadFile)
export class CadFileResolver extends CadFileResolverBase {
  constructor(protected readonly service: CadFileService) {
    super(service);
  }
}
