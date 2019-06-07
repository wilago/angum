import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class EchoServiceService {

  currentMsg = this.socket.fromEvent<string>('message');

  constructor(private socket: Socket) { }

  public sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  public getMessage() {
    return this.socket
      .fromEvent('message');
  }
}
