import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewProductComponent } from '../components/new-product/new-product.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private modalCtrl: ModalController
  ) {}


  categorias = ['Abarrotes', 'Frutas y verduras', 'Limpieza', 'Vinos y Licorez', 'Especias', ' Golosinas']

  titulo = "Mis productos"

  onSearchChange(create: any){

  }

  async openNewProduct(){

    const modal = await this.modalCtrl.create({
      component: NewProductComponent,
      mode: "ios"
    });

    await modal.present();
  }
}
