import { ApiTags } from "@nestjs/swagger";
import { Blog } from "@libs/db/models/blog.model";
import { Controller } from "@nestjs/common";
import { Crud } from "nestjs-mongoose-crud";
import { InjectModel } from "nestjs-typegoose";

@Controller("blog")
@ApiTags("博客")
@Crud({
  model: Blog,
})
export class BlogController {
  constructor(@InjectModel(Blog) private readonly model) {}
}
