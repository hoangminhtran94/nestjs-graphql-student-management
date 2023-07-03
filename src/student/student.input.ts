import { Field, InputType } from "@nestjs/graphql";
import { MinLength, MaxLength } from "class-validator";

@InputType()
export class CreateStudentInput {
  @Field()
  @MinLength(3)
  @MaxLength(20)
  firstName: string;

  @Field()
  @MinLength(3)
  @MaxLength(20)
  lastName: string;
}
