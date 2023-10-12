import { HeadarComponent } from './headar/headar.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { NewCategoryComponent } from './new-category/new-category.component';



@NgModule({
  declarations: [
    NewProductComponent,
    ViewProductComponent,
    HeadarComponent,
    NewSaleComponent,
    NewCategoryComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NewProductComponent,
    ViewProductComponent,
    HeadarComponent,
    NewSaleComponent,
    NewCategoryComponent
  ]
})
export class ComponentsModule { }
