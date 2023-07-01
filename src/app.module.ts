import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { LessonModule } from "./lesson/lesson.module";
import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      TypeOrmModule
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
})
export class AppModule {}
