import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocketIoModule } from 'ngx-socket-io';

import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from './components/layout/layout.component';
import { environment } from '../../environments/environment';

const wsURL = environment.wsUrl;

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SocketIoModule.forRoot({ url: wsURL })
  ],
  exports: [LayoutComponent]
})
export class CoreModule {}
