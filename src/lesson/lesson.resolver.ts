import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query(() => LessonType)
  lesson() {
    return {
      id: "1",
      name: "Physics",
      startDate: "",
      endDate: "",
    };
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args("name") name: string,
    @Args("startDate") startDate: string,
    @Args("endDate") endDate: string
  ) {
    return await this.lessonService.createALesson(name, startDate, endDate);
  }
}
