import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderComponent } from '../loader/loader.component';
import { environment as env } from 'src/environments/environment';

interface ParametrosGetCode {
  tiempo: number;
  valor: number;
  celular: any;
}


@Component({
  selector: 'app-access-coupon',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './access-coupon.component.html',
  styleUrls: [
    '../../../../node_modules/simple-keyboard/build/css/index.css',
    './access-coupon.component.scss',
  ]
})
export class AccessCouponComponent implements AfterViewInit {
  value: any;
  keyboard: Keyboard;
  dialogRef: any;
  parametrosGetCode: ParametrosGetCode;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    public dialog: MatDialog) {

    this.route.queryParams.subscribe((params: any) => {
      console.log('params: ', params);
      this.parametrosGetCode = {
        celular: 0,
        valor: params.valor_total,
        tiempo: params.tiempo_total
      };
    });

  }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      layout: {
        default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}'],
      },
      theme: 'hg-theme-default hg-layout-numeric numeric-theme',
      buttonTheme: [
        {
          class: 'hg-send',
          buttons: '{enter}'
        }
      ],
      display: {
        '{bksp}': 'Borrar',
        '{enter}': 'Envíar',
      },

      onChange: input => this.onChange(input),
      onKeyPress: buttons => this.onKeyPress(buttons)
    });
  }

  onChange = (input: string) => {
    // console.log('Input changed: ', input);
    if (input.length <= 10) {
      this.value = input;
    }
  }

  onKeyPress = (button: string) => {
    // console.log('Button pressed: ', button);
    if (button === '{enter}') {
      if (this.value.length >= 10) {
        this.getCode();
      } else {
        alert('Completa el número de teléfono');
      }
    }
  }

  private onShowLoader() {
    this.dialogRef = this.dialog.open(LoaderComponent, {
      height: '200px',
      width: '150px',
    });
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  }

  public onGoToShowcupon() {
    this.getCode();
  }

  private getCode() {
    console.log('this.value: ', this.value);

    this.parametrosGetCode.celular = Number(this.value);
    console.log('parametrosGetCode: ', this.parametrosGetCode);

    this.onShowLoader();
    this.apiService.getCode(this.parametrosGetCode)
      .subscribe((code: any) => {
        console.log('Response_code: ', code);

        const urlCode = `${env.endPointConnect}login?username=${code.code}`;

        this.dialogRef.close();
        this.router.navigate(['/show-coupon'], { queryParams: { url: urlCode } });
      });
  }

}
