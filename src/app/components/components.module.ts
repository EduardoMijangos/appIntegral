import { ViewProductComponent } from './view-product/view-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';



@NgModule({
  declarations: [
    NewProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NewProductComponent,
    ViewProductComponent
  ]
})
export class ComponentsModule { }
