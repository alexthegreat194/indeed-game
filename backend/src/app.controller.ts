import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index() {
    return 'Hello World!';
  }

  @Get("/wstest")
  @Render('wstest')
  wsTest() {
    return {
      title: 'Indeed Game - WebSocket Test',
    };
  }
}
