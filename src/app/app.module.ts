import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChooseProjectComponent } from './components/choose-project/choose-project.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { AccessCouponComponent } from './components/access-coupon/access-coupon.component';
import { ShowCouponComponent } from './components/show-coupon/show-coupon.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment as env } from 'src/environments/environment';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';
import { EchoComponent } from './components/echo/echo.component';

const config: SocketIoConfig = { url: env.endPointSocket, options: {} };

// import { OwlModule } from 'ngx-owl-carousel';
// import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ChooseProjectComponent,
    ProjectComponent,
    AccessCouponComponent,
    ShowCouponComponent,
    DocumentListComponent,
    DocumentComponent,
    EchoComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FlexLayoutModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
    // OwlModule,
    // DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
