/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversionJobWhereInput } from "./ConversionJobWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ConversionJobCountArgs {
  @ApiProperty({
    required: false,
    type: () => ConversionJobWhereInput,
  })
  @Field(() => ConversionJobWhereInput, { nullable: true })
  @Type(() => ConversionJobWhereInput)
  where?: ConversionJobWhereInput;
}

export { ConversionJobCountArgs as ConversionJobCountArgs };
