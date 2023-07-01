import { Injectable } from "@nestjs/common";
import { LessonRepository } from "./lesson.repository";

@Injectable()
export class LessonService {
  constructor(private lessonRepository: LessonRepository) {}
  createALesson(name: string, startDate: string, endDate: string) {
    return this.lessonRepository.createALesson(name, startDate, endDate);
  }
}
