import { NgModule } from '@angular/core';
import { ApifsService } from 'src/app/apifs.service';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { SearchStationComponent } from './search-station/search-station.component';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SolutionsComponent } from './solutions/solutions.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ApifsInterceptor } from 'src/app/apifs.interceptor';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzListModule,
    NzRadioModule,
    NzTableModule,
    NzTimePickerModule,
    NzDatePickerModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [WelcomeComponent, SearchStationComponent, SolutionsComponent],
  providers: [ApifsService, { provide: HTTP_INTERCEPTORS, useClass: ApifsInterceptor, multi: true }],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
