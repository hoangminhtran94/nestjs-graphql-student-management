import { Injectable } from "@nestjs/common";
import { LessonRepository } from "./lesson.repository";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";

@Injectable()
export class LessonService {
  constructor(private lessonRepository: LessonRepository) {}
  createALesson(createLessonInput: CreateLessonInput) {
    return this.lessonRepository.createALesson(createLessonInput);
  }

  getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ where: { id } });
  }
}
