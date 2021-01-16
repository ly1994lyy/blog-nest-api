import { Blog } from "./models/blog.model";
import { Category } from "./models/category.model";
import { User } from "./models/user.model";
import { Global, Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { DbService } from "./db.service";

const models = TypegooseModule.forFeature([User, Category, Blog]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB_URL,
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        };
      },
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
