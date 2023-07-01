import { DataSource, Repository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { Injectable } from "@nestjs/common";
import { v4 } from "uuid";

@Injectable()
export class LessonRepository extends Repository<Lesson> {
  constructor(private dataSource: DataSource) {
    super(Lesson, dataSource.createEntityManager());
  }

  async createALesson(
    name: string,
    startDate: string,
    endDate: string
  ): Promise<Lesson> {
    const lesson = this.create({ id: v4(), name, startDate, endDate });
    return await this.save(lesson);
  }
}
