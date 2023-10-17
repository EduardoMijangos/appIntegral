import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  categoryForm: FormGroup; // Definir el formulario FormGroup

  constructor(
    private modalCtr: ModalController,
    private catserv: CategoriesService,
    private fb: FormBuilder,
    private alert: AlertsService
  ) {
    // Inicializar el formulario y definir los campos y sus validaciones
    this.categoryForm = this.fb.group({
      name: ['', Validators.required], // Puedes agregar validadores aquí
      color: [''],
    });
  }

  ngOnInit() {}

  async close() {
    await this.modalCtr.dismiss();
  }

  guardarCategoria() {
    const categoria = this.categoryForm.value; // Obtener los valores del formulario
    this.catserv.postCategorias(categoria).subscribe(
      (response) => {
        this.catserv.setNewCategory(response);
        // Manejar la respuesta si es necesario
        console.log('Categoría guardada:', response);
        // Cerrar el modal u otras acciones después de guardar
        this.alert.generateToast({
          color: 'success', icon:'checkmark', message: "Categoría guardada", position:'top', duration:800
        })
        this.close();
      },
      (error) => {
        // Manejar el error si es necesario
        this.alert.generateToast({
          color: 'danger', icon:'close', message: "Error al guardar la categoria", position:'top', duration:800
        })
        console.error('Error al guardar la categoría:', error);
      }
    );
  }
}
