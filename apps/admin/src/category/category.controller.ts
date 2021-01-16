import { Controller } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { Crud } from "nestjs-mongoose-crud";
import { Category } from "@libs/db/models/category.model";
import { ApiTags } from "@nestjs/swagger";

@Controller("category")
@ApiTags("分类")
@Crud({
  model: Category,
})
export class CategoryController {
  constructor(@InjectModel(Category) private readonly model) {}
}
