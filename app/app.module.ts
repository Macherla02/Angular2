import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmilyComponent } from './emily.component';
import { AgreementListComponent } from './agreements/agreement-list.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EmilyComponent,
    AgreementListComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 
