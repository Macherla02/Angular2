import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmilyComponent } from './emily.component';
import { AgreementListComponent } from './agreements/agreement-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EmilyComponent,
    AgreementListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 
