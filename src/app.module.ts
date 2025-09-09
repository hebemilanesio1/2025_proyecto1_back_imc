import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImcModule } from './module/imc/imc.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImcEntity } from './module/imc/entities/imc.entity';
import * as dotenv from 'dotenv';

dotenv.config(); // carga variables del .env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || '',
      entities: [ImcEntity],
      synchronize: false,
    }),
    ImcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
