import { Injectable } from "@nestjs/common";
import { StudentRepository } from "./student.repository";
import { Student } from "./student.entity";
import { CreateStudentInput } from "./student.input";
import { v4 } from "uuid";
import { In } from "typeorm";

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  getStudentById(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }
  getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const student = this.studentRepository.create({
      id: v4(),
      firstName: createStudentInput.firstName,
      lastName: createStudentInput.lastName,
    });
    return this.studentRepository.save(student);
  }
  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    // const promises: Promise<Student>[] = [];
    // console.log(In(studentIds));
    // studentIds.forEach((id) => {
    //   promises.push(this.studentRepository.findOne({ where: { id } }));
    // });

    // return await Promise.all(promises);

    return await this.studentRepository.find({
      where: { id: { $in: studentIds } as any },
    });
  }
}
