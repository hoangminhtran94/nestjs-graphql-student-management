import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { AssignStudentsToLessonInput, CreateLessonInput } from "./lesson.input";
import { StudentService } from "src/student/student.service";
import { Lesson } from "./lesson.entity";
@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService
  ) {}
  @Query(() => [LessonType])
  async lessons() {
    return await this.lessonService.getLessons();
  }
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

  @Mutation(() => LessonType)
  async assignStudentsToLesson(
    @Args("assignStudentsToLessonInput")
    assignStudentsToLessonInput: AssignStudentsToLessonInput
  ) {
    return await this.lessonService.assignStudentsToLesson(
      assignStudentsToLessonInput
    );
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
