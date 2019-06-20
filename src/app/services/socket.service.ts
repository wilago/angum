import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  currentCoin = this.socket.fromEvent<string>('coin');
  currentBill = this.socket.fromEvent<string>('bill');

  constructor(private socket: Socket) { }

  public startMonedero() {
    console.log('emit start_monedero');
    this.socket.emit('start_monedero');
  }

  public startBill() {
    console.log('emit start_bill');
    this.socket.emit('start_bill');
  }


}
