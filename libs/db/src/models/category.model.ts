import { ApiProperty } from "@nestjs/swagger";
import { ModelOptions, prop } from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Category {
  @ApiProperty({ title: "分类名" })
  @prop({
    required: true,
    maxlength: [15, "最大长度不能大于15"],
  })
  name: string;
}
