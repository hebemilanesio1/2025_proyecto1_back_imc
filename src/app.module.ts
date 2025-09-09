import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImcModule } from './module/imc/imc.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImcEntity } from './module/imc/entities/imc.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hebe456',
      database: 'imc_db',
      entities: [ImcEntity],
      synchronize: true, // sincroniza la BD automáticamente (solo desarrollo)
    }),
    ImcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
