import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Category {
  @ApiProperty({ title: '分类名' })
  @prop()
  name: string;
}
