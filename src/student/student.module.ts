import { Module } from "@nestjs/common";
import { StudentService } from "./student.service";
import { StudentResolver } from "./student.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { StudentRepository } from "./student.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService, StudentResolver, StudentRepository],
  exports: [StudentService],
})
export class StudentModule {}
