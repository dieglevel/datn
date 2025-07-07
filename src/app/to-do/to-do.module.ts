import { Module } from "@nestjs/common";
import { ToDoService } from "./to-do.service";
import { ToDoController } from "./to-do.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule {}
