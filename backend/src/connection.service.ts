import {
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  namespace: 'connection',
  transports: ['websocket'],
})
export class ConnectionService implements OnGatewayInit, OnGatewayConnection {
  afterInit() {
    // console.log('Gateway initialized');
  }

  handleConnection(client: Socket) {
    console.log('Client connected', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string) {
    client.emit('message', payload);
  }
}
