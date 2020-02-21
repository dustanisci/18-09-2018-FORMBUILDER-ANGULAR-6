import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MsgComponent } from './shared/component/msg/msg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCheckboxComponent } from './shared/component/input-checkbox/input-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgComponent,
    InputCheckboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
