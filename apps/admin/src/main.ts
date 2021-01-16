import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AdminModule } from "./admin.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);
  app.enableCors();
  app.useStaticAssets("uploads", {
    prefix: "/uploads",
  });

  const options = new DocumentBuilder()
    .setTitle("博客系统后台接口")
    .setDescription("The cats API description")
    .setVersion("1.0")
    .addTag("cats")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api-admin", app, document);

  await app.listen(process.env.ADMIN_PORT);
}
bootstrap();
