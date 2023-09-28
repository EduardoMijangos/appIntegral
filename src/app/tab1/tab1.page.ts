import { Component } from '@angular/core';
import SwiperCore from 'swiper';
interface productSlide {
  id: number,
  imagen: string,
}

interface product {
  id: number,
  price: number,
  name: string,
  stock: number,
  description:string,
  state:boolean,
  imagen: string,
  codigo:string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  titulo = 'Sistema de Inventario'

  masVendidos:  productSlide[] = [
    {
      id: 1,
      imagen:'https://cdn.forbes.com.mx/2016/09/xbox-768x432.png'
    },
    {
      id: 2,
      imagen: 'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg'
    },
    {
      id: 3,
      imagen:'https://laguiacentral.com/wp-content/uploads/2022/07/nintendoswitcholed-1024x683.jpg'
    }
  ]

  productos: product[] = [
    {
      codigo:'qwer',
      description: 'descripcion xd',
      id: 1,
      imagen:'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'PlayStation 5',
      price: 5000,
      state: true,
      stock: 3
    },
    {
      codigo:'qwer',
      description: 'descripcion xd',
      id: 2,
      imagen:'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: ' Control',
      price: 900,
      state: true,
      stock: 5
    },
    {
      codigo:'qwer',
      description: 'descripcion xd',
      id: 3,
      imagen:'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'PlayStation 5 ultra xd',
      price: 15000,
      state: false,
      stock: 0
    },
    {
      codigo:'qwer',
      description: 'descripcion xd',
      id: 4,
      imagen:'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'audifonos ps5',
      price: 500,
      state: true,
      stock: 3
    },
  ]

}
