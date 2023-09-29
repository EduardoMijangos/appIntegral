import { Component, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
register(); //Se debe importar en cada componente que se vayan a usar
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


interface productSlide {
  id: number,
  imagen: string,

}
interface product {
  id: number,
  price: number,
  stock: number,
  name: string,
  imagen: string,
  description: string,
  state: boolean,
  codigo: string,

}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  titulo = 'Sistema de inventario';


  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Ventas por mes"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
  }



  swiperSlideChanged(e: any) {
    console.log('Changed', e);
  }
  onSwiperInit(event: any) {
    event.autoplay.start();
  }


  masVendidos: productSlide[] = [
    {
      id: 1,
      imagen: 'https://cdn.forbes.com.mx/2016/09/xbox-768x432.png'
    },
    {
      id: 2,
      imagen: 'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg'
    },
    {
      id: 3,
      imagen: 'https://laguiacentral.com/wp-content/uploads/2022/07/nintendoswitcholed-1024x683.jpg'
    }
  ];

  productos: product[] = [
    {
      codigo: 'qwer',
      description: 'descripcion xd',
      id: 1,
      imagen: 'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'PlayStation 5',
      price: 5000,
      state: true,
      stock: 3
    },
    {
      codigo: 'qwer',
      description: 'descripcion xd',
      id: 2,
      imagen: 'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'Control',
      price: 900,
      state: true,
      stock: 5
    },
    {
      codigo: 'qwer',
      description: 'descripcion xd',
      id: 3,
      imagen: 'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'PlayStation 5 ultra xd',
      price: 15000,
      state: false,
      stock: 0
    },
    {
      codigo: 'qwer',
      description: 'descripcion xd',
      id: 4,
      imagen: 'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'audifonos ps5',
      price: 500,
      state: true,
      stock: 3
    },
    {
      codigo: 'qwer',
      description: 'descripcion xd',
      id: 4,
      imagen: 'https://es.digitaltrends.com/wp-content/uploads/2023/02/martin-katler-playstation-5-ps5.jpg',
      name: 'audifonos ps5 mas caros' ,
      price: 900,
      state: true,
      stock: 28
    },
  ];
}
