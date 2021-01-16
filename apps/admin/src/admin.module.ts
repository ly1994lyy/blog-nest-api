import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [DbModule, UsersModule, CategoryModule, BlogModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
