import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login-page/login-page';
import { FirmsPage } from '../pages/firms/firms';
import { ReportsPage } from '../pages/report/report';
import { OldReports } from '../pages/old-reports/old-reports';
import { Auth } from '../providers/auth';
import { FirmService } from '../providers/getFirms'


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    FirmsPage,
    ReportsPage,
    OldReports,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    FirmsPage,
    ReportsPage,
    OldReports,
  ],
  providers: [Storage, Auth, FirmService]
})
export class AppModule { }
