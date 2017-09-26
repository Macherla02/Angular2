import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmilyComponent } from './emily.component';
import { AgreementListComponent } from './agreements/agreement-list.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { AgreementFilterPipe } from './agreements/agreement-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EmilyComponent,
    AgreementListComponent,
    ProductListComponent,
    ProductFilterPipe,
    AgreementFilterPipe,
    StarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 
