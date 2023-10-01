import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent  implements OnInit {
  
  selectedCategoria!: string;
  selectedInventario!: string;
  
  categorias = ['Abarrotes', 'Frutas y verduras', 'Limpieza', 'Vinos y Licorez', 'Especias', ' Golosinas']
inventario = ['']

  constructor(
    private modalCtr: ModalController
  ) { }

  
  
  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

}
