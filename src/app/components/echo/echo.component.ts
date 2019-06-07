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
    this.msgSub = this.echoServiceService.currentMsg.subscribe(msg => this.currentMsg = msg);

    this.msgSub = this.echoServiceService.currentMsg.pipe(
      startWith('Select an existing document or create a new one to get started')
    ).subscribe(msg => this.currentMsg = msg);

  }

  public onSendMsg() {
    this.echoServiceService.sendMessage('abc');
  }

  ngOnDestroy() {
    this.msgSub.unsubscribe();
  }


}
