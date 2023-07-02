import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query(() => LessonType)
  async lesson(@Args("id") id: string) {
    return await this.lessonService.getLesson(id);
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args("createLessonInput") createLessonInput: CreateLessonInput
  ) {
    return await this.lessonService.createALesson(createLessonInput);
  }
}
