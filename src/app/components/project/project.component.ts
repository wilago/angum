import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  msg: Observable<string[]>;
  currentCoin: string;
  coin: number;
  private msgSub: Subscription;
  counter = 0;
  total = 0;

  constructor(private socketService: SocketService) { }

  ngOnInit() {

    this.msgSub = this.socketService.currentCoin.pipe(
      startWith('Espere')
    ).subscribe((coin: any) => {
      this.currentCoin = coin;
      console.log('msg: ', coin);
      this.coin = coin.coin;

      console.log('msg_coin: ', this.coin);
      if (this.coin !== undefined) {
        this.total = this.coin + this.total;
      }

      // this.total = Number(this.total + Number(this.coin));
      this.counter++;
      console.log('total: ', this.total);


      if (this.counter > 5) {
        this.msgSub.unsubscribe();
      }

      setTimeout(() => {
        this.socketService.sendMessage('hola_echo');
      }, 3000);

    });

    this.socketService.startMonedero();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.msgSub.unsubscribe();
  }

}
