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
import { TangPoetryWhereUniqueInput } from "./TangPoetryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TangPoetryUpdateInput } from "./TangPoetryUpdateInput";

@ArgsType()
class UpdateTangPoetryArgs {
  @ApiProperty({
    required: true,
    type: () => TangPoetryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TangPoetryWhereUniqueInput)
  @Field(() => TangPoetryWhereUniqueInput, { nullable: false })
  where!: TangPoetryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TangPoetryUpdateInput,
  })
  @ValidateNested()
  @Type(() => TangPoetryUpdateInput)
  @Field(() => TangPoetryUpdateInput, { nullable: false })
  data!: TangPoetryUpdateInput;
}

export { UpdateTangPoetryArgs as UpdateTangPoetryArgs };
