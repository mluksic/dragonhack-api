import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
        .setTitle('DragonHack API: Agriculture API')
        .setDescription('API for managing agriculture devices')
        .setVersion('1.0')
        .addTag('iot')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/docs', app, document);

    await app.listen(3000);
}
bootstrap();
