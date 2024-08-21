/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ConversionJob } from "./ConversionJob";
import { ConversionJobCountArgs } from "./ConversionJobCountArgs";
import { ConversionJobFindManyArgs } from "./ConversionJobFindManyArgs";
import { ConversionJobFindUniqueArgs } from "./ConversionJobFindUniqueArgs";
import { CreateConversionJobArgs } from "./CreateConversionJobArgs";
import { UpdateConversionJobArgs } from "./UpdateConversionJobArgs";
import { DeleteConversionJobArgs } from "./DeleteConversionJobArgs";
import { CadFile } from "../../cadFile/base/CadFile";
import { Image } from "../../image/base/Image";
import { ConversionJobService } from "../conversionJob.service";
@graphql.Resolver(() => ConversionJob)
export class ConversionJobResolverBase {
  constructor(protected readonly service: ConversionJobService) {}

  async _conversionJobsMeta(
    @graphql.Args() args: ConversionJobCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ConversionJob])
  async conversionJobs(
    @graphql.Args() args: ConversionJobFindManyArgs
  ): Promise<ConversionJob[]> {
    return this.service.conversionJobs(args);
  }

  @graphql.Query(() => ConversionJob, { nullable: true })
  async conversionJob(
    @graphql.Args() args: ConversionJobFindUniqueArgs
  ): Promise<ConversionJob | null> {
    const result = await this.service.conversionJob(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ConversionJob)
  async createConversionJob(
    @graphql.Args() args: CreateConversionJobArgs
  ): Promise<ConversionJob> {
    return await this.service.createConversionJob({
      ...args,
      data: {
        ...args.data,

        cadFile: args.data.cadFile
          ? {
              connect: args.data.cadFile,
            }
          : undefined,

        image: args.data.image
          ? {
              connect: args.data.image,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ConversionJob)
  async updateConversionJob(
    @graphql.Args() args: UpdateConversionJobArgs
  ): Promise<ConversionJob | null> {
    try {
      return await this.service.updateConversionJob({
        ...args,
        data: {
          ...args.data,

          cadFile: args.data.cadFile
            ? {
                connect: args.data.cadFile,
              }
            : undefined,

          image: args.data.image
            ? {
                connect: args.data.image,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ConversionJob)
  async deleteConversionJob(
    @graphql.Args() args: DeleteConversionJobArgs
  ): Promise<ConversionJob | null> {
    try {
      return await this.service.deleteConversionJob(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => CadFile, {
    nullable: true,
    name: "cadFile",
  })
  async getCadFile(
    @graphql.Parent() parent: ConversionJob
  ): Promise<CadFile | null> {
    const result = await this.service.getCadFile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Image, {
    nullable: true,
    name: "image",
  })
  async getImage(
    @graphql.Parent() parent: ConversionJob
  ): Promise<Image | null> {
    const result = await this.service.getImage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
