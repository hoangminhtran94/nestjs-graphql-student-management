import { DataSource, Repository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { Injectable } from "@nestjs/common";
import { v4 } from "uuid";
import { CreateLessonInput } from "./lesson.input";

@Injectable()
export class LessonRepository extends Repository<Lesson> {
  constructor(private dataSource: DataSource) {
    super(Lesson, dataSource.createEntityManager());
  }

  async createALesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const lesson = this.create({
      id: v4(),
      startDate: createLessonInput.startDate,
      name: createLessonInput.name,
      endDate: createLessonInput.endDate,
    });
    return await this.save(lesson);
  }
}
