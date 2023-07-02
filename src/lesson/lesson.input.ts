import { Field, InputType } from "@nestjs/graphql";
import { MinLength, IsDateString } from "class-validator";

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(1)
  name: string;
  @IsDateString()
  @Field()
  startDate: string;
  @IsDateString()
  @Field()
  endDate: string;
}
