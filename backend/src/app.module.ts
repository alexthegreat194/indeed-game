import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConnectionService } from './connection.service';

@Module({
  controllers: [AppController],
  providers: [ConnectionService],
})
export class AppModule {}
