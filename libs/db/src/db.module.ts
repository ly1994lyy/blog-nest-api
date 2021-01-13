import { Category } from './models/category.model';
import { User } from './models/user.model';
import { Global, Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';

const models = TypegooseModule.forFeature([User, Category]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/blog', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
