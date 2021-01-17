import { ApiProperty } from "@nestjs/swagger";
import { ModelOptions, prop } from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ title: "用户名", example: "user1" })
  @prop()
  username: string;

  @ApiProperty({ title: "密码", example: "123" })
  @prop()
  password: string;
}
