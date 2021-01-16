import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { UsersModule } from "./users/users.module";
import { CategoryModule } from "./category/category.module";
import { BlogModule } from "./blog/blog.module";
import { CommonModule } from "libs/common/src";
import { MulterModule } from "@nestjs/platform-express";

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          dest: "uploads",
        };
      },
    }),
    UsersModule,
    CategoryModule,
    BlogModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
