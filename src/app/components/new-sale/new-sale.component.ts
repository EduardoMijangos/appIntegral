import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss'],
})
export class NewSaleComponent  implements OnInit {
  selectedCategoria!: string;


  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}
  categorias = ['Abarrotes', 'Frutas y verduras', 'Limpieza', 'Vinos y Licorez', 'Especias', ' Golosinas']


  async close(){
    await this.modalCtr.dismiss();
  }

  onSearchChange(create: any){

  }

}
