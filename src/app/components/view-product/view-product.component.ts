import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent  implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }


}
