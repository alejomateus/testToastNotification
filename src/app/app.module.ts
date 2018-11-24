import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomnotificactionComponent } from './components/customnotificaction/customnotificaction.component';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';
import { ToastrModule,  ToastContainerModule,
  ToastNoAnimationModule, } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CustomnotificactionComponent,
    ToastNotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    ToastNoAnimationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
