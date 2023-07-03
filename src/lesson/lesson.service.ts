import { Injectable } from "@nestjs/common";
import { LessonRepository } from "./lesson.repository";
import { Lesson } from "./lesson.entity";
import { AssignStudentsToLessonInput, CreateLessonInput } from "./lesson.input";

@Injectable()
export class LessonService {
  constructor(private lessonRepository: LessonRepository) {}
  createALesson(createLessonInput: CreateLessonInput) {
    return this.lessonRepository.createALesson(createLessonInput);
  }

  getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ where: { id } });
  }
  getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async assignStudentsToLesson(
    assignStudentsToLessonInput: AssignStudentsToLessonInput
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({
      where: { id: assignStudentsToLessonInput.lessonId },
    });
    lesson.students = [
      ...(lesson.students ? lesson.students : []),
      ...assignStudentsToLessonInput.studentIds,
    ];
    return this.lessonRepository.save(lesson);
  }
}
