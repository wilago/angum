
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EchoServiceService } from 'src/app/services/echo-service.service';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css']
})

export class EchoComponent implements OnInit, OnDestroy {

  msg: Observable<string[]>;
  currentMsg: string;
  private msgSub: Subscription;

  constructor(private echoServiceService: EchoServiceService) { }

  ngOnInit() {
    this.msgSub = this.echoServiceService.currentMsg.pipe(
      startWith('Espere')
    ).subscribe((msg: any) => {
      this.currentMsg = msg;
      setTimeout(() => {
        this.echoServiceService.sendMessage('hola_echo');
      }, 2500);

    });
  }

  public onSendMsg() {
    this.echoServiceService.sendMessage('abc');
  }

  ngOnDestroy() {
    this.msgSub.unsubscribe();
  }


}