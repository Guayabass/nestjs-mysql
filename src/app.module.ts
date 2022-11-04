import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // __dirname el root del proyecto, /** seria cualquier carpeta y /* cualquier archivo en cualquier carpeta
      synchronize: true // para que cualquier cambio en clases sea reflejado en la bd
    }),
    UsersModule,
    PostsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
