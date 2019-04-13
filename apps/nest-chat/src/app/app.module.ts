import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutComponent } from './core/components/layout/layout.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
