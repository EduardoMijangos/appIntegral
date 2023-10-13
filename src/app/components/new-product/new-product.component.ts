import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent  implements OnInit {

  imgProduct = './assets/foto.jpg';
  currentFile?: any[] = [];
  formProduct!: FormGroup
  
  selectedCategoria!: string;
  selectedInventario!: string;
  
  categorias = ['Abarrotes', 'Frutas y verduras', 'Limpieza', 'Vinos y Licorez', 'Especias', ' Golosinas']
inventario = ['']

  constructor(
    private modalCtr: ModalController,
    private compressImg: NgxImageCompressService,
    private fb: FormBuilder,
    private productServ: ProductsService
  ) { 
    this.formProduct = this.fb.group({
      name: ['', [Validators.required,
        Validators.maxLength(50),
        Validators.minLength(10)]],
    price: [0, Validators.required],
    price_sale: [0, Validators.required],
    stock: [0, Validators.required],
    expired: ['', Validators.required],
    image: [''],
    code: ['', Validators.required],
    state: ['', Validators.required],
    category_id: [0, Validators.required], 
    })
  }

  submit(){
  //  console.log(this.formProduct.value);
    if(this.formProduct.invalid) return
      const formdata = new FormData();
    let data = this.formProduct.getRawValue();
    for(const dataKey in data){
      formdata.append(dataKey, JSON.stringify(data[dataKey]));
    }
    if(this.currentFile){
      formdata.append('image', this.currentFile[0]);
    }
    this.productServ.newProduct(formdata).subscribe( resp => {
      console.log(resp);
      
    })
    console.log(data);
  }

  imageProduct( ev: any){
    console.log(ev);
    this.compressImg.uploadFile().then(({ image, orientation}) =>{
      this.generarURL(image);
      const blob =  this.dataURItoBlob(image);
      this.currentFile![0] = blob;

    })
  }

  generarURL(image: any){
    const byteString = atob(image.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: '' });
    // Crear la URL de la imagen
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    // Utilizar la URL de la imagen
    this.imgProduct = imageUrl;
    document.getElementById("imgProd")?.setAttribute(
      'src', imageUrl);
     // this.formGroup.get('image').patchValue(imageUrl)
    }

    

dataURItoBlob(dataURI:any) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString})

  }
  
  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

}
