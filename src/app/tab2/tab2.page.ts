import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewProductComponent } from '../components/new-product/new-product.component';
import { ViewProductComponent } from '../components/view-product/view-product.component';
import { NewSaleComponent } from '../components/new-sale/new-sale.component';
import { NewCategoryComponent } from '../components/new-category/new-category.component';
import { CategoriesService } from '../services/categories.service';

interface Categoria {
  name: string;
  color: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private modalCtrl: ModalController,
    private catserv: CategoriesService
  ) { }

  ngOnInit(): void {
    this.verCategorias();
    this.catserv.getNewCategory.subscribe(category =>{
      if(category){
        this.categorias.push(category);
      }
    })
  }

  categorias: any= [];
  filtrocategorias: any= [];
  vermas= true;
  titulo = "Mis productos";

  onSearchChange(create: any) {}

  async openNewProduct() {
    const modal = await this.modalCtrl.create({
      component: NewProductComponent,
      mode: "ios"
    });
    await modal.present();
  }

  async openViewProduct() {
    const modal = await this.modalCtrl.create({
      component: ViewProductComponent,
      mode: "ios"
    });
    await modal.present();
  }

  async openNewSale() {
    const modal = await this.modalCtrl.create({
      component: NewSaleComponent,
      mode: "ios",
      initialBreakpoint: .5,
      backdropDismiss: false
    });
    await modal.present();
  }

  onClick() {}

  async openNewCategory() {
    const modal = await this.modalCtrl.create({
      component: NewCategoryComponent,
      mode: "ios",
      initialBreakpoint: .5,
      backdropDismiss: false
    });
    await modal.present();
  }

  verCategorias() {
this.catserv.getCategorias().subscribe(res => {
  console.log(res);
  this.categorias = res;
  this.filtrocategorias = res;
  this.categorias = this.categorias.slice(0, 6);
},
err=> {
  console.log(err);
  
})
  }

  verMas(){
    this.vermas = false ;
    this.categorias = this.filtrocategorias;
  }

  verMenos(){
    this.vermas = true;
    this.categorias = this.categorias.slice(0, 6);

  }
}
