import { Injectable } from "@nestjs/common";
import { StudentRepository } from "./student.repository";
import { Student } from "./student.entity";
import { CreateStudentInput } from "./student.input";

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
      name: createStudentInput.name,
    });
    return this.studentRepository.save(student);
  }
}
