import { Category } from "./category.model";
import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop, Ref } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Blog {
  @ApiProperty({ title: "文章标题" })
  @prop({ required: true, max: 20 })
  title: string;

  @ApiProperty({ title: "文章内容" })
  @prop({ required: true })
  body: string;

  @ApiProperty({ title: "分类" })
  @prop({ required: true, ref: "Category" })
  cate: Ref<Category>[];
}
