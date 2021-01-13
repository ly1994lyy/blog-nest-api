import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [DbModule, UsersModule, CategoryModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
