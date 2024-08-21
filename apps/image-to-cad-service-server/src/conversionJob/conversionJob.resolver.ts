import * as graphql from "@nestjs/graphql";
import { ConversionJobResolverBase } from "./base/conversionJob.resolver.base";
import { ConversionJob } from "./base/ConversionJob";
import { ConversionJobService } from "./conversionJob.service";

@graphql.Resolver(() => ConversionJob)
export class ConversionJobResolver extends ConversionJobResolverBase {
  constructor(protected readonly service: ConversionJobService) {
    super(service);
  }
}
