import { Category } from "./category.model";
import { ApiProperty } from "@nestjs/swagger";
import { prop, Ref } from "@typegoose/typegoose";

export class Blog {
  @ApiProperty({ title: "文章标题" })
  @prop({ required: true })
  title: string;

  @ApiProperty({ title: "文章内容" })
  @prop({ required: true })
  body: string;

  @ApiProperty({ title: "分类" })
  @prop({ required: true, ref: "Category" })
  cate: Ref<Category>[];
}
