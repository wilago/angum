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
  currentBill: string;
  coin: number;
  bill: number;
  private coinSub: Subscription;
  private billSub: Subscription;
  totalCoins = 0;
  total = 0;
  totalBills = 0;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.startMonedero();
    this.coinListener();

    this.socketService.startBill();
    this.billListener();
  }

  coinListener() {
    this.coinSub = this.socketService.currentCoin
      .subscribe((coin: any) => {
        this.currentCoin = coin;
        console.log('coin: ', coin);
        this.coin = coin.coin;

        if (this.coin !== undefined) {
          this.totalCoins = this.coin + this.totalCoins;
        }

        console.log('total_coins: ', this.totalCoins);
        this.total = this.totalCoins;
      });
  }


  billListener() {
    this.billSub = this.socketService.currentBill
      .subscribe((bill: any) => {
        this.currentBill = bill;
        console.log('bill: ', bill);
        this.bill = bill.bill;

        if (this.bill !== undefined) {
          this.totalBills = this.bill + this.totalBills;
        }

        console.log('totalBills: ', this.totalBills);
        this.total = this.totalBills;

      });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.coinSub.unsubscribe();
    this.billSub.unsubscribe();
  }

}
