import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  currentCoin = this.socket.fromEvent<string>('coin');

  constructor(private socket: Socket) { }

  public startMonedero() {
    console.log('emit start_monedero');
    this.socket.emit('start_monedero');
    this.socket.emit('coin');
  }

  public sendMessage(msg: string) {
    this.socket.emit('message', msg);
    this.socket.emit('coin');
  }

  public getMessage() {
    return this.socket
      .fromEvent('message');
  }
}
